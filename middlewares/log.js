module.exports = (req, res, next) => {
    console.log('Request Body ' + req.body);
    console.log('URL Paramas ' + req.params);
    console.log('URL Query ' + req.query);

    next();
}