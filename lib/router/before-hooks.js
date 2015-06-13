var beforeHooks = {
    isLoggedIn: function () {
        if (!Meteor.loggingIn() && !Meteor.user()) {
          // Notify.setError(__('Please login.'));
          this.render('login');
        } else {
        	this.next();
        }
    }
};

Router.onBeforeAction(beforeHooks.isLoggedIn, {only: ['admin']});
