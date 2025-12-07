import mongoose from "mongoose";
import { Booking } from "../model/bookingmodel.js";


export const createBooking = async (req, res) => {
  try {
    const userId = (req.user && req.user.id) ? req.user.id : req.body.userId;

    const payload = {
      ...req.body,
      userId,
      guestSize: req.body.guestSize ? Number(req.body.guestSize) : undefined,
    };

    const newBooking = new Booking(payload);
    const savedBooking = await newBooking.save();

    return res.status(201).json({
      success: true,
      message: "Tour booked successfully",
      data: savedBooking,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Tour booking unsuccessful",
      error: error.message || error,
    });
  }
};

export const getBooking = async (req, res) => {
  try {
    const id = req.params.id; 

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking id",
      });
    }

    const book = await Booking.findById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Booking fetched successfully",
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch booking",
      error: error.message || error,
    });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find(); 

    return res.status(200).json({
      success: true,
      message: "Bookings fetched successfully",
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
      error: error.message || error,
    });
  }
};
