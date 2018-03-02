const jeopardizemeDB = require('../models/jeopardizeme-DB');

const jeopardizemeController = {};

jeopardizemeController.create = (req, res, next) => {
    console.log(req.body, 'body');
    jeopardizemeDB.save(req.body)
      .then((question) => {
        res.locals.question = question;
        next();
      })
      .catch(err => next(err));
  }

jeopardizemeController.index = (req, res,  next) => {
    // console.log(req.body, 'body');
    jeopardizemeDB.findAll()
      .then((questions) => {
      	console.log('getAllquestions', questions);
      	res.render('index', {
      		data: questions
      	});
      })
      .catch(err => next(err));

	}

jeopardizemeController.delete = (req, res) => {
		// console.log("inside delete function")
		jeopardizemeDB.destroy(req.params.id)
			.then(() => {
				console.log('destroyed!')
				res.redirect('/');
			})
			.catch(err => {
				res.status(500).send('no bueno');
			})
	}

jeopardizemeController.findOne = (req, res) => {
	console.log('inside findOne');
	jeopardizemeDB.findOne(req.params.id)
		.then( question => {
			console.log('question found', question);
			res.render('./jeopardizeme/questions-edit', {data: question})
		})
		.catch( err => {
			console.log(err)
			res.status(500).send('no user found');
		})
}

jeopardizemeController.update = (req, res) => {
	// connect it to the MODEL changeone
	console.log('--> inside controller update', req.body)
	jeopardizemeDB.update({
		question: req.body.question,
		answer: req.body.answer,
		value: req.body.value,
		id: req.body.id
	})
	.then(question=>{
		console.log('did this work?', question);
		// res.render('./jeopardizeme/questions-edit', { data: question})
		res.redirect('/');
	})
	.catch( err => {
		console.log('this failed');
		res.status(500).send(err);
	})
}






module.exports = jeopardizemeController;




