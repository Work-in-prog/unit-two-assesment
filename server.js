const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//PORT

const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/unittwoassesment'

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));


// Error / success
mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));


// mongoose connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})


// Controller
const todoController = require ('./controller/todo.js');
app.use('/todo', todoController);



// listen
app.listen(PORT, () => {
    console.log('listening on: ' + PORT);
});
