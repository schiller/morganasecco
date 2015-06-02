Template.appHeader.helpers({
	staticMenuItems: function () {
		return [
			// {text: 'Fotos', route: '/photos'},
			{text: 'Galerias', route: '/galleries'}
		];
	},
	dynamicMenuItems: function () {
		return Galleries.find({featured: true});
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
	isGalleryActive: function (id) {
		var currentRoute = Router.current();
		// if (currentRoute && currentRoute.route.getName() === route) {
		// 	return "active";
		// } else {
		// 	return "";
		// }
		if (currentRoute && currentRoute.originalUrl === "/galleries/" + id) {
			return "active";
		} else {
			return "";
		}
	}
});