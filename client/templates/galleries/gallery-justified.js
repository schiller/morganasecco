var pageLimit = 50;

incrementLimit = function(template, inc) {
  inc = typeof inc !== 'undefined' ? inc : pageLimit;
  var limit = template.pageLimit.get();
  newLimit = limit + inc;
  template.pageLimit.set(newLimit);
};

Template.galleryJustified.onCreated(function() {
  this.pageLimit = new ReactiveVar(pageLimit);
});

Template.galleryJustified.onRendered(function(){
  var self = this;

  function justify () {
    var rowHeight = 250;
    var margins = 10;
    var rel = 'group';

    var maxWidth = '100%';
    var maxHeight = '100%';
    var opacity = 0.9;
    var transition = 'elastic';
    var current = '';

    self.$('#justified-gallery').justifiedGallery({
      rowHeight : rowHeight,
      margins : margins,
      captions: false,
      rel: rel
    }).on('jg.complete', function () {
      self.$(this).find('a').colorbox({
        maxWidth : maxWidth,
        maxHeight : maxHeight,
        opacity : opacity,
        transition : transition,
        current : current
      });
    });
  }

  justify();
});

Template.galleryJustified.helpers({
  photos: function () {
    var limit = Template.instance().pageLimit.get();
    return Photos.find({postId: this._id},
      {limit: limit, sort: {order: 1}});
  },
  hidden: function () {
    var limit = Template.instance().pageLimit.get();
    var photosCount = Photos.find({postId: this._id}).count();

    return photosCount <= limit ? 'hidden' : '';
  }
});

Template.galleryJustified.events({
  'click #load-more-btn': function (event, template) {
    incrementLimit(template);
  }
});
