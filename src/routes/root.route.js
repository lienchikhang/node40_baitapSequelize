import express from 'express';
import likeRoute from './like.route.js';

const rootRoute = express.Router();

rootRoute.use('/like', likeRoute);

export default rootRoute;