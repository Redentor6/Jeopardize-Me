const jeopardizemeDB = require('../models/jeopardizeme-DB');

const jeopardizemeController = {};

jeopardizemeController.create = (req, res, ) => {
    console.log(req.body, 'body');
    jeopardizemeDB.save(req.body)
      .then((question) => {
        res.locals.question = question;
        res.redirect('/')
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

jeopardizemeController.findOne = (req, res, next) => {
	console.log('inside findOne');
	jeopardizemeDB.findById(req.params.id)
		.then( question => {
			// console.log('question found', question);
			res.locals.question = question
			next()
		})
		.catch( err => {
			console.log(err)
			res.status(500).send('no user found');
		})
}

jeopardizemeController.update = (req, res, next) => {
	// connect it to the MODEL changeone
	console.log('--> inside controller update', req.body)
	jeopardizemeDB.update(req.body)
	// 	question: req.body.question,
	// 	answer: req.body.answer,
	// 	value: req.body.value,
	// 	category: req.body.category,
	// 	id: req.body.id
	// })
	.then(question => {
		// console.log('did this work?', question);
		// res.render('./jeopardizeme/questions-edit', { data: question})
		res.locals.question = question
		
		console.log('herhehrehreer', res.locals.question)

		next()

	})
	.catch( err => {
		console.log('this failed');
		res.status(500).send(err);
	})
}






module.exports = jeopardizemeController;




