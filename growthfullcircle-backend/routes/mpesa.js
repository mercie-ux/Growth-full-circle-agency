import express from "express";
import axios from "axios";
import { Transaction } from "bitcoinjs-lib";

const router = express.Router();

router.post("/mpesa", async (req, res) => {
    const { phone, amount } = req.body;

    try{
        // get token first 
        const tokenResponse = await axios.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
            auth: {
                username: process.env.MPESA_KEY,
                password: process.env.MPESA_SECRET,
            },
        });
        const token = tokenResponse.data.access_token;

        // Initiate STK push
        const stkResponse = await axios.post(
            "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
            {
                BusinessShortCode: process.env.MPESA_SHORTCODE,
                Password: process.env.MPESA_PASSWORD,
                Timestamp: new Date()
                    .toISOString()
                    .replace(/[-T:.Z]/g, "")
                    .slice(0, 14),
                TransactionType: "CutomerPayBillOnline",
                Amount: amount,
                PartA: phone,
                PartyB: process.env.MPESA_SHORTCODE,
                PhoneNumber: phone,
                CallBackURL: "https://127.0.0.1:4040//api/payments/mpesa/callback",
                AccountReference: "Test123",
                TransactionDesc: "Payment test",
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        res.join(stkResponse.data);
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(400).json({error: "STK push failed"})
    }
});
export default router;