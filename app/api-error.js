class ApiError extends Error {
  constructor(statusCode, message) {
    super(message); // Truyền message vào Error để có stack trace đầy đủ
    this.statusCode = statusCode;
  }
}

module.exports = ApiError;
