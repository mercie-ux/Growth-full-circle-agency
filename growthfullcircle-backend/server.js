import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import subscribeRoute from './routes/subscribe.js';

dotenv.config();
const app = express();  
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.use('/api/subscribe', subscribeRoute);

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