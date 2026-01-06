import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    distance: {
      type: Number,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    maxGroupSize: {
      type: Number,
      required: true
    },
    featured: {
      type: Boolean,
      default: false
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
  },
    { timestamps: true }
);

export const Tour = mongoose.model("Tour", tourSchema);
