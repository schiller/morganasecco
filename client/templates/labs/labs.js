Template.labs.onRendered(function () {
	function multisortable_stop (e) {
		console.log("I've been sorted.");
	}

	this.$("ul").multisortable({
		stop: multisortable_stop
	});
});
