"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProgram = exports.getPrograms = exports.getProgramWithCourses = exports.getProgramById = exports.getInstructorProgramDetails = exports.deleteProgram = exports.createProgram = void 0;
var _programModal = _interopRequireDefault(require("../model/programModal.js"));
var _cloudinary = require("cloudinary");
var _useModal = _interopRequireDefault(require("../model/useModal.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; var r = _regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor; function n(r) { var e = "function" == typeof r && r.constructor; return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name)); } var o = { "throw": 1, "return": 2, "break": 3, "continue": 3 }; function a(r) { var e, t; return function (n) { e || (e = { stop: function stop() { return t(n.a, 2); }, "catch": function _catch() { return n.v; }, abrupt: function abrupt(r, e) { return t(n.a, o[r], e); }, delegateYield: function delegateYield(r, o, a) { return e.resultName = o, t(n.d, _regeneratorValues(r), a); }, finish: function finish(r) { return t(n.f, r); } }, t = function t(r, _t, o) { n.p = e.prev, n.n = e.next; try { return r(_t, o); } finally { e.next = n.n; } }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n; try { return r.call(this, e); } finally { n.p = e.prev, n.n = e.next; } }; } return (_regeneratorRuntime = function _regeneratorRuntime() { return { wrap: function wrap(e, t, n, o) { return r.w(a(e), t, n, o && o.reverse()); }, isGeneratorFunction: n, mark: r.m, awrap: function awrap(r, e) { return new _OverloadYield(r, e); }, AsyncIterator: _regeneratorAsyncIterator, async: function async(r, e, t, o, u) { return (n(e) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r), e, t, o, u); }, keys: _regeneratorKeys, values: _regeneratorValues }; })(); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
_cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Get all programs
var getPrograms = exports.getPrograms = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var programs;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _programModal["default"].find();
        case 3:
          programs = _context.sent;
          res.json(programs);
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0.message
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getPrograms(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Get a program by ID
var getProgramById = exports.getProgramById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var program;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _programModal["default"].findById(req.params.id);
        case 3:
          program = _context2.sent;
          if (program) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: "Program not found"
          }));
        case 6:
          res.json(program);
          _context2.next = 12;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: _context2.t0.message
          });
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function getProgramById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// Create a new program
// export const createProgram = async (req, res) => {
//   const { program_title } = req.body;

//   try {
//     // Check if a program with the same title already exists
//     const existingProgram = await Program.findOne({ program_title });
//     if (existingProgram) {
//       return res.status(400).json({ message: "Program title already exists" });
//     }

//     const newProgram = new Program({ program_title });
//     const savedProgram = await newProgram.save();
//     res.status(201).json(savedProgram);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// Update a program
var updateProgram = exports.updateProgram = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var program, updatedProgram;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _programModal["default"].findById(req.params.id);
        case 3:
          program = _context3.sent;
          if (program) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: "Program not found"
          }));
        case 6:
          program.program_title = req.body.program_title || program.program_title;
          program.programContent = req.body.programContent || program.programContent;
          _context3.next = 10;
          return program.save();
        case 10:
          updatedProgram = _context3.sent;
          res.json(updatedProgram);
          _context3.next = 17;
          break;
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          res.status(400).json({
            message: _context3.t0.message
          });
        case 17:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 14]]);
  }));
  return function updateProgram(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// Delete a program
var deleteProgram = exports.deleteProgram = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var program;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _programModal["default"].findById(req.params.id);
        case 3:
          program = _context4.sent;
          if (program) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "Program not found"
          }));
        case 6:
          _context4.next = 8;
          return _programModal["default"].findByIdAndDelete(req.params.id);
        case 8:
          // Use findByIdAndDelete
          res.json({
            message: "Program deleted"
          });
          _context4.next = 14;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            message: _context4.t0.message
          });
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function deleteProgram(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//special controlles btn program and courses

var getProgramWithCourses = exports.getProgramWithCourses = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var program;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _programModal["default"].findById(req.params.id).populate("courses");
        case 3:
          program = _context5.sent;
          if (program) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: "Program not found"
          }));
        case 6:
          res.json(program);
          _context5.next = 12;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            message: _context5.t0.message
          });
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function getProgramWithCourses(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();

// Configure Cloudinary

var createProgram = exports.createProgram = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body, program_title, programContent, images, existingProgram, uploadFiles, imageUrls, newProgram, savedProgram;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$body = req.body, program_title = _req$body.program_title, programContent = _req$body.programContent;
          images = req.files.images;
          console.log("Request body:", req.body);
          console.log("Request files:", req.files);
          _context7.prev = 4;
          _context7.next = 7;
          return _programModal["default"].findOne({
            program_title: program_title
          });
        case 7:
          existingProgram = _context7.sent;
          if (!existingProgram) {
            _context7.next = 10;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            message: "Program title already exists"
          }));
        case 10:
          uploadFiles = /*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(files) {
              var urls, _iterator, _step, file, result;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    urls = [];
                    _iterator = _createForOfIteratorHelper(files);
                    _context6.prev = 2;
                    _iterator.s();
                  case 4:
                    if ((_step = _iterator.n()).done) {
                      _context6.next = 21;
                      break;
                    }
                    file = _step.value;
                    _context6.prev = 6;
                    console.log("Uploading file: ".concat(file.path));
                    _context6.next = 10;
                    return _cloudinary.v2.uploader.upload(file.path, {
                      resource_type: "auto"
                    });
                  case 10:
                    result = _context6.sent;
                    console.log("File uploaded: ".concat(result.secure_url));
                    urls.push(result.secure_url);
                    _context6.next = 19;
                    break;
                  case 15:
                    _context6.prev = 15;
                    _context6.t0 = _context6["catch"](6);
                    console.error("Error uploading file to Cloudinary:", _context6.t0);
                    throw _context6.t0;
                  case 19:
                    _context6.next = 4;
                    break;
                  case 21:
                    _context6.next = 26;
                    break;
                  case 23:
                    _context6.prev = 23;
                    _context6.t1 = _context6["catch"](2);
                    _iterator.e(_context6.t1);
                  case 26:
                    _context6.prev = 26;
                    _iterator.f();
                    return _context6.finish(26);
                  case 29:
                    return _context6.abrupt("return", urls);
                  case 30:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, null, [[2, 23, 26, 29], [6, 15]]);
            }));
            return function uploadFiles(_x11) {
              return _ref7.apply(this, arguments);
            };
          }();
          if (!images) {
            _context7.next = 17;
            break;
          }
          _context7.next = 14;
          return uploadFiles(images);
        case 14:
          _context7.t0 = _context7.sent;
          _context7.next = 18;
          break;
        case 17:
          _context7.t0 = [];
        case 18:
          imageUrls = _context7.t0;
          console.log("Image URLs:", imageUrls);

          // Create a new program
          newProgram = new _programModal["default"]({
            program_title: program_title,
            programContent: programContent,
            images: imageUrls
          });
          _context7.next = 23;
          return newProgram.save();
        case 23:
          savedProgram = _context7.sent;
          res.status(201).json({
            data: savedProgram,
            message: "Success"
          });
          _context7.next = 31;
          break;
        case 27:
          _context7.prev = 27;
          _context7.t1 = _context7["catch"](4);
          console.error("Error creating program:", _context7.t1.message);
          res.status(500).json({
            message: "Error creating program. Please try again later."
          });
        case 31:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[4, 27]]);
  }));
  return function createProgram(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

//Special endpoint
// Get programs related to the logged-in instructor

// Assuming you have a Program model

var getInstructorProgramDetails = exports.getInstructorProgramDetails = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var instructorId, instructor, programs;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          // Ensure the user is authenticated
          instructorId = req.user._id; // Assuming req.user contains authenticated user details
          // Find the instructor and check if they are authorized
          _context8.next = 4;
          return _useModal["default"].findById(instructorId);
        case 4:
          instructor = _context8.sent;
          if (!(!instructor || instructor.role !== "isInstructor")) {
            _context8.next = 7;
            break;
          }
          return _context8.abrupt("return", res.status(403).json({
            message: "Unauthorized access"
          }));
        case 7:
          if (instructor.instructor_department) {
            _context8.next = 9;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            message: "Instructor department not specified"
          }));
        case 9:
          _context8.next = 11;
          return _programModal["default"].find({
            department: instructor.instructor_department
          });
        case 11:
          programs = _context8.sent;
          if (!(!programs || programs.length === 0)) {
            _context8.next = 14;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: "No programs found for this department"
          }));
        case 14:
          // Return the programs
          res.status(200).json({
            message: "Success",
            data: programs
          });
          _context8.next = 21;
          break;
        case 17:
          _context8.prev = 17;
          _context8.t0 = _context8["catch"](0);
          console.error("Error fetching instructor's program details:", _context8.t0.message);
          res.status(500).json({
            message: "Error fetching program details. Please try again later."
          });
        case 21:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 17]]);
  }));
  return function getInstructorProgramDetails(_x12, _x13) {
    return _ref8.apply(this, arguments);
  };
}();