const {User} = require('../models')
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
    }
}