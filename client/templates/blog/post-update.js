Template.postUpdate.events({
	'click #delete-post-btn': function () {
		var confirmDelete = confirm("Tem certeza que deseja deletar o post e todas suas fotos? Esta ação é irreversível.");

		if (confirmDelete === true) {
			Meteor.call("removePhotos", this._id);
			Posts.remove(this._id);

			Router.go('postsAdmin');
		}

		return false;
	}
});
