import bcrypt, { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import User from "../models/User";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ error: "Invalid email or password", success: false });
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(400)
        .json({ error: "Invalid email or password", success: false });
    }

    const token = sign(
      { userId: user._id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10m" }
    );
    const refreshToken = sign(
      { userId: user._id },
      process.env.REFRESH_TOKEN_SECRET
    );

    res.json({
      data: {
        token,
        refreshToken,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      success: true,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", success: false });
  }
};

const signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Email already exists", success: false });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      name: name,
      email: email,
      role: role,
      password: hashedPassword,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", success: true });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", success: false });
  }
};

export default {
  login,
  signup,
};
