const express = require('express');

const jeopardizemeController = require('../controllers/jeopardizeme-controller');

const viewsController = require('../controllers/views-controller.js');

const jeopardizemedb = require('../models/jeopardizeme-DB')
	// console.log('im here');
	// console.log(jeopardizemedb)

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
		res.redirect("/")
	})
	.catch(err => {
		console.log(err.message)
		res.send(404)
	})
	
})
jeopardizemeRouter.delete('/:id', jeopardizemeController.delete);
// jeopardizemeRouter.delete('/:id', (req, res) => jeopardizemedb.destroy(req.params.id))
// jeopardizemeRouter.delete('/:id', jeopardizemeController.destroy, (req, res) => {
// 	console.log("this is req:", req);
// })



module.exports = jeopardizemeRouter;