import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import subscribeRoute from './routes/subscribe.js';
import Contact from './models/Contact.js';

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.use('/api/subscribe', subscribeRoute);

const flow = {
  start: {
    message: "Hello! I’m GrowthBot, here to support your mental well-being. How can I assist you today?",
    options: [
      "I'm feeling stressed",
      "I'm struggling with anxiety",
      "I'm feeling sad or low",
    ],
  },
  "I'm feeling stressed": {
    message: "I’m sorry to hear that. Would you like tips for relaxation or managing workload?",
    options: ["Relaxation tips", "Workload management"],
  },
  "Relaxation tips": {
    message: "Try deep breathing exercises: inhale 4s, hold 4s, exhale 6s.",
    options: ["Guide me", "No thanks"],
  },
  default: {
    message: "I didn’t quite understand that. Try choosing an option.",
    options: ["Go back to start"],
  },
};

// Endpoint to get the whole flow
app.get("/api/flow", (req, res) => {
  res.json(flow);
});

// Endpoint to get a specific step
app.post("/api/next", (req, res) => {
  const { choice } = req.body;
  const nextStep = flow[choice] || flow.default;
  res.json(nextStep);
});

// Contact Form Route
app.post('/api/contact', async (req, res) => {
    const { name, email, company, message } = req.body;

    try {
        const newContact = new Contact({ name, email, company, message });
        await newContact.save();
        res.status(201).json({ message: 'Contact form submitted successfully!' });
    } catch (error) {
        console.error('Error saving contact form:', error);
        res.status(500).json({ error: 'Failed to submit contact form' });
    }
});
// MongoDB connection

//test route
app.get('/', (req, res) => {
    res.send('Welcome to Growth360 Backend API!');
});

// Testimonial route
app.get('/api/testimonials', (req, res) => {
    const testimonials = [
        {
            text: "Growth Full Circle transformed our workplace with their wellness programs. Highly recommend!",
            author: "Janet Waruru, CEO of HealthCorp",
        },
        {
            text: "The pro bono services made a huge difference in our community. Thank you!",
            author: "John Smith, Community Leader",
        },
    ];
    res.json(testimonials);
})

//start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})