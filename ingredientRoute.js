const express = require ('express');
const { ingredients, oneIngredient, getIngredients, ingredientDelete } = require ('../controller/ingredient');

const ingredientRoute = express.Router();
ingredientRoute.get("/", (req, res) => {
    res.send("Food_Haven database")
});

ingredientRoute.post("/api/ingredients", ingredients);
ingredientRoute.get("/api/oneIngredient/:id", oneIngredient);
ingredientRoute.get("/api/getIngredients", getIngredients);
ingredientRoute.delete("/api/ingredientDelete/:id", ingredientDelete);


module.exports = { ingredientRoute }