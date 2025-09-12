import Contact from "../models/Contact.js";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { name, email, company, message } = req.body;
            const newContact = await Contact.create({ name, email, company, message});
            return res.status(201).json({ message: "Contact form submitted!", contact: newContact });
        } catch (error) {
            console.error("Error saving contact form:", error);
            return res.status(500).json({ error: "Failed to submit contact form" });
        }
    }
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}