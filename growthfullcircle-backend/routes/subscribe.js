import express from 'express';
import Subscription from '../models/Subscription.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, package: selectedPackage, paymentMethod } = req.body;

    // Simple validation
    if (!name || !email || !selectedPackage || !paymentMethod) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newSubscription = new Subscription({
      name,
      email,
      package: selectedPackage,
      paymentMethod,
    });

    await newSubscription.save();

    res.status(201).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error('Error saving subscription:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
