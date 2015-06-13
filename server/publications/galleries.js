// featuredGalleries
Meteor.publish('featuredGalleries', function () {
	return Galleries.find({featured: true});
});

Meteor.publish('galleries', function (query, projection) {
	var data;
	query = query || {};
	projection = projection || {};

	if (!Roles.userIsInRole(this.userId, 'admin')) {
		if (this.userId) {
			var user = Meteor.users.findOne({_id: this.userId});
			query.email = user.emails[0].address;
		} else {
			return this.stop();
		}
	}

	data = Galleries.find(query, projection);

	if (data) { return data; }

	return this.ready();
});