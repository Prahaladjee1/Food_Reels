const express = require('express');
const cookiesParser = require('cookie-parser');
const authRoutes = require('./Routes/auth.routes');
const foodRoutes = require('./Routes/food.routes');

const cors= require('cors');

const app = express();
app.use(cookiesParser());
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);
module.exports = app;