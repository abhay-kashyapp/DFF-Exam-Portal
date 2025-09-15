import jwt from "jsonwebtoken";

const generateToken = (userId, userName) => {
  const payload = {
    id: userId,
    name: userName,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
};

export default generateToken;
