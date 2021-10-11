import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

const SALT_ROUNDS =
  process.env.NODE_ENV === "production" ? process.env.SALT_ROUNDS : 11;
const TOKEN_KEY =
  process.env.NODE_ENV === "production"
    ? process.env.TOKEN_KEY
    : "thisisjustatokentokenkey";

const today = new Date();
const exp = new Date(today);
exp.setDate(today.getDate() + 28);

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, Number(SALT_ROUNDS));
    const user = new User({
      username,
      email,
      password_digest,
    });
    await user.save();
    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      exp: parseInt(exp.getTime() / 1000),
    };
    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const signIn = async (req, res) => {};

export const verify = async (req, res) => {};
//change pw?
