const FoodModel=require('../models/food.model');
const foodPartnerModel = require('../models/foodpartner.model');
const storageService=require('../services/storage.services');
const {v4:uuid}=require("uuid");

async function createFood(req,res){ 

    const fileUploadResult = await storageService.uploadFile(req.file.buffer,uuid());

  const foodItem = await FoodModel.create({
        name: req.body.name,
        video: fileUploadResult.url,
        description: req.body.description,
        foodPartner: req.foodPartner._id
    });

    res.status(201).json({
        message: "Food item created successfully",
        food: foodItem
    });

};

async function getFoodItems(req,res){
    const foodItems = await FoodModel.find({})

    res.status(200).json({
        message: "Food items fetched successfully",
        foodItems
    });
};

module.exports={
    createFood,
    getFoodItems
};
