import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

const SALT_ROUNDS = process.env.SALT_ROUNDS || 11;
const TOKEN_KEY = process.env.TOKEN_KEY || "thisisjustatokentokenkey";

export const signUp = async (req, res) => {};
export const signIn = async (req, res) => {};
export const verify = async (req, res) => {};
//change pw?
