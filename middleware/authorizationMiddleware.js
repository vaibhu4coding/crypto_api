const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({error: `${req.user.role} is not allowed to access this route`});
    }
    next();
  };
};
module.exports = {authorize};
