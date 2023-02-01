import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";

// EXPRESS SETTINGS
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());

// PORT CONFIGUTRATION
const PORT = process.env.PORT;

// MONGO CONNECTION
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected to mongo: ", process.env.MONGO_URI);
    }
);

// CONTROLLERS
import placesRouter from "./routes/places.routes.js";
app.use("/places", placesRouter);

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
// http://localhost:5000
