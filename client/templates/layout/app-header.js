Template.appHeader.helpers({
	menuItems: [
	{text: 'Fotos', route: 'photos'},
	{text: 'Galerias', route: 'galleries'}
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
