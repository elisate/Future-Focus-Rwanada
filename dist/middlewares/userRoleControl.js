"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInstructor = exports.isAdmin = void 0;
var isAdmin = exports.isAdmin = function isAdmin(req, res, next) {
  if (req.user.role !== "isAdmin") {
    return res.status(403).json({
      message: "Access denied"
    });
  }
  next();
};
var isInstructor = exports.isInstructor = function isInstructor(req, res, next) {
  if (req.user.role !== "isInstructor") {
    return res.status(403).json({
      message: "Access denied"
    });
  }
  next();
};