Schemas.Contact = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome',
    max: 50,
    autoform: {placeholder: 'Nome'}
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: 'E-mail',
    autoform: {placeholder: 'voce@email.com'}
  },
  subject: {
    type: String,
    label: 'Assunto',
    max: 78,
    optional: true,
    autoform: {placeholder: 'Assunto'}
  },
  message: {
    type: String,
    label: 'Mensagem',
    max: 1000,
    autoform: {placeholder: 'Mensagem'}
  },
  phone: {
    type: String,
    label: 'Telefone',
    max: 20,
    optional: true,
    autoform: {placeholder: '(99) 99999-9999'}
  }
});
