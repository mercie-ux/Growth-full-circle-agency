import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST /api/contact
router.post("/contact", async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const newContact = await Contact.create({ name, email, company, message });
    return res.status(201).json({
      message: "Contact form submitted!",
      contact: newContact,
    });
  } catch (error) {
    console.error("Error saving contact form:", error);
    return res.status(500).json({ error: "Failed to submit contact form" });
  }
});

export default router;
