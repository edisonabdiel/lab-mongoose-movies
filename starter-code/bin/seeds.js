const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity')

mongoose
    .connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

const celebrity = [
    {
        name: 'Robert De Niro',
        occupation: 'actress',
        catchPhrase: 'You talking to me?'
    }, {
        name: 'Leonardo DiCaprio',
        occupation: 'actor',
        catchPhrase: 'They told me an Oscars joke; i didnt get it.'
    }, {
        name: 'Joaquin Phoenix',
        occupation: 'actor',
        catchPhrase: 'Stop flying in private jets!'
    }
];



Celebrity.create(celebrity).then(() => {
    mongoose.connection.close();
});