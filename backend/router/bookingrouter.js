import express from "express";
import { getAllBookings, createBooking, getBooking } from "../controller/bookingcontroller.js";
import { verifyToken } from "../middleware/auth.middleware.js";
const bookingrout = express.Router();

bookingrout.post("/", verifyToken, createBooking);
bookingrout.get("/getbooking", verifyToken, getBooking);
bookingrout.get("/getallbooking", verifyToken, getAllBookings);


export default bookingrout;
