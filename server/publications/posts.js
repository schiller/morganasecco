Meteor.publish('posts', function () {
	var data;
	data = Posts.find({published: true});
	if (data) { return data; }
	return this.ready();
});
