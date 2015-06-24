// Meteor.publishComposite('featuredPhotos', function () {
// 	return {
// 		find: function () {
// 			var posts =  Posts.find({published: true, featured: true}).fetch();
// 			var postIds = posts.map(function (post) {
// 				return post._id;
// 			});

// 			return Photos.find({postId: {$in: postIds}});
// 		}
// 	};
// });

// Meteor.publishComposite('photos', function (postId) {
// 	return {
// 		find: function () {
// 			var query = {};

// 			if (!postId) {
// 				return this.stop();
// 			}

// 			query.postId = postId;

// 			return Photos.find(query);
// 		}
// 	};
// });
