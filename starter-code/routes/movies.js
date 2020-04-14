const express = require('express');
const router = express.Router();
const Movie = require('../models/movies')



router.get('/', (req, res, next) => {

    Movie.find().then((celebrities) => {
        console.log('all my celebrities: ' + celebrities)
        let obj = { allCelebrities: celebrities }
        res.render('celebrities', obj);
    })


});

router.post('/:id/delete', (req, res, next) => {
    Movie.findOneAndRemove(req.params.id).then(() => {
        res.redirect('/celebrities')
    })
});

router.get('/new', (req, res) => {
    res.render('new');
});

router.get('/:id', (req, res) => {
    Movie.findById(req.params.id).then(celeb => {
        res.render('show', { oneCelebrity: celeb });
    })

});



router.get('/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id).then((celeb) => {
        res.render('edit', celeb)
    })
});

router.post('/:id/edit', (req, res) => {

    let { name, occupation, catchPhrase } = req.body


    Movie.findOneAndUpdate(req.params.id,
        { name, occupation, catchPhrase }).then(() => {
            res.redirect('/movies')
        })

});



module.exports = router;
