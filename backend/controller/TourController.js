import { Tour } from "../model/Toure.js";

export const createTour = async (req, res) => {
  console.log(req.body);
  const newTour = new Tour(req.body); 
  try {
      const savedTour = await newTour.save(); 
    res.status(201).json({ success: true, message: "Tour created successfully", tour: savedTour });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTour = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ success: true, message: "Tour updated successfully", tour: updatedTour });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Tour deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getAllTours = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;

    const tours = await Tour.find({})
      .populate("reviews")
      .skip((page - 1) * limit)
      .limit(limit);

    const totalTours = await Tour.countDocuments();

    res.status(200).json({
      success: true,
      count: tours.length,
      total: totalTours,
      currentPage: page,
      totalPages: Math.ceil(totalTours / limit),
      message: "Tours fetched successfully",
      tours
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};




export const getTourById = async (req, res) => {
  try {
    const { id } = req.params;

    const tour = await Tour.findById(id).populate("reviews");

    if (!tour) {
      return res.status(404).json({ success: false, message: "Tour not found" });
    }

    res.status(200).json({
      success: true,
      message: "Tour fetched successfully",
      tour
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getTourbysearch = async (req, res) => {
  try {

    const cityQuery = req.query.city ? new RegExp(req.query.city, 'i') : undefined;
    const distance = req.query.distance ? parseInt(req.query.distance) : 0;
    const maxGroupSize = req.query.maxGroupSize ? parseInt(req.query.maxGroupSize) : 0;


    let filter = {};
    if (cityQuery) {
      filter.city = cityQuery;
    }
    filter.distance = { $gte: distance };
    filter.maxGroupSize = { $gte: maxGroupSize };

    const tours = await Tour.find(filter);

   

    res.status(200).json({ success: true, message: "Tours searched successfully", tours });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}


export const getFeaturedTours = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 8;

    const tours = await Tour.find({ featured: true })
      .limit(limit)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: tours.length,
      tours
    });
  } catch (error) {
    console.error("getFeaturedTours error:", error);
    res.status(500).json({ message: error.message });
  }
};


export const getTourCount = async (req, res) => {
  try {
    const total = await Tour.countDocuments();

    res.status(200).json({
      success: true,
      data: total
    });

  } catch (error) {
    console.error("getTourCount error:", error);
    res.status(500).json({ message: error.message });
  }
};
