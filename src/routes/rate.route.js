import express from 'express';
import { addRate, getRates } from '../controllers/rate.controller.js';

const rateRoute = express.Router();

//http://localhost:8080/rate/add
rateRoute.post('/add', addRate);

rateRoute.get('/get', getRates);

export default rateRoute;