const CardPaymentForm = () => {
    return (
        <div className="payment-popup card-form">
            <label htmlFor="cardName">Cardholder Name:</label>
            <input type="text" id="cardName" name="cardName" required />

            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" required />

            <label htmlFor="expiry">Expiry Date:</label>
            <input type="text" id="expiry" name="cardExpiry" placeholder="MM/YYYY" required/>

            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cardCVV" required/>

            <button type="submit">Pay with Card</button>
        </div>
    );
};

export default CardPaymentForm;