import { useState } from "react";

const MpesaPaymentForm = () => {
    const [phone, setPhone] = useState("");
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("Processing payment...");

        try {
            const response = await fetch("https://growth-full-circle-agency.onrender.com/api/mpesa", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    phone: "2547XXXXXXXX",
                    amount: 10,
                }),
            });

            const data = await response.json();

            if(response.ok) {
                setMessage("STK push sent! Check your phone to complete payment.")
            } else{
                setMessage(data.error || "Something went wrong");
            }
        } catch (err) {
            setMessage("Network error, please try again.")
        }
    };
    return (
        <div className="payment-popup mpesa-form">
            <label htmlFor="mpesaPhone">M-Pesa Phone Number:</label>
            <input type="tel" value={phone} id="mpesaPhone" name="mpesaPhone" onChange={(e) => setPhone(e.target.value)} placeholder="2547XXXXXXXX" required/>

            <label htmlFor="mpesaCode">Amount (KES):</label>
            <input type="number" id="mpesaCode" name="mpesaCode" value={amount} onChange={(e) => setAmount(e.target.value)} required />

            <button type="submit" onClick={handleSubmit}>Pay with M-Pesa</button>
        </div>
    );
};
export default MpesaPaymentForm;