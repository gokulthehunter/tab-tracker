const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn:ONE_WEEK
    })
}

module.exports = {
   async register(req, res) {
       // res.send({
           //     message: `hello,${req.body.email} your user was registered!`
           // })
        try {       
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            // if user exists
            res.status(400).send({
                error: 'This email is already in Use.'
            })

       }
    },
    async login(req, res) {
        try {
            const {email,password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                return res.status(403).send({
                    error:'The login information was incorrect user'
                })
            }
            const isPasswordValid = user.comparePassword(password)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect password'
                })
            }
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token:jwtSignUser(userJson)
            })
        } catch (err) {
            // if user exists
            res.status(500).send({
                error: 'Error has occured when trying to login'
            })

        }
    }
}