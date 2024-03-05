const UserModel = require ("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// user signup
const userSignUp = async (req, res) => {
    try {
        const { fullname, email, phonenumber, password } = req.body;
        
        const emailExist = await UserModel.findOne({ email });

        if (emailExist) {
            return res.status(400).json({
                message: "Email already exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
          });
    }
}

// create a user
const user = async (req, res) => {
    try {
        const saltPassword = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, saltPassword);
        
        const userData = {
            fullname: req.body.fullname,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            password: hashPassword,
        };

        const userExist = await UserModel.findOne({
            email: req.body.email
        });

        if (userExist) {
            return res.status(403).json({
                message: "User already Exist",
            });
        } else {
            const newUser = await UserModel.create(userData);
            return res.status(200).json({
                message: "User created Successful",
                date: newUser,
            });
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
          });
    }
};

// user login
const userLogin = async (req, res) => {
    try {
        const loginRequst = {
            email: req.body.email,
            password: req.body.password
        };
        
        const user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        } else {
            const correctPassword = bcrypt.compare(req.body.password, user.password);
            if (correctPassword == false) {
                return res.status(401).json({
                    message: "Incorrect email or Password"
                })
            } else {
                const generatedToken = jwt.sign({
                    id: user._id,
                    email: user.email
                }, "secretKey", {expiresIn: "45 mins"});

                const result = {
                    id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                    phonenumber: user.phonenumber,
                    token: generatedToken
                }
                return res.status(200).json({
                    message: 'Login Succesful',
                    date: result
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
          });
    };
};

// get all users
const getUsers = async (req, res) => {
    try {
        const user = req.user;
        const allUsers = await UserModel.find();

        res.status(200).json({
            status: 'Success',
            numbersOfUsers: allUsers.length,
            data: allUsers
        });
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            message: error.message
          });
    }
}
module.exports = { userSignUp, userLogin, getUsers }