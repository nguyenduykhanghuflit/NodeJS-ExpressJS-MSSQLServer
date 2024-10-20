import winston from 'winston';
import 'winston-daily-rotate-file';
import moment from 'moment';

// Cấu hình Winston với Daily Rotate File
const transport = new winston.transports.DailyRotateFile({
   filename: 'logs/%DATE%-all.log', // Tên file với ngày tháng
   datePattern: 'YYYY-MM-DD', // Pattern cho tên file
   //zippedArchive: true,                // Nén các file log cũ
   //  maxSize: '20m',                     // Giới hạn kích thước file log
   maxFiles: '14d', // Giữ log trong 14 ngày
});

// Cấu hình logger
const logger = winston.createLogger({
   //  level: 'error', // Chỉ log các lỗi (error)
   format: winston.format.combine(
      winston.format.timestamp({
         format: () => moment().format('YYYY-MM-DD HH:mm:ss'), // Định dạng timestamp thành yyyy-MM-dd HH:mm:ss
      }),
      winston.format.printf((info) => {
         // Nếu message là object, stringify để log dễ đọc
         const message =
            typeof info.message === 'object'
               ? JSON.stringify(info.message, null, 2)
               : info.message;
         return `${info.timestamp} [${info.level.toUpperCase()}]: ${message}`;
      })
   ),
   transports: [transport],
});

// Để sử dụng log trong file khác, export logger
export default logger;
