import bcrypt from "bcrypt";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../../lib/prisma";
const register: RequestHandler = async (req, res) => {
  const payload = req.body;

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const user = await prisma.user.create({
    data: { ...payload, password: hashedPassword },
  });
  res.send({ message: "Registration Successfully done !!", data: user });
};

const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.send({ message: "User not found" });

  const matchPass = await bcrypt.compare(password, user.password);

  if (!matchPass) return res.send({ message: "Password does not match" });

  const token = await jwt.sign(
    { id: user.id, role: user.role },
    "very secret",
    { expiresIn: "7d" },
  );

  res.send({ message: "Login Successfully done !!", token });
};

export const userController = {
  register,
  login,
};
