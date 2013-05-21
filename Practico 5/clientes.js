//Contexto
var contexto = {
    clientes :[
        {
        "nombre": "Martin",
        "direccion": "Larrea 1173",
        "telefono": "425700"},
        {
        "nombre": "MJ",
        "direccion": "Alla lejos",
        "telefono": "23"},
        {
        "nombre": "Dios",
        "direccion": "Cielo",
        "telefono": "Nose"}
    ]
};

var source = $("#plantilla_clientes").html();
var template = Handlebars.compile(source);
var html = template(contexto);
$("#panel_clientes").html(html);