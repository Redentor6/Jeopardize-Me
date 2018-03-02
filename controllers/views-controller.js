module.exports = {

search(req, res) {
	res.render('./jeopardizeme/viewquestions')
},

showAddForm(req, res) {
res.render('./jeopardizeme/questions-add');
},
showEditForm(req, res) {
	res.render('./jeopardizeme/questions-edit', {
		data: res.locals.question
	})

	},
showRedirect(req, res){
	res.redirect('/')
} 
}

