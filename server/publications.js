Meteor.publish(null, function (){
	return Meteor.roles.find({});
});

Meteor.publish('featuredGalleries', function () {
	var data;

	data = Galleries.find({featured: true});

	if (data) { return data; }

	return this.ready();
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
			return this.ready();
		}
	}

	data = Galleries.find(query, projection);

	if (data) { return data; }

	return this.ready();
});

Meteor.publish('photos', function (query, projection) {
	var data;
	query = query || {};
	projection = projection || {};

	data = Photos.find(query, projection);

	if (data) { return data; }

	return this.ready();
});
