const Joi = require('joi')
module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        const { error, value } = Joi.validate(req.body, schema)
        
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error:'you must provide a valid Email Address'
                    })
                    break;
                case 'password':
                    res.status(400).send({
                        error: `The Password provided failed to match the following rules:
                            <br/>
                            1.it must contain only following characters:lower/uppercase and numerics
                            <br/>
                            2.Must be atleast 8 characters and not more than 32 characters 
                        `
                    })
                    break;
                    
                default:
                    res.status(400).send({
                       error:'oops! something went Wrong' 
                    })    
                    break;
            }
        } else {
            next()
        }
    }
}