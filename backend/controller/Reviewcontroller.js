import { Review } from "../model/Review.js";
import { Tour } from "../model/Toure.js";

export const createReview = async (req, res) => {
  try {
    const { tourId } = req.params;
    if (!tourId) {
      return res.status(400).json({
        success: false,
        message: "Tour ID is required"
      });
    }
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated"
      });
    }

    // Prepare review document
    const newReview = new Review({
      ...req.body,
      user: req.user.id,
      tour: tourId
    });

    // Save review
    const savedReview = await newReview.save();

    // Push review ID into Tour.reviews array
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id }
    });

    return res.status(200).json({
      success: true,
      message: "Review submitted successfully",
      data: savedReview
    });

  } catch (err) {
    console.error("createReview error:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to submit review"
    });
  }
};
