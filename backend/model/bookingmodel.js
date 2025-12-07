import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    userEmail: {
      type: String,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    guestSize: {
      type: Number,
      required: true,
      min: 1,
    },
    
    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
    },

    
    bookingDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);
