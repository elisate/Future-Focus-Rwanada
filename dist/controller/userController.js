"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.updateProfile = exports.register = exports.refreshTokens = exports.login = exports.isInstructor = exports.isAdmin = exports.getUserById = exports.getProfile = exports.getAllUsers = exports.deleteUser = void 0;
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _useModal = _interopRequireDefault(require("../model/useModal.js"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _generateUserTokens = require("../../utils/generateUserTokens.js");
var _cloudinary = require("cloudinary");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; var r = _regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor; function n(r) { var e = "function" == typeof r && r.constructor; return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name)); } var o = { "throw": 1, "return": 2, "break": 3, "continue": 3 }; function a(r) { var e, t; return function (n) { e || (e = { stop: function stop() { return t(n.a, 2); }, "catch": function _catch() { return n.v; }, abrupt: function abrupt(r, e) { return t(n.a, o[r], e); }, delegateYield: function delegateYield(r, o, a) { return e.resultName = o, t(n.d, _regeneratorValues(r), a); }, finish: function finish(r) { return t(n.f, r); } }, t = function t(r, _t, o) { n.p = e.prev, n.n = e.next; try { return r(_t, o); } finally { e.next = n.n; } }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n; try { return r.call(this, e); } finally { n.p = e.prev, n.n = e.next; } }; } return (_regeneratorRuntime = function _regeneratorRuntime() { return { wrap: function wrap(e, t, n, o) { return r.w(a(e), t, n, o && o.reverse()); }, isGeneratorFunction: n, mark: r.m, awrap: function awrap(r, e) { return new _OverloadYield(r, e); }, AsyncIterator: _regeneratorAsyncIterator, async: function async(r, e, t, o, u) { return (n(e) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r), e, t, o, u); }, keys: _regeneratorKeys, values: _regeneratorValues }; })(); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
_dotenv["default"].config();
var register = exports.register = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, firstname, lastname, email, gender, password, role, instructor_department, images, existingUser, hashedPassword, user;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, firstname = _req$body.firstname, lastname = _req$body.lastname, email = _req$body.email, gender = _req$body.gender, password = _req$body.password, role = _req$body.role, instructor_department = _req$body.instructor_department, images = _req$body.images; // Check if the email already exists
          _context.next = 4;
          return _useModal["default"].findOne({
            email: email
          });
        case 4:
          existingUser = _context.sent;
          if (!existingUser) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: "Email already exists"
          }));
        case 7:
          _context.next = 9;
          return _bcryptjs["default"].hash(password, 10);
        case 9:
          hashedPassword = _context.sent;
          // 10 is the salt rounds
          user = new _useModal["default"]({
            firstname: firstname,
            lastname: lastname,
            email: email,
            gender: gender,
            instructor_department: instructor_department,
            images: images,
            password: hashedPassword,
            // Save hashed password
            role: role
          });
          user.tokens.accessToken = (0, _generateUserTokens.generateAccessToken)(user);
          user.tokens.refreshToken = (0, _generateUserTokens.generateRefreshToken)(user);
          _context.next = 15;
          return user.save();
        case 15:
          res.status(201).json({
            message: "Account created successfull !",
            user: _objectSpread(_objectSpread({}, user.toObject()), {}, {
              tokens: {
                accessToken: user.tokens.accessToken,
                refreshToken: user.tokens.refreshToken
              }
            })
          });
          _context.next = 21;
          break;
        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: "Failed to register user",
            error: _context.t0.message
          });
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 18]]);
  }));
  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var login = exports.login = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body2, email, password, user, isMatch, accessToken, refreshToken, userResponse;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.next = 4;
          return _useModal["default"].findOne({
            email: email
          });
        case 4:
          user = _context2.sent;
          if (user) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 7:
          _context2.next = 9;
          return _bcryptjs["default"].compare(password, user.password);
        case 9:
          isMatch = _context2.sent;
          if (isMatch) {
            _context2.next = 12;
            break;
          }
          return _context2.abrupt("return", res.status(401).json({
            message: "Invalid credentials"
          }));
        case 12:
          accessToken = (0, _generateUserTokens.generateAccessToken)(user);
          refreshToken = (0, _generateUserTokens.generateRefreshToken)(user);
          user.tokens = {
            accessToken: accessToken,
            refreshToken: refreshToken
          };
          _context2.next = 17;
          return user.save();
        case 17:
          userResponse = {
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            instructor_department: user.instructor_department,
            role: user.role,
            gender: user.gender,
            images: user.images,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            tokens: {
              accessToken: accessToken,
              refreshToken: refreshToken
            }
          };
          res.json({
            user: userResponse
          });
          _context2.next = 24;
          break;
        case 21:
          _context2.prev = 21;
          _context2.t0 = _context2["catch"](0);
          // General error handling
          res.status(500).json({
            message: "Server error",
            error: _context2.t0.message
          });
        case 24:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 21]]);
  }));
  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var refreshTokens = exports.refreshTokens = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var refreshToken, decoded, user, newAccessToken, newRefreshToken;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          refreshToken = req.body.refreshToken;
          if (refreshToken) {
            _context3.next = 3;
            break;
          }
          return _context3.abrupt("return", res.status(403).json({
            message: "Refresh token is required"
          }));
        case 3:
          _context3.prev = 3;
          decoded = _jsonwebtoken["default"].verify(refreshToken, process.env.JWT_REFRESH_SECRET);
          _context3.next = 7;
          return _useModal["default"].findOne({
            _id: decoded._id,
            "tokens.refreshToken": refreshToken
          });
        case 7:
          user = _context3.sent;
          if (user) {
            _context3.next = 10;
            break;
          }
          return _context3.abrupt("return", res.status(403).json({
            message: "Invalid refresh token"
          }));
        case 10:
          newAccessToken = (0, _generateUserTokens.generateAccessToken)(user);
          newRefreshToken = (0, _generateUserTokens.generateRefreshToken)(user);
          user.tokens = {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
          };
          _context3.next = 15;
          return user.save();
        case 15:
          res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
          });
          _context3.next = 21;
          break;
        case 18:
          _context3.prev = 18;
          _context3.t0 = _context3["catch"](3);
          res.status(403).json({
            message: "Invalid refresh token",
            error: _context3.t0.message
          });
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[3, 18]]);
  }));
  return function refreshTokens(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getProfile = exports.getProfile = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          res.json(req.user);
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getProfile(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
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

//CRUD OPERATIONS

var getAllUsers = exports.getAllUsers = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var users;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _useModal["default"].find();
        case 3:
          users = _context5.sent;
          res.json(users);
          _context5.next = 10;
          break;
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            message: "Failed to fetch users",
            error: _context5.t0.message
          });
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function getAllUsers(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var getUserById = exports.getUserById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var userId, user;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          userId = req.params.id;
          _context6.prev = 1;
          _context6.next = 4;
          return _useModal["default"].findById(userId);
        case 4:
          user = _context6.sent;
          if (user) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 7:
          res.json(user);
          _context6.next = 13;
          break;
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](1);
          res.status(500).json({
            message: "Failed to fetch user",
            error: _context6.t0.message
          });
        case 13:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 10]]);
  }));
  return function getUserById(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var updateUser = exports.updateUser = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var userId, updates, user;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          userId = req.params.id;
          updates = req.body;
          _context7.prev = 2;
          _context7.next = 5;
          return _useModal["default"].findByIdAndUpdate(userId, updates, {
            "new": true
          });
        case 5:
          user = _context7.sent;
          if (user) {
            _context7.next = 8;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 8:
          res.json({
            message: "User updated successfully",
            user: user
          });
          _context7.next = 14;
          break;
        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](2);
          res.status(500).json({
            message: "Failed to update user",
            error: _context7.t0.message
          });
        case 14:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[2, 11]]);
  }));
  return function updateUser(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
var deleteUser = exports.deleteUser = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var userId, user;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          userId = req.params.id;
          _context8.prev = 1;
          _context8.next = 4;
          return _useModal["default"].findByIdAndDelete(userId);
        case 4:
          user = _context8.sent;
          if (user) {
            _context8.next = 7;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 7:
          res.json({
            message: "User deleted successfully",
            user: user
          });
          _context8.next = 13;
          break;
        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](1);
          res.status(500).json({
            message: "Failed to delete user",
            error: _context8.t0.message
          });
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 10]]);
  }));
  return function deleteUser(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();

//Updating the Profile Pic
// ... (existing imports)

// export const updateProfile = async (req, res) => {
//   const userId = req.params.id;
//   const updates = req.body;

//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Only allow updating the role if the user is an admin
//     if (req.user.role !== "isAdmin" && updates.role) {
//       return res
//         .status(403)
//         .json({ message: "Only admins can update the role" });
//     }

//     // If a profile picture is uploaded, save the URL to the user's profilePicture field
//     if (req.files && req.files.profilePicture) {
//       const profilePictureFile = req.files.profilePicture[0]; // Accessing the first uploaded file for profilePicture
//       updates.profilePicture = profilePictureFile.path; // This is the URL of the uploaded image in Cloudinary
//     }

//     // Update the user profile with new data
//     const updatedUser = await User.findByIdAndUpdate(userId, updates, {
//       new: true,
//     });

//     res.json({ message: "Profile updated successfully", user: updatedUser });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to update profile", error: error.message });
//   }
// };
var updateProfile = exports.updateProfile = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var userId, updates, user, profilePictureFile, updatedUser;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          userId = req.params.id;
          updates = req.body;
          _context9.prev = 2;
          _context9.next = 5;
          return _useModal["default"].findById(userId);
        case 5:
          user = _context9.sent;
          if (user) {
            _context9.next = 8;
            break;
          }
          return _context9.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 8:
          if (!(req.user.role !== "isAdmin" && updates.role)) {
            _context9.next = 10;
            break;
          }
          return _context9.abrupt("return", res.status(403).json({
            message: "Only admins can update the role"
          }));
        case 10:
          if (req.files && req.files.profilePicture) {
            profilePictureFile = req.files.profilePicture[0];
            updates.profilePicture = profilePictureFile.path;
          }
          _context9.next = 13;
          return _useModal["default"].findByIdAndUpdate(userId, updates, {
            "new": true
          });
        case 13:
          updatedUser = _context9.sent;
          res.json({
            message: "Profile updated successfully",
            user: updatedUser
          });
          _context9.next = 20;
          break;
        case 17:
          _context9.prev = 17;
          _context9.t0 = _context9["catch"](2);
          res.status(500).json({
            message: "Failed to update profile",
            error: _context9.t0.message
          });
        case 20:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[2, 17]]);
  }));
  return function updateProfile(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();