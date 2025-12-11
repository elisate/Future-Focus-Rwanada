"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateContact = exports.replyToContact = exports.getContactById = exports.getAllContacts = exports.deleteContact = exports.createContact = void 0;
var _contactModal = _interopRequireDefault(require("../model/contactModal.js"));
var _sendemail = _interopRequireDefault(require("../../utils/sendemail.js"));
var _sendingSMS = _interopRequireDefault(require("../../twlio/sendingSMS.js"));
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
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Create a new contact

var createContact = exports.createContact = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, names, email, subject, message, newContact, savedContact, htmlContent, emailSent;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, names = _req$body.names, email = _req$body.email, subject = _req$body.subject, message = _req$body.message; // Create a new contact entry
          newContact = new _contactModal["default"]({
            names: names,
            email: email,
            subject: subject,
            message: message
          });
          _context.next = 5;
          return newContact.save();
        case 5:
          savedContact = _context.sent;
          // Create HTML content for the email
          htmlContent = "\n      <div style=\"font-family: Arial, sans-serif; padding: 20px; color: #333;\">\n        <h2 style=\"color: #ea7b30;\">Thank You for Contacting Us!</h2>\n        <p>Hi ".concat(names, ",</p>\n        <p>Thank you for reaching out. We have received your message and will get back to you shortly.</p>\n        \n        <p>Best Regards,<br>Future Focus Rwanda Team</p>\n      </div>\n    "); // Send the email
          _context.next = 9;
          return (0, _sendemail["default"])(email, subject, htmlContent);
        case 9:
          emailSent = _context.sent;
          if (emailSent) {
            console.log("Confirmation email sent to:", email);
          }
          res.status(201).json(savedContact);
          _context.next = 18;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.error("Error creating contact:", _context.t0);
          res.status(500).json({
            error: "Failed to create contact"
          });
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 14]]);
  }));
  return function createContact(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Get all contacts
var getAllContacts = exports.getAllContacts = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var contacts;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _contactModal["default"].find();
        case 3:
          contacts = _context2.sent;
          res.status(200).json(contacts);
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            error: "Failed to retrieve contacts"
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getAllContacts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// Get a single contact by ID
var getContactById = exports.getContactById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var contact;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _contactModal["default"].findById(req.params.id);
        case 3:
          contact = _context3.sent;
          if (contact) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            error: "Contact not found"
          }));
        case 6:
          res.status(200).json(contact);
          _context3.next = 12;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            error: "Failed to retrieve contact"
          });
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function getContactById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// Update a contact by ID
var updateContact = exports.updateContact = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body2, names, email, subject, message, updatedContact;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body2 = req.body, names = _req$body2.names, email = _req$body2.email, subject = _req$body2.subject, message = _req$body2.message;
          _context4.next = 4;
          return _contactModal["default"].findByIdAndUpdate(req.params.id, {
            names: names,
            email: email,
            subject: subject,
            message: message
          }, {
            "new": true,
            runValidators: true
          });
        case 4:
          updatedContact = _context4.sent;
          if (updatedContact) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            error: "Contact not found"
          }));
        case 7:
          res.status(200).json(updatedContact);
          _context4.next = 13;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            error: "Failed to update contact"
          });
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function updateContact(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// Delete a contact by ID
var deleteContact = exports.deleteContact = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var deletedContact;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _contactModal["default"].findByIdAndDelete(req.params.id);
        case 3:
          deletedContact = _context5.sent;
          if (deletedContact) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            error: "Contact not found"
          }));
        case 6:
          res.status(200).json({
            message: "Contact deleted successfully"
          });
          _context5.next = 12;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            error: "Failed to delete contact"
          });
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function deleteContact(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();

// export const replyToContact = async (req, res) => {
//   try {
//     const { contactId, replySubject, replyMessage } = req.body;

//     // Fetch the contact by ID to get the email address
//     const contact = await Contact.findById(contactId);
//     if (!contact) {
//       return res.status(404).json({ error: "Contact not found" });
//     }

//     // Prepare the email content
//     const htmlContent = `
//       <p>Dear ${contact.names},</p>
//       <p>${replyMessage}</p>
//       <p>Best regards,<br>Future Focus Rwanda Team</p>
//     `;

//     // Send the reply email
//     const emailSent = await sendEmail(contact.email, replySubject, htmlContent);
//     if (!emailSent) {
//       return res.status(500).json({ error: "Failed to send email reply" });
//     }

//     res.status(200).json({ message: "Email reply sent successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to send email reply" });
//   }
// };

// export const createContact = async (req, res) => {
//   try {
//     const { names, email, subject, message } = req.body;

//     // Create a new contact entry with status set to "pending"
//     const newContact = new Contact({
//       names,
//       email,
//       subject,
//       message,
//       status: "Pending" // Set status to pending
//     });
//     const savedContact = await newContact.save();

//     // Create HTML content for the email
//     const htmlContent = `
//       <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
//         <h2 style="color: #ea7b30;">Thank You for Contacting Us!</h2>
//         <p>Hi ${names},</p>
//         <p>Thank you for reaching out. We have received your message and will get back to you shortly.</p>
//         <p>Best Regards,<br>Future Focus Rwanda Team</p>
//       </div>
//     `;

//     // Send the confirmation email
//     const emailSent = await sendEmail(email, subject, htmlContent);
//     if (emailSent) {
//       console.log("Confirmation email sent to:", email);
//     }

//     res.status(201).json(savedContact);
//   } catch (error) {
//     console.error("Error creating contact:", error);
//     res.status(500).json({ error: "Failed to create contact" });
//   }
// };

var replyToContact = exports.replyToContact = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body3, contactId, replySubject, replyMessage, contact, htmlContent, emailSent;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _req$body3 = req.body, contactId = _req$body3.contactId, replySubject = _req$body3.replySubject, replyMessage = _req$body3.replyMessage; // Fetch the contact by ID to get the email address
          _context6.next = 4;
          return _contactModal["default"].findById(contactId);
        case 4:
          contact = _context6.sent;
          if (contact) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            error: "Contact not found"
          }));
        case 7:
          // Prepare the email content
          htmlContent = "\n      <p>Dear ".concat(contact.names, ",</p>\n      <p>").concat(replyMessage, "</p>\n      <p>Best regards,<br>Future Focus Rwanda Team</p>\n    "); // Send the reply email
          _context6.next = 10;
          return (0, _sendemail["default"])(contact.email, replySubject, htmlContent);
        case 10:
          emailSent = _context6.sent;
          if (emailSent) {
            _context6.next = 13;
            break;
          }
          return _context6.abrupt("return", res.status(500).json({
            error: "Failed to send email reply"
          }));
        case 13:
          // Update the contact's status to "replied"
          contact.status = "Replied"; // Set status to replied
          _context6.next = 16;
          return contact.save();
        case 16:
          res.status(200).json({
            message: "Email reply sent successfully"
          });
          _context6.next = 23;
          break;
        case 19:
          _context6.prev = 19;
          _context6.t0 = _context6["catch"](0);
          console.error("Error sending email reply:", _context6.t0);
          res.status(500).json({
            error: "Failed to send email reply"
          });
        case 23:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 19]]);
  }));
  return function replyToContact(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

// export const createContact = async (req, res) => {
//   try {
//     const { names, email, subject, message, phone } = req.body;

//     // Create a new contact entry with status set to "pending"
//     const newContact = new Contact({
//       names,
//       email,
//       subject,
//       message,
//       phone, // Include phoneNumber in the contact entry
//       status: "Pending", // Set status to pending
//     });
//     const savedContact = await newContact.save();

//     // Create SMS content for the confirmation message
//     const smsContent = `
// Hi ${names}, 

// Thank you for reaching out to Future Focus Rwanda. 
// We have received your message and will get back to you shortly.

// Best Regards,
// The Future Focus Rwanda Team
//     `;

//     // Send the confirmation SMS
//     const smsSent = await sendSms(phone, smsContent);
//     if (smsSent) {
//       console.log("Confirmation SMS sent to:", phone);
//     } else {
//       console.log("Failed to send SMS to:", phone);
//     }

//     res.status(201).json(savedContact);
//   } catch (error) {
//     console.error("Error creating contact:", error);
//     res.status(500).json({ error: "Failed to create contact" });
//   }
// };