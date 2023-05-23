const jwt = require("jsonwebtoken");
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.startsWith("Bearer ");

  if (!token) {
    return res.status(401).json({message: "Login first..."});
  }
  const token1 = authHeader.split(" ")[1];
  jwt.verify(token1, "your_name", (err, user) => {
    if (err) {
      return res.status(403).json({message: "Invalid token"});
    }
    req.user = user;
    next();
  });
};

module.exports = {authenticateToken};
