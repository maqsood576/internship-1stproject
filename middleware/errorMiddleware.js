
const notFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Route not found: ${req.originalUrl}`
    });
};

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode >= 400
        ? res.statusCode
        : 500;

    res.status(statusCode).json({
        success: false,
        message: process.env.NODE_ENV === "production"
            ? "Internal Server Error"
            : err.message
    });
};

module.exports = {
    notFound,
    errorHandler
};
