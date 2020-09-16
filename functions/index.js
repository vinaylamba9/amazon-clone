const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_E6Xmy5vML37eVWUEfcOxCATE006n1Atirh");

// API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("Hello World!"));
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request received for cents >>>>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // Ok - created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen Command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:5001/clone-5ea6a/us-central1/api
