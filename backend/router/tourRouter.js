import express from 'express';
import { createTour, updateTour , deleteTour, getAllTours, getTourById,getTourbysearch,getFeaturedTours, getTourCount } from '../controller/TourController.js';
 
const tourRouter = express.Router();

tourRouter.post('/', createTour);
tourRouter.put('/:id', updateTour);
tourRouter.delete('/:id', deleteTour);
tourRouter.get('/', getAllTours);


tourRouter.get("/search", getTourbysearch);
tourRouter.get("/search/featured", getFeaturedTours);
tourRouter.get("/search/count", getTourCount);

tourRouter.get('/:id', getTourById);


export default tourRouter;