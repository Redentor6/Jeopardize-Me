const jeopardizemeDB = require('../models/jeopardizeme-DB');



module.exports = {

	  create(req, res, next) {
    console.log(req.body, 'body');
    jeopardizemeDB.save(req.body)
      .then((question) => {
        res.locals.quote = quote;
        next();
      })
      .catch(err => next(err));
  },

 index(req, res) {
    // console.log(req.body, 'body');
    jeopardizemeDB.findAll()
      .then((question) => {
      	res.render('index', {
      		data: question
      	})
      })
     
      .catch(err => next(err));

	}
}




