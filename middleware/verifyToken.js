import jwt from "jsonwebtoken";

export default function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access Denied");

  try {
    // const verified = jwt.verify(token, process.env.TOKEN_SECRET); // for production
    const verified = jwt.verify(token, "secret-key");
    req.doctorId = verified.doctorId;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
}
