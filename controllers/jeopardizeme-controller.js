const jeopardizemeDB = require('../models/jeopardizeme-DB');

const jeopardizemeController = {};

jeopardizemeController.create = (req, res, next) => {
    console.log(req.body, 'body');
    jeopardizemeDB.save(req.body)
      .then((question) => {
        res.locals.quote = quote;
        next();
      })
      .catch(err => next(err));
  }

jeopardizemeController.index = (req, res) => {
    // console.log(req.body, 'body');
    jeopardizemeDB.findAll()
      .then((question) => {
      	res.render('index', {
      		data: question
      	})
      })
     
      .catch(err => next(err));

	}

jeopardizemeController.delete = (req, res) => {
		// console.log("inside delete function")
		jeopardizemeDB.destroy(req.params.id)
			.then(() => {
				res.redirect('/')
			});
	}

module.exports = jeopardizemeController;




