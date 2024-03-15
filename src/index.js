import express from 'express';
import rootRoute from './routes/root.route.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use(rootRoute);

app.listen(8080, () => {
    console.log('mess:: running on port 8080');
})
