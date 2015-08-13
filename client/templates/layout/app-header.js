Template.appHeader.onRendered(function () {
	var self = this;

	//sticky nav
	var $jsStick = $(".js-stick");
	$jsStick.sticky({topSpacing: 0});


	//small height navbar
	var $mainNav = $(".main-nav");
	
	$(window).scroll(function () {
		if ($(window).scrollTop() > 10) {
			$mainNav.removeClass("transparent");
			$(".main-nav, .nav-logo-wrap .logo, .mobile-nav").addClass("small-height");
		} else {
			$mainNav.addClass("transparent");
			$(".main-nav, .nav-logo-wrap .logo, .mobile-nav").removeClass("small-height");
		}
	});


	//Inner Li mobile
	var $mobileNav = $(".mobile-nav");

	function toggleInnerLi () {
		if($mobileNav.is(":visible")) {
			var mnThisLi = $(this).parent("li:first");
			if (mnThisLi.hasClass("js-opened")) {
				mnThisLi.find(".mn-sub:first").slideUp(function(){
					mnThisLi.removeClass("js-opened");
					mnThisLi.find(".mn-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down");
				});
			} else {
				$(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up");
				mnThisLi.addClass("js-opened");
				mnThisLi.find(".mn-sub:first").slideDown();
			}
		}
	}	

	$(".mobile-on .mn-has-sub")
	.find(".fa:first")
	.removeClass("fa-angle-right")
	.addClass("fa-angle-down");	

	var $mnHasSub = $(".mn-has-sub");
	$mnHasSub.on('click', toggleInnerLi);


	//desktop nav dropdowns
	var mnThisLi = $mnHasSub.parent("li");
	mnThisLi.hover(function () {
		if (!$mobileNav.is(":visible")) {
			$(this).find(".mn-sub:first").stop(true, true).fadeIn("fast");
		}
	}, function () {
		if (!$mobileNav.is(":visible")) {
			$(this).find(".mn-sub:first").stop(true, true).delay(100).fadeOut("fast");
		}
	});


	//toggle mobile navbar
	function toggleNavbar () {
		if ($mobileNav.is(":visible")) {
			if ($desktopNav.hasClass("js-opened")) {
				$desktopNav.slideUp("slow", "easeOutExpo", function () {
					$desktopNav.removeAttr("style");
				}).removeClass("js-opened");
				$(this).removeClass("active");
			} else {
				$desktopNav.slideDown("slow", "easeOutQuart").addClass("js-opened");
				$(this).addClass("active");
			}
		}

		return false;
	}

	var $desktopNav = $(".desktop-nav");
	$mobileNav.on('click', toggleNavbar);

	// var $mobileNavbarLinks = $('.desktop-nav a:not(.mn-has-sub)');
	// $mobileNavbarLinks.on('click', toggleNavbar);

	Tracker.autorun(function () {
		var count = Posts.find({featured: true, published: true}).count();
		$mobileNavbarLinks = $('.desktop-nav a:not(.mn-has-sub)');
		$mobileNavbarLinks.off('mouseup', toggleNavbar);
		$mobileNavbarLinks.on('mouseup', toggleNavbar);
	});	
});

Template.appHeader.helpers({
	staticMenuItems: function () {
		var items = [
		{text: 'Galerias', route: '/galerias'},
		{text: 'Contato', route: '/contato'},
		{text: 'Sobre Mim', route: '/sobre'}];

		if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
			items.push({text: 'Posts Admin', route: '/galerias-admin'});
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
	isPostActive: function (slug) {
		var currentRoute = Router.current();
		// if (currentRoute && currentRoute.route.getName() === route) {
		// 	return "active";
		// } else {
		// 	return "";
		// }
		if (currentRoute && currentRoute.originalUrl === "/galerias/" + slug) {
			return "active";
		} else {
			return "";
		}
	}
});
