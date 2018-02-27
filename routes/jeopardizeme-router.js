const express = require('express');

const jeopardizemeController = ('../controllers/jeopardizemeController');

const viewsController = require('../controllers/views-controller.js');

const jeopardizemedb = require('../models/jeopardizeme-DB')
	console.log('im here');
	console.log(jeopardizemedb)

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
	console.log(req.body);
	jeopardizemedb.save(req.body)
	.then(results => {
		console.log(results)
		res.redirect("viewquestions")
	})
	.catch(err => {
		console.log(err.message)
		res.send(404)
	})
	
})




module.exports = jeopardizemeRouter;