// src/utils/avgRating.js

const calculateAvgRating = (reviews = []) => {
    // If no reviews, return 0
    if (!reviews.length) {
      return {
        totalRating: 0,
        avgRating: 0,
      };
    }
  
    // Sum all ratings
    const totalRating = reviews.reduce((acc, item) => acc + item.rating, 0);
  
    // Average rating
    const avgRating = totalRating / reviews.length;
  
    return {
      totalRating,
      avgRating: Number(avgRating.toFixed(1)), // optional: round to 1 decimal
    };
  };
  
  export default calculateAvgRating;
  