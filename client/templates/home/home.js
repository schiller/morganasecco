Template.home.onCreated(function() {
  DocHead.setTitle('Morgana Secco Fotografia | Infantil, Gestante, Feminino | Porto Alegre, Lajeado | Fotografia Lifestyle');

  let description = {
    name: 'description',
    content: 'Fotógrafa lifestyle de família, crianças, casais, gestantes, feminino. Fotografias espontâneas e com luz natural. Porto Alegre, Lajeado (RS).'};
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
    self.subscribe('homePost');
  });
});

Template.home.helpers({
  post() {
    let post = Posts.findOne({home: true}) || {};
    return post;
  }
});
