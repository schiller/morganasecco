Template.contact.onCreated(() => {
  DocHead.setTitle('Contato | Morgana Secco Fotografia | Casamento | Porto Alegre | Infantil, Eventos');

  let description = {
    name: 'description',
    content: 'Para saber mais sobre meu trabalho ou solicitar orçamentos, mande uma mensagem. Ficarei muito feliz em responder! :)'};
  DocHead.addMeta(description);

  var ogTitle = {
    property: 'og:title',
    content: 'Morgana Secco Fotografia'};
  DocHead.addMeta(ogTitle);

  var contactPage = {
    '@context': 'http://schema.org',
    '@type': 'ContactPage',
    name: 'Contato - Morgana Secco Fotografia',
    url: 'http://morganasecco.com.br/contato'};
  DocHead.addLdJsonScript(contactPage);

  var organization = {
    '@context' : 'http://schema.org',
    '@type' : 'Organization',
    'name' : 'Morgana Secco Fotografia',
    'url' : 'http://morganasecco.com.br',
    'logo' : 'http://www.morganasecco.com.br/images/morgana_coracao_preto.png',
    'contactPoint' : [{
      '@type' : 'ContactPoint',
      'telephone' : '+55-51-9676-0452',
      'contactType' : 'customer service'}],
    'sameAs' : [
      'https://www.facebook.com/MorganaSeccoFotografia',
      'https://twitter.com/morganasecco',
      'https://plus.google.com/+MorganaSecco']};
  DocHead.addLdJsonScript(organization);
});


Template.contact.helpers({
  contactFormSchema: function() {
    return Schemas.Contact;
  }
});
