import express from 'express';
import { createTour, updateTour , deleteTour, getAllTours, getTourById,getTourbysearch,getFeaturedTours, getTourCount } from '../controller/TourController.js';
 
const tourRouter = express.Router();

tourRouter.post('/create', createTour);
tourRouter.put('/update/:id', updateTour);
tourRouter.delete('/delete/:id', deleteTour);
tourRouter.get('/getalltour/', getAllTours);


tourRouter.get("/search", getTourbysearch);
tourRouter.get("/search/featured", getFeaturedTours);
tourRouter.get("/search/count", getTourCount);

tourRouter.get('/search/:id', getTourById);


export default tourRouter;