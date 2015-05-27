// Before hooks
var IR_BeforeHooks = {
    isLoggedIn: function () {
        if (!Meteor.loggingIn() && !Meteor.user()) {
          // Notify.setError(__('Please login.'));
          this.render('login');
        } else {
        	this.next();
        }
    },
    // somethingForAnyRoute: function() { ... }
};

// (Global) Before hooks for any route
// Router.onBeforeAction(IR_BeforeHooks.somethingForAnyRoute);

// Before hooks for specific routes
// Must be equal to the route names of the Iron Router route map
Router.onBeforeAction(IR_BeforeHooks.isLoggedIn, {only: ['admin']});


// After Hooks
// Another object for all after hooks
// var IR_AfterHooks = {
//     fadeContentIn: function() { ... },
//     ...
// }

// (Global) After hooks for any route
// Router.onAfterAction(IR_AfterHooks.fadeContentIn);
