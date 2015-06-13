Photos.allow({
  insert: function (userId, doc) {
    return Roles.userIsInRole(userId, 'admin');
  },
  remove: function (userId, doc) {
    return Roles.userIsInRole(userId, 'admin');
  }
});
