import express from 'express';
import { addRate, getRates } from '../controllers/rate.controller.js';

const rateRoute = express.Router();

//http://localhost:8080/rate/add
rateRoute.post('/add', addRate);

//http://localhost:8080/rate/get?resId=2&userId=6
//http://localhost:8080/rate/get?resId=2
//http://localhost:8080/rate/get?userId=6
rateRoute.get('/get', getRates);

export default rateRoute;