// featuredPhotos
Meteor.publish('featuredPhotos', function () {
	var galleries =  Galleries.find({featured: true}).fetch();
	var galleryIds = galleries.map(function (gallery) {
		return gallery._id;
	});
	return Photos.find({galleryId: {$in: galleryIds}});
});

Meteor.publish('photos', function (query, projection) {
	var data;
	query = query || {};
	projection = projection || {};

	// So pode ver as fotos associadas a seu email
	if (!Roles.userIsInRole(this.userId, 'admin')) {
		if (this.userId) {
			var user = Meteor.users.findOne({_id: this.userId});
			var email = user.emails[0].address;
			var galleries =  Galleries.find({email: email}).fetch();
			var galleryIds = galleries.map(function (gallery) {
				return gallery._id;
			});
			query.galleryId = {$in: galleryIds};
		} else {
			return this.stop();
		}
	}

	data = Photos.find(query, projection);

	if (data) { return data; }

	return this.ready();
});
