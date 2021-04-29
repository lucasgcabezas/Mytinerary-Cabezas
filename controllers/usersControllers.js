const UserModel = require('../models/UserModel')
const bcryptjs = require('bcryptjs')

const userControllers = {

    signUp: async (req, res) => {
        var { firstName, lastName, email, password, userPic, country } = req.body

        const checkExistingEmail = await UserModel.findOne({ email })

        let response
        let error

        // Hasheo de contraseña
        password = bcryptjs.hashSync(password, 10)

        if (!checkExistingEmail) {
            try {
                const newUser = new UserModel({ firstName, lastName, email, password, userPic, country })
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

        console.log(req.body)

        let response
        let error

        const userToSignIn = await UserModel.findOne({ email })
        if (userToSignIn) {
            // Compara si las contraseñas hasheadas son igualse, contraseña ingresada con contraseña de DB
            const passwordMatch = bcryptjs.compareSync(password, userToSignIn.password)
            if (passwordMatch) {
                response = userToSignIn
            } else {
                error = "User or password incorrect. Please try again!"
            }
        } else {
            error = "User or password incorrect. Please try again!"
        }
        console.log(response)
        res.json({ success: !error ? true : false, response, error })
    }
}

module.exports = userControllers