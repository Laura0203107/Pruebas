var width = window.screen.width;
var height = window.screen.height;

window.document.write("<p>Ancho: " + width + " : " + "Alt: " + height + "</p>");

var navegador = window.navigator.userAgent;
window.document.write(navegador);

//Redireccion a google se usa la propiedad Location Object
window.location.href = "https://youtube.com/";


//Metodo Open por medio de un boton
/*function open_window(){
    window.open("https://espanol.yahoo.com/");
}*/


//Abre en ventana emergente el navegador
/*function open_window(){
    window.open("http://www.google.com", "_blanck", "width=300, height=300");
}*/

