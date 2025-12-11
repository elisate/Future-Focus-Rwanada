"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _contactController = require("../controller/contactController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var contactRouter = _express["default"].Router();
contactRouter.post("/createContact", _contactController.createContact);
contactRouter.get("/getAllContacts", _contactController.getAllContacts);
contactRouter.get("/getContactById/:id", _contactController.getContactById);
contactRouter.put("/updateContact/:id", _contactController.updateContact);
contactRouter["delete"]("/deleteContact/:id", _contactController.deleteContact);
contactRouter.post("/reply", _contactController.replyToContact);
var _default = exports["default"] = contactRouter;