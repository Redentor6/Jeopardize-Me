const express = require('express');

const jeopardizemeRouter = express.Router();

const viewsController = require('../controllers/views-controller.js')

jeopardizemeRouter.get('/viewquestions', viewsController.search)

jeopardizemeRouter.get('/questions-add', (req, res) => {
	res.render('./jeopardizeme/questions-add')
})

jeopardizemeRouter.get('/', (req, res) => {
	res.render('')
})





module.exports = jeopardizemeRouter;