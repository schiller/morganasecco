Template.redirect.onCreated(function () {
	var id = this.data._id;
	Router.go('/galleries/' + id);
});