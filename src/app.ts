import cors from 'cors';
import express, { Application } from 'express';

import globalErrorHandler from './app/middleWares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

app.use(cors());
// parser;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes

app.use('/api/v1/users', UserRoutes);

// testing;
app.get('/', async () => {
  Promise.reject(new Error('Unhandled error promise rejection'));
});

app.use(globalErrorHandler);
export default app;
