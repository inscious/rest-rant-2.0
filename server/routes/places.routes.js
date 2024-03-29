import express from "express";
import {
    getPlaces,
    getSinglePlace,
    addPlace,
    editPlace,
    deletePlace,
} from "../controllers/places.controller.js";

const router = express.Router();

// get all places
router.get("/", getPlaces);
router.get("/:id", getSinglePlace);
router.post("/", addPlace);
router.patch("/:id", editPlace);
router.delete("/:id", deletePlace);

export default router;
