import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pool } from "../../database/db";

export  const secret = "93eef87b68d35b39769abecebc8d3599";

const loginUserIntoDB = async (email: string, password: string) => {
  const user = await pool.query(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);
  if (user.rows.length === 0) throw new Error("User not found");
  const matchPassword = await bcrypt.compare(password, user.rows[0].password);
  if (!matchPassword) throw new Error("Invalid password");

  // jwt
  const jwtPayload = {
    id: user.rows[0].id,
    name: user.rows[0].name,
    email: user.rows[0].email,
    role: user.rows[0].role,
  };
  const token = jwt.sign(jwtPayload, secret, { expiresIn: "7d" });
  return { token, user: user.rows[0] };
};

export const authService = {
  loginUserIntoDB,
};
