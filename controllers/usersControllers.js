const UserModel = require('../models/UserModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {
    signUp: async (req, res) => {
        var { firstName, lastName, email, password, userPic, country } = req.body
        const checkExistingEmail = await UserModel.findOne({ email })
        let response
        let error

        password = bcryptjs.hashSync(password, 10)

        if (!checkExistingEmail) {
            try {
                let newUser = new UserModel({ firstName, lastName, email, password, userPic, country })
                await newUser.save()
                const token = jwt.sign({ ...newUser }, process.env.SECRET_OR_KEY)
                response = { token, userPic: newUser.userPic, firstName: newUser.firstName }
            } catch {
                error = "An error occurred during registration, please try later"
            }
        } else {
            error = "Email is already registered"
        }
        res.json({
            success: !error ? true : false,
            response,
            error
        })
    },

    signIn: async (req, res) => {
        const { email, password } = req.body
        const userToSignIn = await UserModel.findOne({ email })
        let response
        let error

        if (userToSignIn) {
            const passwordMatch = bcryptjs.compareSync(password, userToSignIn.password)
            if (passwordMatch) {
                const token = jwt.sign({ ...userToSignIn }, process.env.SECRET_OR_KEY)
                response = { token, userPic: userToSignIn.userPic, firstName: userToSignIn.firstName }
            } else {
                error = "User or password incorrect. Please try again!"
            }
        } else {
            error = "User or password incorrect. Please try again!"
        }
        res.json({
            success: !error ? true : false,
            response,
            error
        })
    },

    signInForLS: (req, res) => {
        res.json({
            success: true,
            response: { userPic: req.user.userPic, firstName: req.user.firstName }
        })
        // console.log(req.user)
    }

}

module.exports = userControllers