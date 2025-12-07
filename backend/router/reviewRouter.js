import express from "express";
import { createReview } from "../controller/Reviewcontroller.js";
import { verifyToken } from "../middleware/auth.middleware.js";
const reviewRoutes = express.Router();

reviewRoutes.post("/:tourId", verifyToken, createReview);

export default reviewRoutes;
