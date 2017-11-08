// PASO 1: 1) Se mostrará el texto "Añadir una lista ...".
//         2) Al hacer click se debe ocultar el texto y mostrar un formulario.
//         3)El formulario está conformado por un input y un botón para que pueda añadir tareas a tu lista.
function add() {
  var newList = document.getElementById('anadir');
  var newInput = document.createElement('div');
  var newMicroWindow = document.getElementById('tareas');
  /*var ok = document.createElement('input');*/

  /*var btn = document.getElementById('anadir');
    btn.addEventListener('click', function addInput(){
      var ok = document.createElement('input');
      newInput.setAttribute('type', 'text');
      newInput.setAttribute('placeholder', 'Añadir una Lista...');
      newInput.classList.add('class', 'input_titulo');

      var nuevo_boton=document.createElement("button");
      var text_boton = document.createTextNode("Guardar");
      nuevo_boton.setAttribute("type","button");
      nuevo_boton.classList.add("class", "boton_guardar");*/


      var div_padre = document.getElementById("tareas");
      div_padre.appendChild(newInput);
      nuevo_boton.appendChild(text_boton);
      div_padre.appendChild(nuevo_boton);
    })
}

//crear div
//crear textarea o input
//crear boton
/*var boton= document.getElementById("boton_principal");
    boton.addEventListener("click",function(){
        //crear input y darle atributos
        var input = document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("placeholder", "Agrega evento");
        input.classList.add("class", "input_titulo");


    //crear boton y dar atributos al boton
    var nuevo_boton=document.createElement("button");
    var text_boton = document.createTextNode("Guardar");
    nuevo_boton.setAttribute("type","button");
    nuevo_boton.classList.add("class", "boton_guardar")


    var div_padre = document.getElementById("tareas");
    div_padre.appendChild(input);
    nuevo_boton.appendChild(text_boton);
    div_padre.appendChild(nuevo_boton);






})*/
