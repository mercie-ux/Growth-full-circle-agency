const BitcoinPaymentForm = () => {
    return (
        <div className="payment-popup bitcoin-form">
            <label htmlFor="btcWallet">Your Bitcoin Wallet Address:</label>
            <input type="text" id="btcWallet" name="btcWallet" required/>

            <label htmlFor="btcAmount">Amount in BTC (sats):</label>
            <input type="text" id="btcAmount" name="btcAmount" step="0.0001" required/>

            <p>Please Send the payment to the following address:</p>
            <code>bc1qyourwalletaddresshere</code>

            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=bitcoin:bc1qyourwalletaddresshere?amount=0.0005" alt="Bitcoin QR Code" />

            <p>After sending, click the button below to complete the subscription.</p>
            <button type="submit">Confirm Bitcoin Payment</button>
        </div>
    );
};

export default BitcoinPaymentForm;