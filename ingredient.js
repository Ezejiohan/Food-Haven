const ingredientModel = require("../models/ingredientModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

// create ingredient
const ingredients = async (req, res) => {
    try {
        const ingredientData = {
            name: req.body.name,
            quantity: req.body.quantity
        };
        // checking if ingredient exist
        const ingredientExist = await ingredientModel.findOne({
            name: req.body.name
        });
        if (ingredientExist) {
            return res.status(403).json({
                message: "Ingredient already Exist"
            });
        } else {
            const newIngredient = await ingredientModel.create(ingredientData);
            res.status(200).json({
                message: "Ingredient created successful",
                data: newIngredient
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: error.message
          });
    }
}

// find one ingredient
const oneIngredient = async (req, res) => {
    try {
        const ingredient = await ingredientModel.findById(req.params.id);
        if (!ingredient) {
            res.status(404).json({
                message: "Ingredient not found"
            });
        } else {
            res.status(200).json({
                message: "Success",
                data: ingredient
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: error.message
        });
    }   
}

// find all ingredients
const getIngredients = async (req, res) => {
    try {
        const allIngredients = await ingredientModel.find()

        res.status(200).json({
            status: "Success",
            numberOfIngredients: allIngredients.length,
            data: allIngredients
        });        
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: error.message
        });
    }
}

// delete ingredients
const ingredientDelete = async (req, res) => {
    try {
        const ingredient = await ingredientModel.findById(req.params.id);
        if (!ingredient) {
            res.status(404).json({
                message: "Ingredient not found"
            });
        } else {
            await ingredientModel.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: "Ingredient deleted Successful"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: error.message
        });
    }
}

module.exports = { ingredients, oneIngredient, getIngredients, ingredientDelete }