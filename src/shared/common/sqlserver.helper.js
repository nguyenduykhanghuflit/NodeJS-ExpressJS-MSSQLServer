import sql from 'mssql';
import { connectAndGetPoolMSSQLServer } from '../../shared/databases/init.sqlserver.js';
export const executeStoredProcSingleDataset = async (procName, params = {}) => {
   try {
      const pool = await connectAndGetPoolMSSQLServer();
      const request = pool.request();

      // Thêm các tham số vào request
      for (const param in params) {
         request.input(param, params[param]);
      }

      const result = await request.execute(procName); // Gọi stored procedure
      return result.recordset; // Trả về một tập bản ghi
   } catch (error) {
      console.error('Error executing stored procedure:', error);
      throw error;
   }
};
// Hàm trả về nhiều tập bản ghi (datasets)
export const executeStoredProcMultipleDatasets = async (
   procName,
   params = {}
) => {
   try {
      const pool = await connectAndGetPoolMSSQLServer();
      const request = pool.request();

      // Thêm các tham số vào request
      for (const param in params) {
         request.input(param, params[param]);
      }

      const result = await request.execute(procName); // Gọi stored procedure
      return result.recordsets; // Trả về nhiều tập bản ghi
   } catch (error) {
      console.error('Error executing stored procedure:', error);
      throw error;
   }
};
