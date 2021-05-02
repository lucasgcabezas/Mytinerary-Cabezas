const joi = require('joi')

const validator = (req, res, next) => {

    const schema = joi.object({
        firstName: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')).messages({
            'string.empty': `* The first name field is mandatory.`,
            'string.base': `* The first name entered is not valid.`,
            'string.min': `* The first name field must have a minimum of 2 letters.`,
            'string.max': `* The first name cannot contain more than 20 characters.`,
            'string.required': `* The first name field is mandatory.`,
            'string.pattern.base': `* The first name cannot contain numbers o special characters.`
        }),

        lastName: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')).messages({
            'string.empty': `* The last name field is mandatory.`,
            'string.base': `* The last name entered is not valid.`,
            'string.min': `* The last name field must have a minimum of 2 letters.`,
            'string.max': `* The last name cannot contain more than 20 characters.`,
            'string.required': `* The last name field is mandatory.`,
            'string.pattern.base': `* The last name cannot contain numbers o special characters.`
        }),

        email: joi.string().required().trim().email().messages({
            'string.empty': `* The email field is mandatory.`,
            'string.email': `* The email entered is not valid.`,
            'string.required': `* The email field is mandatory.`,
        }),

        password: joi.string().min(5).trim().required().pattern(/(?=.*\d)(?=.*[A-z])/).messages({
            'string.empty': `* The password field is mandatory.`,
            'string.min': `* The password lenght must be superior of 4.`,
            'string.required': `* The password field is mandatory.`,
            'string.pattern.base': `* The password must be a combination of letters and numbers.`
        }),

        userPic: joi.string().required().trim().messages({
            'string.empty': `* The url field is mandatory.`,
            'string.required': `* The url field is mandatory.`
        }),

        country: joi.string().required().trim().messages({
            'string.empty': `* The country is mandatory.`,
            'string.required': `* The country is mandatory.`
        })
    })

    const validation = schema.validate(req.body, { abortEarly: false })

    if (validation.error) {
        return res.json({ success: false, errorsValidator: validation.error })
    }
    next()
}
module.exports = validator

