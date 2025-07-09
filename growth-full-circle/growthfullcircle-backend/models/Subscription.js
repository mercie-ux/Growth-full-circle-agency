import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
    name: String,
    email: String,
    package: String,
    paymentMethod: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('Subscription', SubscriptionSchema);