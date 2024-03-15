import express from 'express';
import likeRoute from './like.route.js';
import rateRoute from './rate.route.js';

const rootRoute = express.Router();

rootRoute.use('/like', likeRoute);
rootRoute.use('/rate', rateRoute);

export default rootRoute;