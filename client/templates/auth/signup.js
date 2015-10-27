Template.signup.events({
  'submit form': function (event) {
    event.preventDefault();
    var emailVar = event.target.signupEmail.value;
    var passwordVar = event.target.signupPassword.value;
    Accounts.createUser({
      email: emailVar,
      password: passwordVar
    });
  }
});
