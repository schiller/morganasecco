Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

Router.route('/contact', {
  name: 'contact',
  layoutTemplate: 'appLayout'
});

Router.route('/about', {
  name: 'about',
  layoutTemplate: 'appLayout'
});

Router.route('/labs', {
  name: 'labs',
  layoutTemplate: 'appLayout'
});

Router.route('/loading', {
  name: 'loading'
});

Router.route('/not-found', {
  name: 'notFound',
  layoutTemplate: 'appLayout'
});

//================== Auth ==================

Router.route('/login', {
  name: 'login',
  layoutTemplate: 'appLayout'
});

Router.route('/signup', {
  name: 'signup',
  layoutTemplate: 'appLayout'
});

//================== End Auth ==================

//================== Blog ==================

Router.route('/posts/:_id/update', {
  name: 'postUpdate',
  controller: 'PostUpdateController'
});

Router.route('/posts/:_id', {
  name: 'postShow',
  controller: 'PostShowController'
});

Router.route('/posts', {
  name: 'posts',
  controller: 'PostListController'
});

Router.route('/posts-admin', {
  name: 'postsAdmin',
  controller: 'PostAdminController'
});

//================== End Blog ==================
