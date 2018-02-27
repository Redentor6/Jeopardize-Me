const express = require('express');

const jeopardizemeController = ('../controllers/jeopardizemeController');

const viewsController = require('../controllers/views-controller.js');

const jeopardizemeRouter = express.Router();




jeopardizemeRouter.get('/viewquestions', viewsController.search)

jeopardizemeRouter.get('/questions-add', (req, res) => {
	res.render('./jeopardizeme/questions-add')
})

jeopardizemeRouter.get('/', (req, res) => {
	res.render('')
})
// jeopardizemeRouter.get('/questions-add', jeopardizemeController.makeBlankQuestion, views.showAddForm, views.show404);

jeopardizemeRouter.post('/', (req, res) => {
	res.send('this works');
})




module.exports = jeopardizemeRouter;