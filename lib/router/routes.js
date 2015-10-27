// ============================= HELPERS =============================

function redirectIfLoggedIn (context, redirect) {
  if (Meteor.userId() || Meteor.loggingIn()) {
    redirect('/');
  }
}

function redirectIfNotLoggedIn (context, redirect) {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    let route = FlowRouter.current();
    if (route.route.name !== 'login') {
      Session.set('redirectAfterLogin', route.path);
    }
    FlowRouter.go('login');
  }
}

function checkAdmin (context, redirect) {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    let route = FlowRouter.current();
    if (route.route.name !== 'login') {
      Session.set('redirectAfterLogin', route.path);
    }
    FlowRouter.go('login');
  } else if (!Roles.userIsInRole(Meteor.user(), ['admin'])) {
    redirect('/');
  }
}

// ============================= / HELPERS =============================

// ============================= GROUPS =============================

var loggedIn = FlowRouter.group({
  name: 'logged-in',
  triggersEnter: [redirectIfNotLoggedIn]
});

var loggedOut = FlowRouter.group({
  name: 'logged-out',
  triggersEnter: [redirectIfLoggedIn]
});

var admin = FlowRouter.group({
  name: 'admin',
  triggersEnter: [checkAdmin]
});

// ============================= / GROUPS =============================

FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('appLayout', {content: 'home'});
  }
});

FlowRouter.route('/contato', {
  name: 'contact',
  action: function() {
    BlazeLayout.render('appLayout', {content: 'contact'});
  }
});

FlowRouter.route('/sobre', {
  name: 'about',
  action: function() {
    BlazeLayout.render('appLayout', {content: 'about'});
  }
});

FlowRouter.notFound = {
  name: 'notFound',
  action() {
    BlazeLayout.render('appLayout', {content: 'notFound'});
  }
};

//================== Auth ==================

loggedOut.route('/login', {
  name: 'login',
  action: function() {
    BlazeLayout.render('appLayout', {content: 'login'});
  }
});

loggedOut.route('/signup', {
  name: 'signup',
  action: function() {
    BlazeLayout.render('appLayout', {content: 'signup'});
  }
});

loggedIn.route('/logout', {
  name: 'logout',
  action() {
    Meteor.logout((error) => {
      if (error) {
        throw new Meteor.Error('logout-error', 'There was an error when logging out from the app');
      }
      FlowRouter.go('login');
    });
  }
});

//================== End Auth ==================

//================== Blog ==================

FlowRouter.route('/galerias/:slug/update', {
  name: 'postUpdate',
  action: function() {
    BlazeLayout.render('appLayout', {content: 'postUpdate'});
  }
});

FlowRouter.route('/galerias/:slug', {
  name: 'postShow',
  action: function() {
    BlazeLayout.render('appLayout', {content: 'postShow'});
  }
});

FlowRouter.route('/galerias', {
  name: 'posts',
  action: function() {
    BlazeLayout.render('appLayout', {content: 'posts'});
  }
});

admin.route('/galerias-admin', {
  name: 'postsAdmin',
  action: function() {
    BlazeLayout.render('appLayout', {content: 'postsAdmin'});
  }
});

//================== End Blog ==================
