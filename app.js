/**
 * Con querySelectorAll identifico todos los links que contenga
 * como propiedad rel='menu'
 */
var menus = document.querySelectorAll('a[rel=menu]');
/** Puedes decomentar los console.log y observar tu mism@ las propiedades */
//console.log(menus);

var content = document.getElementById("content");

menus.forEach(menu => {
  menu.addEventListener('click', function (e) {
    /** Cancelamos la ejecución del href */
    e.preventDefault();
    /**
     * Descomenta uno a uno los siguientes console.log para que descubra como llegue 
     * a menu.attributes.href.nodeValue
     */
    // console.log(menu);
    // console.log(menu.attributes);
    // console.log(menu.attributes.href);
    // console.log(menu.attributes.href.nodeValue);
    var href = menu.attributes.href.nodeValue;
    /** Ahora la magia la hacemos con fetch */
    fetch(href)
      .then(res => res.text())
      .then(data => {
        //console.log(data);
        content.innerHTML = data;
      });
  })
});