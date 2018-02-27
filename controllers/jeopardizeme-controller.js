const ${jeopardizeme}DB = require('../models/${jeopardizeme}-DB');



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
}