const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const foodPartnerModel = require('../models/foodpartner.model');

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
        userId: user._id,
    }, process.env.JWT_SECRET);

    res.cookie('token', token)

    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            fullName: user.fullName,
            email: user.email
        }
    })
}


async function loginUser(req, res) {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({
        userId: user._id,
    }, process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            id: user._id,
            fullName: user.fullName,
            email: user.email
        }
    })
}


function logoutUser(req, res) {
    res.clearCookie('token');
    res.status(200).json({ message: "User logged out successfully" });
}


async function registerFoodPartner(req, res) {
    // Implementation for food partner registration
    const { fullName, email, password, contactname, phone, address } = req.body;

    const isAccountAlreadyExist = await foodPartnerModel.findOne({ email });

    if (isAccountAlreadyExist) {
        return res.status(400).json({ message: "Food Partner Account already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const foodPartner = await foodPartnerModel.create({
        fullName,
        email,
        password: hashedPassword,
        contactname,
        phone,
        address
    })

    const token = jwt.sign({
        id: foodPartner._id,
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(201).json({
        message: "Food Partner registered successfully",
        foodPartner: {
            id: foodPartner._id,
            fullName: foodPartner.fullName,
            email: foodPartner.email,
            contactname: foodPartner.contactname,
            phone: foodPartner.phone,
            address: foodPartner.address
        }
    })
}


async function loginFoodPartner(req, res) {
    // Implementation for food partner login
    const { email, password } = req.body;
    const foodPartner = await foodPartnerModel.findOne({ email });

    if (!foodPartner) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, foodPartner.password);

    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({
        id: foodPartner._id,
    }, process.env.JWT_SECRET);

    res.cookie('token', token);

    res.status(200).json({
        message: "Food Partner logged in successfully",
        foodPartner: {
            id: foodPartner._id,
            fullName: foodPartner.fullName,
            email: foodPartner.email
        }
    })
}

function logoutFoodPartner(req, res) {
    res.clearCookie('token');
    res.status(200).json({ message: "Food Partner logged out successfully" });
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
}