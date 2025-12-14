const express = require ('express') ;
const cookiesParser = require('cookie-parser');

const app = express();
app.use(cookiesParser());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports=app;