Template.about.onCreated(() => {
  DocHead.setTitle('Sobre mim | Fotografia Infantil, Gestante, Feminino | Porto Alegre, Lajeado | Morgana Secco Fotografia');

  var metaInfo = {
    property: 'og:title',
    content: 'Morgana Secco Fotografia'};
  DocHead.addMeta(metaInfo);

  var richSnippet = {
    '@context': 'http://schema.org',
    '@type': 'AboutPage',
    name: 'Morgana Secco Fotografia - Sobre Mim',
    url: 'http://morganasecco.com.br/sobre'};
  DocHead.addLdJsonScript(richSnippet);
});
