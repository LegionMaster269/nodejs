var app = require('mongoose');

const dbURI = 'mongodb+srv://mrhacker:frictional1@cluster0-st2wm.mongodb.net';
app.connect(dbURI, {useNewUrlParser: true});

app.connection.on('connected', () => {
 console.log(`Mongoose connected to ${dbURI}`);
});
app.connection.on('error', err => {
 console.log('Mongoose connection error:', err);
});

