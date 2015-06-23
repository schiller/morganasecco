Template.galleryUpdate.events({
  "click #save-gallery-btn": function (event, template) {
    var title = document.getElementById('galleryTitle').value;
    var featured = document.getElementById('galleryFeatured').checked;
    var email = document.getElementById('galleryEmail').value;

    Galleries.update(this._id, {$set: {title: title, featured: featured, email: email}}, function (error, result) {
      if (error) {alert(error);}
      alert(result);
    });

    return false;
  },
  "click #delete-gallery-btn": function (event, template) {
    var confirmDelete = confirm("Tem certeza que deseja deletar a galeria e todas suas fotos? Esta ação é irreversível.");

    if (confirmDelete === true) {
      Meteor.call("removePhotos", this._id);
      Galleries.remove(this._id);

      Router.go('galleryList');
    }

    return false;
  }
});
