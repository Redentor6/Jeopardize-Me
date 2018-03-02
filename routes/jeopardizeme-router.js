const express = require('express');

const jeopardizemeController = require('../controllers/jeopardizeme-controller');

const views = require('../controllers/views-controller.js');

const jeopardizemedb = require('../models/jeopardizeme-DB')
	// console.log('im here');
	// console.log(jeopardizemedb)

const jeopardizemeRouter = express.Router();




jeopardizemeRouter.get('/', views.search)

jeopardizemeRouter.get('/questions-add', (req, res) => {
	res.render('./jeopardizeme/questions-add')
})

// show the edit view with prepopulated values
jeopardizemeRouter.get('/questions-edit/:id', jeopardizemeController.findOne, views.showEditForm); //new
// route for PUT to update those shown values
jeopardizemeRouter.put('/questions-edit/:id', jeopardizemeController.update, views.showRedirect); //new
// jeopardizemeRouter.put('/edit/:id', (req, res) => {
// 	// res.send('this works!!')
// });


// jeopardizemeRouter.get('/', (req, res) => {
// 	res.render('')
// })
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