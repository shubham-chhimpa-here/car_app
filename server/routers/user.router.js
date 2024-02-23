const express = require('express');
const { UserModel } = require('../models/user.model');

const userRouter = express.Router();

// userRouter.get('/', async (req, res) => {

//    const data = await UserModel.find()
//     res.send({msg: 'users data here', data})
// })


//register user

userRouter.post('/register', async (req, res) => {
    const {email, password, username} = req.body;

    try {
        const isExist = await UserModel.findOne({email})
        console.log(isExist)
        if(isExist) {
           
            res.send({msg: 'user already exist'})
        }
        else {
            // use bcrypt to hash password
            const user = UserModel(req.body);
            await user.save()
            res.send({msg: 'created successfully', user})
        }
    } catch (error) {
        res.send({msg: 'something went wrong'})
    }
   
})

//login user and store cookie(jwt) to get data 

userRouter.post('/login',  async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await UserModel.findOne({email})
        console.log(user)
        if(user) {
            //check password with hash password (bcrypt)

            if(user.password === password) {
                res.send({msg: 'user logged in successfully', user})
                // and save cookies with cookie parser
            }

            else {
                res.send({msg: 'wrong credentials'})
            }
        }
        else {
            res.send({msg: 'user not found'})
        }
    } catch (error) {
     res.send({msg: 'something went wrong'})   
    }


})

module.exports = {userRouter}