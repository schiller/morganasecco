sitemaps.config('rootUrl', 'http://morganasecco.com.br/');

sitemaps.add('/sitemaps.xml', function() {
	var homePosts = Posts.find({
		published: true,
		home: true 
	}).fetch();

	var homePhotosArray = [];

	_.each(homePosts, function(post) {
		var photos = Photos.find({postId: post._id}).fetch();

		_.each(photos, function (photo) {
			var photoData = {};
			photoData.loc = photo.urlThumb,
			photoData.caption = photo.title,
			photoData.title = photo.title
			homePhotosArray.push(photoData);
		});
	});

	var out = [
	{ page: '/', images: homePhotosArray},
	{ page: '/contact'},
	{ page: '/about'},
	{ page: '/posts'}
	];

	var posts = Posts.find({
		published: true,
		home: { '$ne': true }
	}).fetch();

	_.each(posts, function(post) {
		var photos = Photos.find({postId: post._id}).fetch();
		var photosArray = [];

		_.each(photos, function (photo) {
			var photoData = {};
			photoData.loc = photo.urlThumb,
			photoData.caption = photo.title,
			photoData.title = photo.title
			photosArray.push(photoData);
		});

		out.push({
			page: 'posts/' + post._id,
			lastmod: post.updatedAt,
			images: photosArray
		});
	});

	return out;
});
