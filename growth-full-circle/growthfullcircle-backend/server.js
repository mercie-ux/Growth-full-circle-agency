import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import subscribeRoute from './routes/subscribe.js';
import Contact from './models/Contact.js';
import OpenAI from 'openai';

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.use('/api/subscribe', subscribeRoute);

// OpenAI API setup
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
// Growth360 chatbot route
app.post('/api/chat', async (req, res) => {
    console.log('Request body:', req.body);
    const { message } = req.body;

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // Use a suitable model, e.g., gpt-4o or gpt-3.5-turbo
            messages: [
                {
                    role: 'system',
                    content: 'You are a mental wellness assistant named GrowthBot. Provide supportive, empathetic, and professional responses related to mental health and well-being.',
                },
                { role: 'user', content: message },
            ],
            max_tokens: 150,
        });

        console.log('OpenAI response:', completion);
        res.json({ response: completion.choices[0].message.content });
    } catch (error) {
        console.error('Error with OpenAI API:', error.response?.data || error.message || error);
        res.status(500).json({ error: 'Failed to fetch response from OpenAI' });
    }
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
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    });


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