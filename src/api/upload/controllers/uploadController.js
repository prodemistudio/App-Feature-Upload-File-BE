exports.uploadFile = (req, res) => {
    try {
        res.status(200).json({
            status: 200,
            message: 'success',
            result: 'Test API!!'
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'error',
            result: 'internal server error'
        })
    }
}