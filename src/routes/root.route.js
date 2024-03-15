import express from 'express';
import likeRoute from './like.route.js';
import rateRoute from './rate.route.js';
import orderRoute from './order.route.js';

const rootRoute = express.Router();

rootRoute.use('/like', likeRoute);
rootRoute.use('/rate', rateRoute);
rootRoute.use('/order', orderRoute);

export default rootRoute;