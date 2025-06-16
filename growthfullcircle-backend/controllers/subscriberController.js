export function handleSubscription(req, res) {
  const { name, email, package: selectedPackage, paymentMethod } = req.body;

  if (!name || !selectedPackage || !paymentMethod) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Simulate saving to database or logging
  console.log("Subscription Received:", {
    name,
    email,
    package: selectedPackage,
    paymentMethod,
  });

  // Respond with success
  res.status(200).json({ message: "Subscription successful" });
}
