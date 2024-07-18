export const isAdmin = (req, res, next) => {
  if (req.user.role !== "isAdmin") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};

export const isInstructor = (req, res, next) => {
  if (req.user.role !== "isInstructor") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};
