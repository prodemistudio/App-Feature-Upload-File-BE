module.exports = (app) => {
    const uploadRoutes = require('../api/upload/routes/uploadRoutes');
    app.use('/api/v1/upload/graph', uploadRoutes);
}