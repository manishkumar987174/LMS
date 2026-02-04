const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token)
    return res.status(401).json({ msg: "No token provided" });

  if (token.startsWith("Bearer "))
    token = token.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "SECRET123");
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  }
};

exports.allowRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return res.status(403).json({ msg: "Access denied" });
    next();
  };
};
