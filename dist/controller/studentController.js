"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStudent = exports.studentRegistration = exports.getStudents = exports.getStudentById = exports.getCoursesForStudent = exports.getCourseByIdForStudent = exports.getAllStudents = exports.deleteStudent = void 0;
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _studentModal = _interopRequireDefault(require("../model/studentModal.js"));
var _CounterModal = _interopRequireDefault(require("../model/CounterModal.js"));
var _programModal = _interopRequireDefault(require("../model/programModal.js"));
var _sendemail = _interopRequireDefault(require("../../utils/sendemail.js"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _courseModal = _interopRequireDefault(require("../model/courseModal.js"));
var _useModal = _interopRequireDefault(require("../model/useModal.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
_dotenv["default"].config;
//get student details
var getAllStudents = exports.getAllStudents = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var students;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _studentModal["default"].find().populate('program_enrolled_in');
        case 3:
          students = _context.sent;
          if (!(!students || students.length === 0)) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            message: 'No students found'
          }));
        case 6:
          res.json(students);
          _context.next = 13;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error('Error fetching student details:', _context.t0);
          res.status(500).json({
            message: 'Server Error'
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function getAllStudents(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
// Get all students
var getStudents = exports.getStudents = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var students, formattedStudents;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _studentModal["default"].find().populate("program_enrolled_in", "program_title");
        case 3:
          students = _context2.sent;
          // Populate with the program title
          // Map through students to format the response
          formattedStudents = students.map(function (student) {
            return {
              regNumber: student.regNumber,
              student_firstname: student.student_firstname,
              student_lastname: student.student_lastname,
              student_email: student.student_email,
              student_gender: student.student_gender,
              student_level_of_education: student.student_level_of_education,
              student_country: student.student_country,
              student_district: student.student_district,
              program_enrolled_in: student.program_enrolled_in ? student.program_enrolled_in.program_title : null,
              // Check if program_enrolled_in is defined
              createdAt: student.createdAt,
              updatedAt: student.updatedAt,
              __v: student.__v
            };
          });
          res.json(formattedStudents);
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: _context2.t0.message
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function getStudents(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// Get a student by ID

var getStudentById = exports.getStudentById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var student, formattedStudent;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _studentModal["default"].findById(req.params.id).populate({
            path: "program_enrolled_in",
            select: "program_title" // Only select the program_title field
          });
        case 3:
          student = _context3.sent;
          if (student) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: "Student not found"
          }));
        case 6:
          // Format the response to include program_title instead of the entire program object
          formattedStudent = {
            _id: student._id,
            student_firstname: student.student_firstname,
            student_lastname: student.student_lastname,
            student_email: student.student_email,
            student_gender: student.student_gender,
            student_level_of_education: student.student_level_of_education,
            student_country: student.student_country,
            student_district: student.student_district,
            program_enrolled_in: student.program_enrolled_in ? student.program_enrolled_in.program_title : null,
            // Check if program_enrolled_in is defined
            createdAt: student.createdAt,
            updatedAt: student.updatedAt,
            __v: student.__v
          };
          res.json(formattedStudent);
          _context3.next = 13;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: _context3.t0.message
          });
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function getStudentById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// Update a student
var updateStudent = exports.updateStudent = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body, student_firstname, student_lastname, student_email, student_gender, student_level_of_education, student_country, student_district, program_enrolled_in, student, program, updatedStudent;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, student_firstname = _req$body.student_firstname, student_lastname = _req$body.student_lastname, student_email = _req$body.student_email, student_gender = _req$body.student_gender, student_level_of_education = _req$body.student_level_of_education, student_country = _req$body.student_country, student_district = _req$body.student_district, program_enrolled_in = _req$body.program_enrolled_in;
          _context4.prev = 1;
          _context4.next = 4;
          return _studentModal["default"].findById(req.params.id);
        case 4:
          student = _context4.sent;
          if (student) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "Student not found"
          }));
        case 7:
          if (!program_enrolled_in) {
            _context4.next = 14;
            break;
          }
          _context4.next = 10;
          return _programModal["default"].findOne({
            program_title: program_enrolled_in
          });
        case 10:
          program = _context4.sent;
          if (program) {
            _context4.next = 13;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: "Program not found"
          }));
        case 13:
          student.program_enrolled_in = program._id; // Assign the ObjectId of the found Program
        case 14:
          // Hash the password if provided

          // Update other fields
          student.student_firstname = student_firstname !== null && student_firstname !== void 0 ? student_firstname : student.student_firstname;
          student.student_lastname = student_lastname !== null && student_lastname !== void 0 ? student_lastname : student.student_lastname;
          student.student_email = student_email !== null && student_email !== void 0 ? student_email : student.student_email;
          student.student_gender = student_gender !== null && student_gender !== void 0 ? student_gender : student.student_gender;
          student.student_level_of_education = student_level_of_education !== null && student_level_of_education !== void 0 ? student_level_of_education : student.student_level_of_education;
          student.student_country = student_country !== null && student_country !== void 0 ? student_country : student.student_country;
          student.student_district = student_district !== null && student_district !== void 0 ? student_district : student.student_district;
          _context4.next = 23;
          return student.save();
        case 23:
          updatedStudent = _context4.sent;
          res.json(updatedStudent);
          _context4.next = 30;
          break;
        case 27:
          _context4.prev = 27;
          _context4.t0 = _context4["catch"](1);
          res.status(400).json({
            message: _context4.t0.message
          });
        case 30:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 27]]);
  }));
  return function updateStudent(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// Delete a student
var deleteStudent = exports.deleteStudent = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var student;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _studentModal["default"].findByIdAndDelete(req.params.id);
        case 3:
          student = _context5.sent;
          if (student) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: "Student not found"
          }));
        case 6:
          res.json({
            message: "Student deleted"
          });
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
  return function deleteStudent(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();

// Create a new student
var studentRegistration = exports.studentRegistration = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body2, student_firstname, student_lastname, student_email, student_gender, student_level_of_education, student_country, student_district, program_enrolled_in, program, existingStudent, isAlreadyEnrolled, updatedStudent, currentYear, yearString, counter, sequentialNumber, studentId, newStudent, savedStudent, emailSubject, emailContent, emailSent;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body2 = req.body, student_firstname = _req$body2.student_firstname, student_lastname = _req$body2.student_lastname, student_email = _req$body2.student_email, student_gender = _req$body2.student_gender, student_level_of_education = _req$body2.student_level_of_education, student_country = _req$body2.student_country, student_district = _req$body2.student_district, program_enrolled_in = _req$body2.program_enrolled_in;
          _context6.prev = 1;
          _context6.next = 4;
          return _programModal["default"].findOne({
            program_title: program_enrolled_in
          });
        case 4:
          program = _context6.sent;
          if (program) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: "Program not found"
          }));
        case 7:
          _context6.next = 9;
          return _studentModal["default"].findOne({
            student_email: student_email
          });
        case 9:
          existingStudent = _context6.sent;
          if (!existingStudent) {
            _context6.next = 21;
            break;
          }
          // Check if the student is already enrolled in the program
          isAlreadyEnrolled = existingStudent.program_enrolled_in.includes(program._id);
          if (!isAlreadyEnrolled) {
            _context6.next = 14;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: "You are already registered in this program."
          }));
        case 14:
          // If not already enrolled, add the new program to the list
          existingStudent.program_enrolled_in.push(program._id);
          _context6.next = 17;
          return existingStudent.save();
        case 17:
          updatedStudent = _context6.sent;
          return _context6.abrupt("return", res.status(200).json({
            message: "Successfully enrolled in the new program",
            student: updatedStudent
          }));
        case 21:
          // Generate a new student ID
          currentYear = new Date().getFullYear();
          yearString = String(currentYear).slice(-2);
          _context6.next = 25;
          return _CounterModal["default"].findOne({
            year: currentYear
          });
        case 25:
          counter = _context6.sent;
          if (!counter) {
            counter = new _CounterModal["default"]({
              year: currentYear,
              count: 0
            });
          }
          counter.count += 1;
          _context6.next = 30;
          return counter.save();
        case 30:
          sequentialNumber = String(counter.count).padStart(3, "0");
          studentId = "".concat(yearString, "FFR").concat(sequentialNumber); // Create a new student with the program
          newStudent = new _studentModal["default"]({
            regNumber: studentId,
            userId: req.user._id,
            student_firstname: student_firstname,
            student_lastname: student_lastname,
            student_email: student_email,
            student_gender: student_gender,
            student_level_of_education: student_level_of_education,
            student_country: student_country,
            student_district: student_district,
            program_enrolled_in: [program._id] // Add the program here
          });
          _context6.next = 35;
          return newStudent.save();
        case 35:
          savedStudent = _context6.sent;
          _context6.next = 38;
          return _useModal["default"].findByIdAndUpdate(req.user._id, {
            role: "student"
          });
        case 38:
          // Send email notification
          emailSubject = "Registration Successful";
          emailContent = "\n        <h1>Welcome to Our E-learning Platform</h1>\n        <p>Dear ".concat(student_firstname, " ").concat(student_lastname, ",</p>\n        <p>Thank you for registering with us. Your student ID is <b>").concat(studentId, "</b>.</p>\n        <p>We are excited to have you in the <b>").concat(program_enrolled_in, "</b> program.</p>\n        <p>Best regards,<br/>Future Focus Rwanda Team</p>\n      ");
          _context6.next = 42;
          return (0, _sendemail["default"])(student_email, emailSubject, emailContent);
        case 42:
          emailSent = _context6.sent;
          if (emailSent) {
            _context6.next = 45;
            break;
          }
          return _context6.abrupt("return", res.status(500).json({
            message: "Student created but email could not be sent"
          }));
        case 45:
          return _context6.abrupt("return", res.status(201).json({
            message: "Student created successfully",
            student: savedStudent
          }));
        case 46:
          _context6.next = 51;
          break;
        case 48:
          _context6.prev = 48;
          _context6.t0 = _context6["catch"](1);
          res.status(400).json({
            message: _context6.t0.message
          });
        case 51:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 48]]);
  }));
  return function studentRegistration(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

//student login

// Get courses related to the program a student is enrolled in

var getCoursesForStudent = exports.getCoursesForStudent = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var userId, student, programs, courses;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          userId = req.user._id.toString();
          _context7.next = 4;
          return _studentModal["default"].findOne({
            userId: userId
          }).populate({
            path: "program_enrolled_in",
            populate: {
              path: "courses",
              select: "courseTitle videos images documents courseContent" // Include all relevant fields
            }
          });
        case 4:
          student = _context7.sent;
          if (student) {
            _context7.next = 7;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            message: "Student not found"
          }));
        case 7:
          // Extract courses from enrolled programs
          programs = student.program_enrolled_in;
          courses = programs.flatMap(function (program) {
            // Add program title to each course
            return program.courses.map(function (course) {
              return _objectSpread(_objectSpread({}, course.toObject()), {}, {
                program_title: program.program_title
              });
            });
          });
          if (!(courses.length === 0)) {
            _context7.next = 11;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            message: "No courses found for this student"
          }));
        case 11:
          res.json(courses);
          _context7.next = 20;
          break;
        case 14:
          _context7.prev = 14;
          _context7.t0 = _context7["catch"](0);
          console.error("Error in getCoursesForStudent:", _context7.t0);
          if (!(_context7.t0.name === "CastError")) {
            _context7.next = 19;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            message: "Invalid student ID format"
          }));
        case 19:
          res.status(500).json({
            message: "An internal server error occurred"
          });
        case 20:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 14]]);
  }));
  return function getCoursesForStudent(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

//get IT BY Id
var getCourseByIdForStudent = exports.getCourseByIdForStudent = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var courseId, userId, student, programs, course, _iterator, _step, program, matchedCourse;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          courseId = req.params.courseId;
          userId = req.user._id.toString(); // Find the student by userId and populate the enrolled program and courses
          _context8.next = 5;
          return _studentModal["default"].findOne({
            userId: userId
          }).populate({
            path: "program_enrolled_in",
            populate: {
              path: "courses",
              match: {
                _id: courseId
              },
              // Match specific course by courseId
              select: "courseTitle videos images documents courseContent" // Include relevant fields
            }
          });
        case 5:
          student = _context8.sent;
          if (student) {
            _context8.next = 8;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: "Student not found"
          }));
        case 8:
          // Extract the specific course from enrolled programs
          programs = student.program_enrolled_in;
          course = null;
          _iterator = _createForOfIteratorHelper(programs);
          _context8.prev = 11;
          _iterator.s();
        case 13:
          if ((_step = _iterator.n()).done) {
            _context8.next = 21;
            break;
          }
          program = _step.value;
          matchedCourse = program.courses.find(function (course) {
            return course._id.toString() === courseId;
          });
          if (!matchedCourse) {
            _context8.next = 19;
            break;
          }
          course = _objectSpread(_objectSpread({}, matchedCourse.toObject()), {}, {
            program_title: program.program_title // Add program title to course
          });
          return _context8.abrupt("break", 21);
        case 19:
          _context8.next = 13;
          break;
        case 21:
          _context8.next = 26;
          break;
        case 23:
          _context8.prev = 23;
          _context8.t0 = _context8["catch"](11);
          _iterator.e(_context8.t0);
        case 26:
          _context8.prev = 26;
          _iterator.f();
          return _context8.finish(26);
        case 29:
          if (course) {
            _context8.next = 31;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: "Course not found for this student"
          }));
        case 31:
          res.json(course);
          _context8.next = 40;
          break;
        case 34:
          _context8.prev = 34;
          _context8.t1 = _context8["catch"](0);
          console.error("Error in getCourseByIdForStudent:", _context8.t1);
          if (!(_context8.t1.name === "CastError")) {
            _context8.next = 39;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            message: "Invalid course ID format"
          }));
        case 39:
          res.status(500).json({
            message: "An internal server error occurred"
          });
        case 40:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 34], [11, 23, 26, 29]]);
  }));
  return function getCourseByIdForStudent(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();