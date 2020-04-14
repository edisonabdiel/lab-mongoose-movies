const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')



router.get('/', (req, res, next) => {

    Celebrity.find().then((celebrities) => {
        console.log('all my celebrities: ' + celebrities)
        let obj = { allCelebrities: celebrities }
        res.render('celebrities', obj);
    })


});

router.post('/:id/delete', (req, res, next) => {
    Celebrity.findOneAndRemove(req.params.id).then(() => {
        res.redirect('/celebrities')
    })
});

router.get('/new', (req, res) => {
    res.render('new');
});

router.get('/:id', (req, res) => {
    Celebrity.findById(req.params.id).then(celeb => {
        res.render('show', { oneCelebrity: celeb });
    })

});



router.get('/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id).then((celeb) => {
        res.render('edit', celeb)
    })
});

router.post('/:id/edit', (req, res) => {

    let { name, occupation, catchPhrase } = req.body


    Celebrity.findOneAndUpdate(req.params.id,
        { name, occupation, catchPhrase }).then(() => {
            res.redirect('/celebrities')
        })

});



module.exports = router;
