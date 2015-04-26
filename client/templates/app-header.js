Template.appHeader.helpers({
	menuItems: [
	{text: 'Fotos', route: 'photos'},
	{text: 'Blog', route: 'blog'},
	{text: 'Admin', route: 'admin'}
	],
	isActive: function (route) {
		var currentRoute = Router.current();
		if (currentRoute && currentRoute.route.getName() === route) {
			return "active";
		} else {
			return "";
		}
	}
});