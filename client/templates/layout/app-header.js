Template.appHeader.onRendered(function () {
	$(".js-stick").sticky({
		topSpacing: 0
	});

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

	$(".mobile-on .mn-has-sub").find(".fa:first").removeClass("fa-angle-right").addClass("fa-angle-down");

	mnHasSub.on('click', function () {
		if($(".mobile-nav").is(":visible")) {
			var mnThisLi = $(this).parent("li:first");
			if (mnThisLi.hasClass("js-opened")) {
				mnThisLi.find(".mn-sub:first").slideUp(function(){
					mnThisLi.removeClass("js-opened");
					mnThisLi.find(".mn-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down");
				});
			}
			else {
				$(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up");
				mnThisLi.addClass("js-opened");
				mnThisLi.find(".mn-sub:first").slideDown();
			}
		}
	});

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

	$('.mobile-nav').on('click', function () {
		if ($(".desktop-nav").hasClass("js-opened")) {
			$(".desktop-nav").slideUp("slow", "easeOutExpo", function () {
				$(".desktop-nav").removeAttr("style");
			}).removeClass("js-opened");
			$(this).removeClass("active");
		}
		else {
			$(".desktop-nav").slideDown("slow", "easeOutQuart").addClass("js-opened");
			$(this).addClass("active");
		}
		return false;
	});  
});

Template.appHeader.helpers({
	staticMenuItems: function () {
		var items = [
		{text: 'Posts', route: '/posts'},
		{text: 'Contato', route: '/contact'},
		{text: 'Sobre Mim', route: '/about'}];

		if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
			items.push({text: 'Posts Admin', route: '/posts-admin'});
		}

		return items;
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
