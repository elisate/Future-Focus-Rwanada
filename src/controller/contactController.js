import Contact from "../model/contactModal.js";

// Create a new contact
export const createContact = async (req, res) => {
  try {
    const { names, email, subject, message } = req.body;
    const newContact = new Contact({ names, email, subject, message });
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
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
