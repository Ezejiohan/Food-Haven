const express = require ('express');
const { userLogin, userSignUp, user, aUser, allUsers, deleteUser } = require("../controller/user");

const route = express.Router();
route.get("/", (req, res) => {
    res.send("Food_Haven database");
}); 

route.post("/api/userSignup", userSignUp);
route.post("/api/user", user);
route.post("/api/userLogin", userLogin);
route.get("/api/aUser/:id", aUser);
route.get("/api/allUsers", allUsers);
route.delete("/api/deleteUser/:id", deleteUser)


module.exports = { route }