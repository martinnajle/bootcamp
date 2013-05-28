months=['jan', 'feb', 'mar', 'may', 'apr', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

Handlebars.registerHelper('link', function(url, text) {
  text = Handlebars.Utils.escapeExpression(text);
  url  = Handlebars.Utils.escapeExpression(url);

  var result = '<a href="' + url + '">' + text + '</a>';
  return new Handlebars.SafeString(result);

});

Handlebars.registerHelper('convertMonth', function(aMonth) {
  
  return new Handlebars.SafeString(months[aMonth-1]);

});

var source = $("#plantilla_clientes").html();


var data = null;

var loadJson = function(fn) {
  var json = null;
  $.ajax({
    'async': false,
    'url': 'jsondata/profile.json',
    'dataType': 'json',
    'success': function(aData) {
      data = aData;
    },
    'error': function (data, err) {
      console.log(err);
    }
  });
};
loadJson();

//Loading the json with handlebars

var template = Handlebars.compile(source);
var html = template(data);
$("#panel_clientes").html(html);