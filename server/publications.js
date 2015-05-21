Meteor.publish('galleries', function (query, projection) {
	var data;

	if (query) {
		projection = projection || {};
		data = Galleries.find(query, projection);
	} else {
		data = Galleries.find();
	}

	if (data) {
		return data;
	}

	return this.ready();
});

Meteor.publish('photos', function (query, projection) {
	var data;

	if (query) {
		projection = projection || {};
		data = Photos.find(query, projection);
	} else {
		data = Photos.find();
	}

	if (data) {
		return data;
	}

	return this.ready();
});