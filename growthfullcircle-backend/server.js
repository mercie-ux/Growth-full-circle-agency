import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mysql from 'mysql2';

dotenv.config();
const app = express();  
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MYSQL Database connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// verify the db connection
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        process.exit(1); // Exit the process if connection fails
    }
    console.log('Connected to the database', connection.threadId);
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