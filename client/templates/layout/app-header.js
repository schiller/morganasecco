Template.appHeader.helpers({
	staticMenuItems: function () {
		return [
			{text: 'Posts', route: '/posts'},
			{text: 'Posts Admin', route: '/posts-admin'},
			{text: 'Contato', route: '/contact'}
		];
	},
	dynamicMenuItems: function () {
		return Posts.find({featured: true, published: true});
	},
	isActive: function (route) {
		var currentRoute = Router.current();
		// if (currentRoute && currentRoute.route.getName() === route) {
		// 	return "active";
		// } else {
		// 	return "";
		// }
		if (currentRoute && currentRoute.originalUrl === route) {
			return "active";
		} else {
			return "";
		}
	},
	isPostActive: function (id) {
		var currentRoute = Router.current();
		// if (currentRoute && currentRoute.route.getName() === route) {
		// 	return "active";
		// } else {
		// 	return "";
		// }
		if (currentRoute && currentRoute.originalUrl === "/posts/" + id) {
			return "active";
		} else {
			return "";
		}
	}
});
