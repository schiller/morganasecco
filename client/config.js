AutoForm.setDefaultTemplate('plain');

Meteor.startup(function () {
  sAlert.config({
    effect: 'slide',
    offset: 30 // in px - will be added to first alert (bottom or top - depends of the position in config)
  });
});
