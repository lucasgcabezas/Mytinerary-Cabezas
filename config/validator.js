const joi = require('joi')

const validator = (req, res, next) => {

    const schema = joi.object({
        firstName: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')).messages({
            'string.base': `el nombre tiene que ser y asi`,
            'string.empty': `"firstName" sos un pelotudo siempre2`,
            'string.min': `hola`,
            'string.max': `"firstName" sos un pelotudo siempre4`,
            'string.required': `"firstName" sos un pelotudo siempre5`,
            'string.pattern.base': `"firstName" sos un pelotudo siempre6`,
        }),

        lastName: joi.string().trim().min(2).message('hola ricardo')
            .max(20).required().pattern(new RegExp('[a-zA-Z]$')),

        email: joi.string().required().trim().email(),

        password: joi.string().min(5).trim().required().pattern(/(?=.*\d)(?=.*[A-z])/),

        userPic: joi.string().required().trim(),

        country: joi.string().required().trim()

    })

    const validation = schema.validate(req.body, { abortEarly: false })

    if (validation.error) {
        // console.log(validation.error)
        // return res.json({success: false, errores: validation})
        return res.json({ success: false, errores: validation.error })
    }
    next()
}
module.exports = validator

