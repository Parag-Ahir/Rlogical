import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["employee", "manager"],
    require: true,
  },
  casualLeaveCount: {
    type: Number,
    default: 12,
  },
  sickLeaveCount: {
    type: Number,
    default: 6,
  },
});

export default model("User", userSchema);
