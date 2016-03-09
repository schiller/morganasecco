Template.about.onCreated(() => {
  DocHead.setTitle('Sobre mim | Morgana Secco Fotografia | Casamento | Porto Alegre | Infantil, Eventos');

  var metaInfo = {
    property: 'og:title',
    content: 'Morgana Secco Fotografia'};
  DocHead.addMeta(metaInfo);

  var richSnippet = {
    '@context': 'http://schema.org',
    '@type': 'AboutPage',
    name: 'Sobre Mim - Morgana Secco Fotografia',
    url: 'http://morganasecco.com.br/sobre'};
  DocHead.addLdJsonScript(richSnippet);
});
