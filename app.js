// Required resources
const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const jeopardizemeRouter = require('./routes/jeopardizeme-router');
const jeopardizemeController = require('./controllers/jeopardizeme-controller');
//Port
const PORT = process.env.PORT || 3000;
//Initialize express
const app = express();
//Configure views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Logger set up
app.use(logger('dev'));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
	extended: false,
	})
);
app.use(bodyParser.json());

app.use(methodOverride('_method'));
//Routes
// app.get('/', (req, res) => {
// 	res.render('./index')
// })

app.get('/', jeopardizemeController.index);
app.use('/jeopardize', jeopardizemeRouter);


app.listen(PORT, () => {
	console.log(`We are live on ${PORT}, in ${app.get('env')} mode`);
});