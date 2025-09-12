import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import sequelize from "../config/database.js";

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
import subscribeRoute from "./subscribe.js";
import contactRoute from "./contact.js";
import flowRoute from "./flow.js";

app.use("/api/subscribe", subscribeRoute);
app.use("/api/contact", contactRoute);
app.use("/api/flow", flowRoute);

export default app;
