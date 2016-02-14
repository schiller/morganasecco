Template.postShow.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var slug = FlowRouter.getParam('slug');
    self.subscribe('posts', slug, () => {
      let post = Posts.findOne({slug: slug});
      let photos = Photos.find({postId: post._id}).fetch();

      DocHead.setTitle(post.title +
        ' | Fotografia Infantil, Gestante, Feminino | Porto Alegre, Lajeado | Morgana Secco Fotografia');

      var description = {
        name: 'description',
        content: post.text};
      DocHead.addMeta(description);

      var ogTitle = {
        property: 'og:title',
        content: post.title + ' | Morgana Secco Fotografia'};
      DocHead.addMeta(ogTitle);

      var ogDescription = {
        property: 'og:description',
        content: post.text};
      DocHead.addMeta(ogDescription);

      var ogType = {
        property: 'og:type',
        content: 'article'};
      DocHead.addMeta(ogType);

      let blogPosting = {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        'headline': post.title,
        'description': post.text,
        'articleBody': post.text,
        'image': [],
        'datePublished': post.createdAt};

      photos.forEach((photo) => {
        blogPosting.image.push(photo.urlSmall);
      });

      DocHead.addLdJsonScript(blogPosting);
    });
  });
});

Template.postShow.helpers({
  post() {
    let slug = FlowRouter.getParam('slug');
    let post = Posts.findOne({slug: slug}) || {};
    return post;
  }
});
