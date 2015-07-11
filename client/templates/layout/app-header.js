Template.appHeader.onRendered(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 10) {
			$(".main-nav").removeClass("transparent");
			$(".main-nav, .nav-logo-wrap .logo, .mobile-nav").addClass("small-height");
		}
		else {
			$(".main-nav").addClass("transparent");
			$(".main-nav, .nav-logo-wrap .logo, .mobile-nav").removeClass("small-height");
		}
	});

	var mnHasSub = $(".mn-has-sub");
	var mnThisLi;

	mnThisLi = mnHasSub.parent("li");
	mnThisLi.hover(function () {
		if (!$(".mobile-nav").is(":visible")) {
			$(this).find(".mn-sub:first").stop(true, true).fadeIn("fast");
		}
	}, function () {
		if (!$(".mobile-nav").is(":visible")) {
			$(this).find(".mn-sub:first").stop(true, true).delay(100).fadeOut("fast");
		}
	});
});

Template.appHeader.events({
	'click .mobile-nav': function () {
		if ($(".desktop-nav").hasClass("js-opened")) {
			$(".desktop-nav").slideUp("slow", "easeOutExpo", function () {$(".desktop-nav").removeAttr("style");}).removeClass("js-opened");
			$(this).removeClass("active");
		}
		else {
			$(".desktop-nav").slideDown("slow", "easeOutQuart").addClass("js-opened");
			$(this).addClass("active");
		}
		return false;
	},
	'click .mn-has-sub': function (event) {
		var target = event.currentTarget;
		if($(".mobile-nav").is(":visible")) {
			var mnThisLi = $(target).parent("li:first");
			if (mnThisLi.hasClass("js-opened")) {
				mnThisLi.find(".mn-sub:first").slideUp(function(){
					mnThisLi.removeClass("js-opened");
					mnThisLi.find(".mn-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down");
				});
			}
			else {
				$(target).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up");
				mnThisLi.addClass("js-opened");
				mnThisLi.find(".mn-sub:first").slideDown();
			}
		}

		return false;
	},
	// 'mouseenter .mn-has-sub': function (event) {
	// 	var li = $(event.currentTarget).parent("li");
	// 	if (!$(".mobile-nav").is(":visible")) {
	// 		$(li).find(".mn-sub:first").stop(true, true).fadeIn("fast");
	// 	}
	// },
	// 'mouseleave .mn-has-sub': function (event) {
	// 	var li = $(event.currentTarget).parent("li");
	// 	if (!$(".mobile-nav").is(":visible")) {
	// 		$(li).find(".mn-sub:first").stop(true, true).delay(100).fadeOut("fast");
	// 	}
	// }
});

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
