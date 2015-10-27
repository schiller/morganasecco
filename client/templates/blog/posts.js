Template.posts.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('posts', () => {
      let posts = Posts.find({
        published: true,
        home: { '$ne': true },
        featured: { '$ne': true }
      }, {
        sort: {createdAt: -1, updatedAt: -1}
      }).fetch();

      let blog = {
        '@context': 'http://schema.org',
        '@type': 'Blog',
        'headline': 'Galerias',
        'description': 'Últimos trabalhos',
        'blogPost': []};

      posts.forEach((post) => {
        blog.blogPost.push({
          '@type': 'BlogPosting',
          'headline': post.title,
          'description': post.text,
          'datePublished': post.createdAt
        });
      });

      DocHead.addLdJsonScript(blog);
    });
  });

  DocHead.setTitle('Galerias | Fotografia Infantil, Gestante, Feminino | Porto Alegre, Lajeado | Morgana Secco Fotografia');

  var ogTitle = {
    property: 'og:title',
    content: 'Galerias - Morgana Secco Fotografia'};
  DocHead.addMeta(ogTitle);
});

Template.posts.onRendered(function () {
  var self = this;
  self.$('.masonry').imagesLoaded(function () {
    self.$('.masonry').masonry();
  });
});

Template.posts.helpers({
  posts() {
    let posts = Posts.find({
      published: true,
      home: { '$ne': true },
      featured: { '$ne': true }
    }, {
      sort: {createdAt: -1, updatedAt: -1}
    }) || [];
    return posts;
  }
});
