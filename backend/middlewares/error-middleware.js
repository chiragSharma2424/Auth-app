function errorHandler (err, req, res, next) {
    return res.status(404).json({
        message: "Not found"
    });
    next();
}

export default errorHandler;