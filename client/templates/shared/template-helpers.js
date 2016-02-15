Template.registerHelper('truncate', function (text, length) {
  var truncatedText = text.substring(0, length) + '...';
  return truncatedText;
});