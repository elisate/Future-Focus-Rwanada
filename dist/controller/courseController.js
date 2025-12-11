"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCourse = exports.getCourses = exports.getCourseDetails = exports.getCourseById = exports.deleteCourse = exports.createCourse = void 0;
var _courseModal = _interopRequireDefault(require("../model/courseModal.js"));
var _programModal = _interopRequireDefault(require("../model/programModal.js"));
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
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } // Ensure the Program model is imported
_cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
var createCourse = exports.createCourse = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, program_title, courseTitle, courseContent, _req$files, videos, documents, images, foundProgram, programId, uploadFiles, videoUrls, documentUrls, imageUrls, course;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, program_title = _req$body.program_title, courseTitle = _req$body.courseTitle, courseContent = _req$body.courseContent;
          _req$files = req.files, videos = _req$files.videos, documents = _req$files.documents, images = _req$files.images;
          if (!(!videos && !documents && !images)) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: "At least one file is required"
          }));
        case 5:
          _context2.next = 7;
          return _programModal["default"].findOne({
            program_title: program_title
          });
        case 7:
          foundProgram = _context2.sent;
          if (foundProgram) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: "Program not found"
          }));
        case 10:
          // Get the program ID
          programId = foundProgram._id;
          uploadFiles = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(files) {
              var urls, _iterator, _step, file, result;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    urls = [];
                    _iterator = _createForOfIteratorHelper(files);
                    _context.prev = 2;
                    _iterator.s();
                  case 4:
                    if ((_step = _iterator.n()).done) {
                      _context.next = 19;
                      break;
                    }
                    file = _step.value;
                    _context.prev = 6;
                    _context.next = 9;
                    return _cloudinary.v2.uploader.upload(file.path, {
                      resource_type: "auto"
                    });
                  case 9:
                    result = _context.sent;
                    urls.push(result.secure_url);
                    _context.next = 17;
                    break;
                  case 13:
                    _context.prev = 13;
                    _context.t0 = _context["catch"](6);
                    console.error("Error uploading file to Cloudinary:", _context.t0);
                    throw _context.t0;
                  case 17:
                    _context.next = 4;
                    break;
                  case 19:
                    _context.next = 24;
                    break;
                  case 21:
                    _context.prev = 21;
                    _context.t1 = _context["catch"](2);
                    _iterator.e(_context.t1);
                  case 24:
                    _context.prev = 24;
                    _iterator.f();
                    return _context.finish(24);
                  case 27:
                    return _context.abrupt("return", urls);
                  case 28:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[2, 21, 24, 27], [6, 13]]);
            }));
            return function uploadFiles(_x3) {
              return _ref2.apply(this, arguments);
            };
          }();
          if (!videos) {
            _context2.next = 18;
            break;
          }
          _context2.next = 15;
          return uploadFiles(videos);
        case 15:
          _context2.t0 = _context2.sent;
          _context2.next = 19;
          break;
        case 18:
          _context2.t0 = [];
        case 19:
          videoUrls = _context2.t0;
          if (!documents) {
            _context2.next = 26;
            break;
          }
          _context2.next = 23;
          return uploadFiles(documents);
        case 23:
          _context2.t1 = _context2.sent;
          _context2.next = 27;
          break;
        case 26:
          _context2.t1 = [];
        case 27:
          documentUrls = _context2.t1;
          if (!images) {
            _context2.next = 34;
            break;
          }
          _context2.next = 31;
          return uploadFiles(images);
        case 31:
          _context2.t2 = _context2.sent;
          _context2.next = 35;
          break;
        case 34:
          _context2.t2 = [];
        case 35:
          imageUrls = _context2.t2;
          _context2.next = 38;
          return _courseModal["default"].create({
            program: programId,
            courseTitle: courseTitle,
            courseContent: courseContent,
            videos: videoUrls,
            documents: documentUrls,
            images: imageUrls
          });
        case 38:
          course = _context2.sent;
          _context2.next = 41;
          return _programModal["default"].findByIdAndUpdate(programId, {
            $push: {
              courses: course._id
            }
          });
        case 41:
          return _context2.abrupt("return", res.status(201).json({
            data: course,
            message: "Success"
          }));
        case 44:
          _context2.prev = 44;
          _context2.t3 = _context2["catch"](0);
          console.error("Error creating course:", _context2.t3.message);
          res.status(500).json({
            message: "Error creating course. Please try again later."
          });
        case 48:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 44]]);
  }));
  return function createCourse(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getCourses = exports.getCourses = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var courses;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _courseModal["default"].find().populate("program", "program_title");
        case 3:
          courses = _context3.sent;
          res.json(courses);
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: _context3.t0.message
          });
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function getCourses(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
var getCourseDetails = exports.getCourseDetails = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var courseId, course;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          courseId = req.params.id; // Retrieve course ID from request parameters
          // Find the course by ID and populate the 'program' field with 'program_title'
          _context4.next = 4;
          return _courseModal["default"].findById(courseId).populate("program", "program_title");
        case 4:
          course = _context4.sent;
          if (course) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "Course not found"
          }));
        case 7:
          // Return the course details in the response
          res.json(course);
          _context4.next = 13;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          // Handle any errors that occur during the database operation
          res.status(500).json({
            message: _context4.t0.message
          });
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function getCourseDetails(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();
var getCourseById = exports.getCourseById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var course;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _courseModal["default"].findById(req.params.id).populate("program");
        case 3:
          course = _context5.sent;
          if (course) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: "Course not found"
          }));
        case 6:
          res.json(course);
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
  return function getCourseById(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
var updateCourse = exports.updateCourse = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var course, _req$body2, courseTitle, courseContent, program, _req$files2, videos, documents, images, foundProgram, uploadFiles, uploadedVideos, uploadedDocuments, uploadedImages, updatedCourse;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return _courseModal["default"].findById(req.params.id);
        case 3:
          course = _context7.sent;
          if (course) {
            _context7.next = 6;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            message: "Course not found"
          }));
        case 6:
          _req$body2 = req.body, courseTitle = _req$body2.courseTitle, courseContent = _req$body2.courseContent, program = _req$body2.program;
          _req$files2 = req.files, videos = _req$files2.videos, documents = _req$files2.documents, images = _req$files2.images; // Update course title and content if provided in the request body
          if (courseTitle) course.courseTitle = courseTitle;
          if (courseContent) course.courseContent = courseContent;

          // Handling program update
          if (!program) {
            _context7.next = 19;
            break;
          }
          _context7.next = 13;
          return _programModal["default"].findById(program);
        case 13:
          foundProgram = _context7.sent;
          if (!foundProgram) {
            _context7.next = 18;
            break;
          }
          course.program = foundProgram._id;
          _context7.next = 19;
          break;
        case 18:
          return _context7.abrupt("return", res.status(400).json({
            message: "Program not found"
          }));
        case 19:
          uploadFiles = /*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(files) {
              var urls, _iterator2, _step2, file, result;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    urls = [];
                    _iterator2 = _createForOfIteratorHelper(files);
                    _context6.prev = 2;
                    _iterator2.s();
                  case 4:
                    if ((_step2 = _iterator2.n()).done) {
                      _context6.next = 19;
                      break;
                    }
                    file = _step2.value;
                    _context6.prev = 6;
                    _context6.next = 9;
                    return _cloudinary.v2.uploader.upload(file.path, {
                      resource_type: "auto"
                    });
                  case 9:
                    result = _context6.sent;
                    urls.push(result.secure_url);
                    _context6.next = 17;
                    break;
                  case 13:
                    _context6.prev = 13;
                    _context6.t0 = _context6["catch"](6);
                    console.error("Error uploading file to Cloudinary:", _context6.t0);
                    throw _context6.t0;
                  case 17:
                    _context6.next = 4;
                    break;
                  case 19:
                    _context6.next = 24;
                    break;
                  case 21:
                    _context6.prev = 21;
                    _context6.t1 = _context6["catch"](2);
                    _iterator2.e(_context6.t1);
                  case 24:
                    _context6.prev = 24;
                    _iterator2.f();
                    return _context6.finish(24);
                  case 27:
                    return _context6.abrupt("return", urls);
                  case 28:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, null, [[2, 21, 24, 27], [6, 13]]);
            }));
            return function uploadFiles(_x10) {
              return _ref7.apply(this, arguments);
            };
          }(); // Check and update videos, documents, and images if provided
          if (!videos) {
            _context7.next = 25;
            break;
          }
          _context7.next = 23;
          return uploadFiles(videos);
        case 23:
          uploadedVideos = _context7.sent;
          course.videos = uploadedVideos;
        case 25:
          if (!documents) {
            _context7.next = 30;
            break;
          }
          _context7.next = 28;
          return uploadFiles(documents);
        case 28:
          uploadedDocuments = _context7.sent;
          course.documents = uploadedDocuments;
        case 30:
          if (!images) {
            _context7.next = 35;
            break;
          }
          _context7.next = 33;
          return uploadFiles(images);
        case 33:
          uploadedImages = _context7.sent;
          course.images = uploadedImages;
        case 35:
          _context7.next = 37;
          return course.save();
        case 37:
          updatedCourse = _context7.sent;
          res.json(updatedCourse); // Return the updated course
          _context7.next = 45;
          break;
        case 41:
          _context7.prev = 41;
          _context7.t0 = _context7["catch"](0);
          console.error("Error updating course:", _context7.t0.message);
          res.status(500).json({
            message: _context7.t0.message
          });
        case 45:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 41]]);
  }));
  return function updateCourse(_x0, _x1) {
    return _ref6.apply(this, arguments);
  };
}();
var deleteCourse = exports.deleteCourse = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var course;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return _courseModal["default"].findById(req.params.id);
        case 3:
          course = _context8.sent;
          if (course) {
            _context8.next = 6;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: "Course not found"
          }));
        case 6:
          _context8.next = 8;
          return _courseModal["default"].findByIdAndDelete(req.params.id);
        case 8:
          res.json({
            message: "Course deleted"
          });
          _context8.next = 14;
          break;
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](0);
          res.status(500).json({
            message: _context8.t0.message
          });
        case 14:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 11]]);
  }));
  return function deleteCourse(_x11, _x12) {
    return _ref8.apply(this, arguments);
  };
}();