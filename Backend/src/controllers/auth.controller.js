const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {
    const { fullName, email, password } = req.body;

    const isUserAlreadyExist = await UserModel.findOne({ email })

    if (isUserAlreadyExist) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
        fullName,
        email,
        password: hashedPassword
    });

    const token = jwt.sign({ 
        userId: user._id ,
    }, "1debf6c9e62ba46eb358e7db122f4cc1")

    res.cookie('token', token)

    res.status(201).json({
}