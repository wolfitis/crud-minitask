import express from 'express';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './swagger';
import router from '../routes/index.js';
// import bodyParser from 'body-parser';

const app = express();
app.use(express.json());

// Swagger
app.use('/swagger', swaggerUi.serveFiles(swaggerDocument), swaggerUi.setup(swaggerDocument));

// app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));
// app.use(bodyParser);
// app.use(bodyParser.json());-
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(router);

// app.use('/admin', adminbroRouter);

export { app };
