const mongoose = require('mongoose');
const Movie = require('../models/movie')

mongoose
    .connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

const movie = [
    {
        title: 'Once Upon a Time in the West...',
        genre: 'western',
        plot: 'bounty hunters messed with the wrong gunslinger'
    }, {
        title: 'There will be Blood',
        genre: 'drama',
        plot: 'Follows thw story of a miner who discovers a natural reserver of oil'
    }, {
        title: 'Her',
        genre: 'drama',
        plot: 'A weird guy falls in love of his virtual assistant'
    }
];



Movie.create(movie).then(() => {
    mongoose.connection.close();
});