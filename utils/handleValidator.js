const {validationResult} = require('express-validator');

const validateResult = (req,res,next) => {
    try {
        validationResult(req).throw()
        return next() // TODO: It's continues to the controller
    } catch (error) {
        res.status(403)
        res.send({ error: error.array() })        
    }
}

module.exports = { validateResult };