import express from 'express';
import { addOrder } from '../controllers/order.controller.js';

const orderRoute = express.Router();

//http://localhost:8080/order/add
orderRoute.post('/add', addOrder)

export default orderRoute;