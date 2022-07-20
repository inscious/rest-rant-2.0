import express from "express";
import mongoose from "mongoose";

import Place from "../models/places.model.js";
import Comment from "../models/comment.model.js";

const router = express.Router();

// GET ALL PLACES
export const getPlaces = async (req, res) => {
    try {
        const placesData = await Place.find();
        res.status(200).json(placesData);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

// ADD PLACE
export const addPlace = async (req, res) => {
    const { name, pic, cuisines, city, state } = req.body;
    const newPlace = new Place({ name, pic, cuisines, city, state });
    try {
        await newPlace.save();
        res.status(200).json(newPlace);
        console.log("Place was added successfully!");
    } catch (error) {
        res.status(404).json(error.message);
        console.log("Place was not added.");
    }
};

// GET SINGLE PLACE
export const getSinglePlace = async (req, res) => {
    const { id } = req.params;
    try {
        const singlePlace = await Place.findById(id).populate("comments");
        // .then((place) => {});
        res.status(200).json(singlePlace);
    } catch (error) {
        res.status(404).json(error.message);
    }
};
// Get/Show Route
// router.get("/:id", (req, res) => {
//     db.Place.findById(req.params.id)
//         .populate("comments")
//         .then((place) => {
//             console.log(place.comments);
//             res.render("places/show", { place });
//         })
//         .catch((err) => {
//             console.log("err", err);
//             res.render("error404");
//         });
// });

// Post Route
// router.post("/", (req, res) => {
//     if (req.body.pic === "") {
//         req.body.pic = undefined;
//     }
//     if (req.body.city === "") {
//         req.body.city = undefined;
//     }
//     if (req.body.state === "") {
//         req.body.state = undefined;
//     }
//     db.Place.create(req.body)
//         .then(() => {
//             res.redirect("/places");
//         })
//         .catch((err) => {
//             if (err && err.name == "ValidationError") {
//                 let message = "Validation Error: ";
//                 for (var field in err.errors) {
//                     message += `${field} was ${err.errors[field].value}.`;
//                     message += `${err.errors[field].message}`;
//                 }
//                 console.log("Validation error message", message);
//                 res.render("places/new", { message });
//             } else {
//                 res.render("error404");
//             }
//         });
// });

// New Place Route
// router.get("/new", (req, res) => {
//     res.render("places/new");
// });

// Put Route
// router.put("/:id", (req, res) => {
//     db.Place.findByIdAndUpdate(req.params.id, req.body)
//         .then(() => {
//             res.redirect(`/places/${req.params.id}`);
//         })
//         .catch((err) => {
//             console.log("err", err);
//             res.render("error404");
//         });
// });

// Delete Route
// router.delete("/:id", (req, res) => {
//     db.Place.findByIdAndDelete(req.params.id)
//         .then(() => {
//             res.redirect("/places");
//         })
//         .catch((err) => {
//             console.log("err", err);
//             res.render("error404");
//         });
// });

// Edit Route
// router.get("/:id/edit", (req, res) => {
//     db.Place.findById(req.params.id)
//         .then((place) => {
//             res.render("places/edit", { place });
//         })
//         .catch((err) => {
//             res.render("error404");
//         });
// });

// Comment Route
// router.post("/:id/comment", (req, res) => {
//     console.log(req.body);
//     if (req.body.author === "") {
//         req.body.author = undefined;
//     }
//     req.body.rant = req.body.rant ? true : false;
//     db.Place.findById(req.params.id)
//         .then((place) => {
//             db.Comment.create(req.body)
//                 .then((comment) => {
//                     place.comments.push(comment.id);
//                     place.save().then(() => {
//                         res.redirect(`/places/${req.params.id}`);
//                     });
//                 })
//                 .catch((err) => {
//                     res.render("error404");
//                 });
//         })
//         .catch((err) => {
//             res.render("error404");
//         });
// });

// Delete Comment Route
// router.delete("/:id/comment/:commentId", (req, res) => {
//     db.Comment.findByIdAndDelete(req.params.commentId)
//         .then(() => {
//             console.log("Success");
//             res.redirect(`/places/${req.params.id}`);
//         })
//         .catch((err) => {
//             console.log("err", err);
//             res.render("error404");
//         });
// });

export default router;
