const fs = require('fs')

module.exports = (req, res, next) => {
    if (fs.existsSync('./down')) {
        res.send('Sedang dalam masa maintenance');
    } else {
        next();
    }
}