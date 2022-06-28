class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

class BadRequestError extends ExpressError {
  constructor(message = "Bad request") {
    super(message, 400);
  }
}

class NotFoundError extends Error {
  message = "Not Found";
  status = 404;
}

module.exports = {
  ExpressError,
  BadRequestError,
  NotFoundError,
};
