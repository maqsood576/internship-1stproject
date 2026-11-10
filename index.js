
const express = require("express");

const config = require("./config/config");

const userRoutes = require("./routes/userRoutes");

const {
    notFound,
    errorHandler
} = require("./middleware/errorMiddleware");

const app = express();

// Middleware
app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Backend Foundations API is running"
    });
});

// User routes
app.use("/api/users", userRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
    console.log(
        `Server running on http://localhost:${config.port}`
    );
    console.log(`Environment: ${config.nodeEnv}`);
});
