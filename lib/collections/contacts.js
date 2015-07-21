Schemas.Contact = new SimpleSchema({
    name: {
        type: String,
        label: "Nome",
        max: 50,
        autoform: {placeholder: "Nome"}      
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail",
        autoform: {placeholder: "nome@email.com"} 
    },
    subject: {
        type: String,
        label: "Assunto",
        max: 78,
        optional: true,
        autoform: {placeholder: "Assunto"} 
    },
    message: {
        type: String,
        label: "Mensagem",
        max: 1000,
        autoform: {placeholder: "Mensagem"}
    }
});
