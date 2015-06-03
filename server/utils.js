Meteor.methods({
    sendEmail: function(doc) {
        // Important server-side check for security and data integrity
        check(doc, Schemas.Contact);

        var subject = doc.subject || "Website Contact Form - Message From " + doc.name;

        var emailTo = Meteor.settings.ContactEmail || "contato@morganasecco.com.br";

        // var emailFrom = Meteor.settings.FromEmail || "morganasecco@morganasecco.com.br";

        // smtp://morganasecco@morganasecco.com.br:abc123*!@smtp.zoho.com:465/

        // Build the e-mail text
        var text = "Name: " + doc.name + "\n\n" + "Email: " + doc.email + "\n\n\n\n" + doc.message;

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
