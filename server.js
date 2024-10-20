import express from 'express';
import { crmApis } from './src/apis/crm.api.js';
import { customResponse } from './src/shared/middlewares/customResponse.middleware.js';
import logger from './src/shared/common/logger.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(customResponse);

crmApis(app);

const server = app.listen(port, () => {
   const msg = `Server đang chạy trên port ${port}`;

   logger.info(msg);

   console.log(msg);
});

process.on('SIGINT', () => {
   server.close(() => {
      logger.info('Server stopped');
      console.log(`exits server express`);
   });
});
