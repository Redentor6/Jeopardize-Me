module.exports = {

search(req, res) {
	res.render('./jeopardizeme/viewquestions')
},

showAddForm(req, res) {
res.render('jeopardizeme/questions-add');
},
//handleDelete(req, res) {
  //  res.redirect('/jeopardizeme');
//  },

}; 

