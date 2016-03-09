Template.home.onCreated(function() {
  DocHead.setTitle('Casamento | Morgana Secco Fotografia | Porto Alegre | Infantil, Eventos');

  let description = {
    name: 'description',
    content: '❤ Fotógrafa de casamento. 💍👰💒 Fotografa lifestyle de família, crianças, casais, gestantes, feminino. Fotografias espontâneas e com luz natural. Porto Alegre (RS)'};
  DocHead.addMeta(description);

  var ogTitle = {
    property: 'og:title',
    content: 'Morgana Secco Fotografia'};
  DocHead.addMeta(ogTitle);

  var webPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: 'Morgana Secco Fotografia',
    url: 'http://morganasecco.com.br'};
  DocHead.addLdJsonScript(webPage);

  var self = this;
  self.autorun(function() {
    self.subscribe('homePost', () => {
      let post = Posts.findOne({home: true}) || {};
      let photos = Photos.find({postId: post._id}).fetch();

      photos.forEach((photo) => {
        var ogImage = {
          property: 'og:image',
          content: photo.urlVeryLarge
        };
        var twitterImage = {
          name: 'twitter:image',
          property: photo.urlVeryLarge
        };
        DocHead.addMeta(ogImage);
        DocHead.addMeta(twitterImage);
      });
    });
  });
});

Template.home.helpers({
  post() {
    let post = Posts.findOne({home: true}) || {};
    return post;
  }
});
