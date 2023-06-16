import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';

import globalErrorHandler from './app/middleWares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';

const app: Application = express();

app.use(cors());
// parser;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

// testing;
app.get('/', async () => {
  Promise.reject(new Error('Unhandled error promise rejection'));
});

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api not found',
      },
    ],
  });
  next();
});
export default app;
