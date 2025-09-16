import express from "express";
import axios from "axios";
import moment from "moment";

const router = express.Router();

router.post("/mpesa", async (req, res) => {
    const { phone, amount } = req.body;

    try {
        // Get OAuth token
        const tokenResponse = await axios.get(
            "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
            {
                auth: {
                    username: process.env.MPESA_CONSUMER_KEY,
                    password: process.env.MPESA_CONSUMER_SECRET,
                },
            }
        );
        const token = tokenResponse.data.access_token;

        // Generate timestamp + password
        const timestamp = moment().format("YYYYMMDDHHmmss");
        const password = Buffer.from(
            process.env.MPESA_SHORTCODE + process.env.MPESA_PASSKEY + timestamp
        ).toString("base64");

        // STK push request
        const stkResponse = await axios.post(
            "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
            {
                BusinessShortCode: process.env.MPESA_SHORTCODE,
                Password: password,
                Timestamp: timestamp,
                TransactionType: "CustomerPayBillOnline",
                Amount: amount,
                PartyA: phone,
                PartyB: process.env.MPESA_SHORTCODE,
                PhoneNumber: phone,
                CallBackURL: process.env.CALLBACK_URL,
                AccountReference: "Test123",
                TransactionDesc: "Payment test",
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        res.json(stkResponse.data);
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(400).json({ error: "STK push failed" });
    }
});

export default router;
