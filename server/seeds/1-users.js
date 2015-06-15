// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    var users = [
    {name:"Normal User",email:"normal@example.com",roles:[]},
    {name:"Admin User",email:"admin@example.com",roles:['admin']}
    ];

    _.each(users, function (user) {
      var id;

      id = Accounts.createUser({
        email: user.email,
        password: "1234",
        profile: { name: user.name }
      });

      if (user.roles.length > 0) {
        // Need _id of existing user record so this call must come
        // after `Accounts.createUser` or `Accounts.onCreate`
        Roles.addUsersToRoles(id, user.roles);
      }
    });
  }
});
