import { request } from '../shared/common/utils.js';
import {
   executeStoredProcSingleDataset,
   executeStoredProcMultipleDatasets,
} from '../shared/common/sqlserver.helper.js';
import sql from 'mssql';
import logger from '../shared/common/logger.js';
export function crmApis(app) {
   app.get('/', (req, res) => {
      try {
         const msg = '🚀 🚀 Hello world, Developed by KhangNguyen 🚀 🚀';
         logger.info('Api ok');
         return res.ok200(msg);
      } catch (error) {
         logger.error('API err');
         logger.error(error);
      }
   });

   app.get('/test', async (req, res) => {
      try {
         const procName = 'proc_CRM_Schedule_LoadBooking';
         const params = { Date: new Date() }; // Truyền tham số vào stored procedure
         const data = await executeStoredProcSingleDataset(procName, params);
         return res.ok200(null, data);
      } catch (error) {
         logger.error('API err');
         logger.error(error);
         return res.err500(null, error);
      }
   });
}
