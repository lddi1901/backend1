const express = require("express");
const cors = require("cors");
const app = express();
const contactsRouters = require("./app/routes/contact.route");
const ApiError = require("./app/api-error");

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouters);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

// Xử lý request không tìm thấy (404)
app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

// Middleware xử lý lỗi chung
app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
