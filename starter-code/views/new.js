const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity')

router.post('/new', (req, res) => {

    let celebrity = new Celebrity({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })

    celebrity.save().then(() => {
        res.redirect('/celebrities')
    })

})


module.exports = router