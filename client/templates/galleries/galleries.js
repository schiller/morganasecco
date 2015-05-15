Template.galleries.helpers({
	galleries: function () {
		return Galleries.find();
	}
});

Template.galleries.events({
  'click #add-gallery-btn': function () {
    Galleries.insert({title: "Sem título"}, function (error, result) {
      if (error) {
        alert(error.invalidKeys);
        return;
      }
      
      Router.go('galleryUpdate', {_id: result});
    });

    return false;
  }
});
