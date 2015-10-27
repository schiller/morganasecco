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

FlowRouter.route('/login', {
  name: 'login',
  action: function() {
    BlazeLayout.render('appLayout', {content: 'login'});
  }
});

FlowRouter.route('/signup', {
  name: 'signup',
  action: function() {
    BlazeLayout.render('appLayout', {content: 'signup'});
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

FlowRouter.route('/galerias-admin', {
  name: 'postsAdmin',
  action: function() {
    BlazeLayout.render('appLayout', {content: 'postsAdmin'});
  }
});

//================== End Blog ==================
