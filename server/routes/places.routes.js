import express from "express";
import {
    getPlaces,
    getSinglePlace,
    addPlace,
} from "../controllers/places.controller.js";

const router = express.Router();

// get all places
router.get("/", getPlaces);
router.get("/:id", getSinglePlace);
router.post("/", addPlace);

export default router;
