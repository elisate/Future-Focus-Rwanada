import express from "express";
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
  replyToContact
} from "../controller/contactController.js"


const contactRouter = express.Router();

contactRouter.post("/createContact", createContact);
contactRouter.get("/getAllContacts", getAllContacts);
contactRouter.get("/getContactById/:id", getContactById);
contactRouter.put("/updateContact/:id", updateContact);
contactRouter.delete("/deleteContact/:id", deleteContact);
contactRouter.post("/reply", replyToContact);


export default contactRouter;
