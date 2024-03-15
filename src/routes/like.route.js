import express from 'express';
import { addLike, getLikes, removeLike } from '../controllers/like.controller.js';

const likeRoute = express.Router();

//http://localhost:8080/like/get?resId=<value>&userId=<value>
likeRoute.get('/get', getLikes);

//http://localhost:8080/like/add
likeRoute.post('/add', addLike);

//http://localhost:8080/like/remove?userId=1&resId=7
likeRoute.delete('/remove', removeLike);


export default likeRoute;