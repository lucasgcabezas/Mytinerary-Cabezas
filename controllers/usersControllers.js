const UserModel = require('../models/UserModel')

const userControllers = {

    signUp: async (req, res) => {
        const { email } = req.body

        const checkExistingEmail = await UserModel.findOne({ email })

        let response
        let error

        if (!checkExistingEmail) {
            try {
                const newUser = new UserModel(req.body)
                await newUser.save()
                response = newUser
            } catch {
                error = "An error occurred during registration, please try again"
            }

        } else {
            error = "Email is already registered"
        }
        res.json({ success: !error ? true : false, response, error })

    },

    signIn: async (req, res) => {
        const { email, password } = req.body

        let response
        let error

        const userToSignIN = await UserModel.findOne({ email })
        if (userToSignIN && userToSignIN.password === password) {
            response = userToSignIN
        } else {
            error = "User or password incorrect. Please try again!"
        }
        res.json({ success: !error ? true : false, response, error })

    }
}

module.exports = userControllers