import Contact from "../model/contactModal.js";
import sendEmail from "../../utils/sendemail.js";

// Create a new contact


export const createContact = async (req, res) => {
  try {
    const { names, email, subject, message } = req.body;

    // Create a new contact entry
    const newContact = new Contact({ names, email, subject, message });
    const savedContact = await newContact.save();

    // Create HTML content for the email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #ea7b30;">Thank You for Contacting Us!</h2>
        <p>Hi ${names},</p>
        <p>Thank you for reaching out. We have received your message and will get back to you shortly.</p>
        
        <p>Best Regards,<br>Future Focus Rwanda Team</p>
      </div>
    `;

    // Send the email
    const emailSent = await sendEmail(email, subject, htmlContent);
    if (emailSent) {
      console.log("Confirmation email sent to:", email);
    }

    res.status(201).json(savedContact);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Failed to create contact" });
  }
};


// Get all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve contacts" });
  }
};

// Get a single contact by ID
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve contact" });
  }
};

// Update a contact by ID
export const updateContact = async (req, res) => {
  try {
    const { names, email, subject, message } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { names, email, subject, message },
      { new: true, runValidators: true }
    );
    if (!updatedContact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ error: "Failed to update contact" });
  }
};

// Delete a contact by ID
export const deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete contact" });
  }
};


export const replyToContact = async (req, res) => {
  try {
    const { contactId, replySubject, replyMessage } = req.body;

    // Fetch the contact by ID to get the email address
    const contact = await Contact.findById(contactId);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    // Prepare the email content
    const htmlContent = `
      <p>Dear ${contact.names},</p>
      <p>${replyMessage}</p>
      <p>Best regards,<br>Future Focus Rwanda Team</p>
    `;

    // Send the reply email
    const emailSent = await sendEmail(contact.email, replySubject, htmlContent);
    if (!emailSent) {
      return res.status(500).json({ error: "Failed to send email reply" });
    }

    res.status(200).json({ message: "Email reply sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email reply" });
  }
};

