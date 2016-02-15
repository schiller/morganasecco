Meteor.methods({
  sendEmail: function(doc) {
    // Important server-side check for security and data integrity
    check(doc, Schemas.Contact);

    var subject = doc.subject || 'Mensagem de ' + doc.name;
    var phone = doc.phone || '-';

    var emailTo = Meteor.settings.ContactEmail || 'contato@morganasecco.com.br';

    // Build the e-mail text
    var text = 'Nome: ' + doc.name + '\n\n' + 
      'Telefone: ' + phone + '\n\n' + 
      'Email: ' + doc.email + '\n\n\n\n' + 
      doc.message;

    this.unblock();

    // Send the e-mail
    Email.send({
      to: emailTo,
      from: doc.email,
      subject: subject,
      text: text
    });
  }
});
