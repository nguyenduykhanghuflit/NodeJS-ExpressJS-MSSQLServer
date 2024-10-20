import sql from 'mssql';
import dotenv from 'dotenv';
import logger from '../common/logger.js';
dotenv.config();

const config = {
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   server: process.env.DB_SERVER,
   port: parseInt(process.env.DB_PORT, 10),
   options: {
      encrypt: false,
      trustServerCertificate: true,
   },
};

export const connectAndGetPoolMSSQLServer = async () => {
   try {
      const pool = await sql.connect(config);
      console.log('Connected to the SQL SERVER database!');
      logger.info('Connected to the SQL SERVER database!');
      return pool;
   } catch (err) {
      logger.error(err);
      console.log('Đã xảy ra lỗi khi kết nối tới sql server:', err);
   }
};
