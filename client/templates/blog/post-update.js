Template.postUpdate.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var slug = FlowRouter.getParam('slug');
    self.subscribe('postsAdmin', slug);
  });
});

Template.postUpdate.helpers({
  post() {
    let slug = FlowRouter.getParam('slug');
    let post = Posts.findOne({slug: slug}) || {};
    return post;
  }
});

Template.postUpdate.events({
  'click #delete-post-btn': function () {
    var confirmDelete = confirm('Tem certeza que deseja deletar o post e todas suas fotos? Esta ação é irreversível.');

    if (confirmDelete === true) {
      Meteor.call('removePhotos', this._id);
      Posts.remove(this._id);

      FlowRouter.go('postsAdmin');
    }

    return false;
  },
  'blur [name="title"]': function() {
    let form = $('#updatePost'),
      title = form.find('[name="title"]'),
      slug = form.find('[name="slug"]');

    var isValid = AutoForm.validateField('updatePost', 'title', false);

    if (isValid) {
      var formatted = sluggify(title.val());
      slug.val(formatted);
    } else {
      slug.val('');
    }
  },
  'blur [name="slug"]': function() {
    var form = $('#updatePost'),
      slug = form.find('[name="slug"]');

    var isValid = AutoForm.validateField('updatePost', 'slug', false);

    if (isValid) {
      var formatted = sluggify(slug.val());
      slug.val(formatted);
    } else {
      slug.val('');
    }
  }
});

AutoForm.hooks({
  updatePost: {
    onSuccess: function(formType, result) {
      var currentSlug = this.currentDoc.slug;
      var updateSlug = this.updateDoc.$set.slug;

      if (currentSlug !== updateSlug) {
        FlowRouter.go('postUpdate', {slug: updateSlug});
      }
    }
  }
});
