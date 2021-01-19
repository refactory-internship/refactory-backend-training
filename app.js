const express = require('express');
const app = express()
const port = 3000

// const middlewares = require('./middlewares/middlewares')
// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads');
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix);
//     }
// });

// const upload = multer({
//     storage: storage
// })

app.set('view engine', 'ejs');
app.set('views', './views');

// app.use(express.json());
// app.use(express.urlencoded({
//     extended: true
// }));
// app.use(middlewares);

// app.use('/user', require('./routes/user'));
// app.use('/post', require('./routes/post'));

app.get('/', (req, res) => {
    res.render('index.ejs', {
        name: ''
    });
})

// app.get('/', (req, res) => {
//     // res.json({
//     //     messsage: "Success",
//     //     code: 200,
//     //     error: false
//     // })
//     // res.redirect('/user/12')
//     // res.download('./report.txt');
//     // res.sendStatus('200');
// })

// app.post('/', upload.single('image'), (req, res) => {
//     console.log(req.file);
//     res.end();
// })

// app.get('/user/:id', (req, res) => {
//     res.send('User with ID: ' + req.params.id);
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})