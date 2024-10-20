# ZALO NOTIFY

** Giới thiệu: **
Dự án này cung cấp một bot Zalo thông minh, tương tác với người dùng và hỗ trợ quản lý thông báo công việc.
** Tính năng chính:** 
- Đăng ký người dùng: Cho phép người dùng đăng ký nhận thông báo công việc bằng cách cung cấp userId duy nhất của họ.
- Truy xuất thông tin: Người dùng có thể xem thông tin đăng ký của mình, bao gồm userId và threadId.
- Cập nhật userId: Người dùng có thể sửa đổi userId đã đăng ký nếu có sai sót.
- Thông báo công việc: Bot tự động gửi thông báo về các công việc được giao cho người dùng đã đăng ký.

## Cài đặt phụ thuộc:
```bash
git clone https://github.com/Pham-Phuoc-Nghia/Bot_Zalo_GLS.git
```
```bash
npm install
```

## Cấu hình biến môi trường:
- https://github.com/JustKemForFun/ZaloDataExtractor/ có thể lấy các thông tin của zalo ở đây
- ZALO_COOKIE: Cookie Zalo của bạn.
- ZALO_IMEI: IMEI Zalo của bạn.
- ZALO_USER_AGENT: User Agent Zalo của bạn.
- MONGO_URI: Chuỗi kết nối đến cơ sở dữ liệu MongoDB của bạn.

## Khởi động máy chủ:
```bash
nodemon server.js
```
### Hướng dẫn sử dụng:

- Khởi động bot: Gửi tin nhắn /start đến bot.
- Đăng ký thông báo: Gửi /task userId (thay thế userId bằng userId của bạn).
- Xem thông tin: Gửi /getmyinfo.
- Cập nhật userId: Gửi /change new_userId (thay thế new_userId bằng userId mới).
- Trợ giúp: Gửi /help để xem danh sách các lệnh.

**Lưu ý:**:
- ZALO_COOKIE, ZALO_IMEI, ZALO_USER_AGENT là thông tin cá nhân của bạn.
- Cấu hình MONGO_URI chính xác.
- Bot hiện hỗ trợ tin nhắn văn bản. Bạn có thể mở rộng để hỗ trợ hình ảnh, tệp,...
- Chức năng thông báo công việc cần tích hợp với hệ thống riêng.
