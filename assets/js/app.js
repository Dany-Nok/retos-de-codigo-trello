// AHORA ORDENAR QUÉ DEBERÍA APARECER EN JS Y SACAR DESDE HTML
// PARTIR POR LLAMAR LO QUE EXISTE Y SE MANTENDRÁ EN HTML

var version_001 = document.getElementById('version_001'); // EN HTML LLAMO A ESTE DIV, QUE SERA EL CONTENEDOR DE TODOS LOS ELEMENTOS CREADOS EN JS
var boton_principal = document.getElementById('agrega_lista'); // EN HTML LLAMO A ESTE BOTON, QUE ES EL BOTON QUE HARA TODAS LAS ACCIONES PARA POSTEAR

boton_principal.addEventListener('click', function() { // CREO LA FUNCION PARA EL BOTON PRINCIPAL
  boton_principal.style.visibility = 'hidden'; // HARA QUE EL BOTON "DESAPAREZCA" AL HACERLE CLICK
  var version_002 = document.getElementById('version_002'); // CREARA EL DIV CONTENEDOR
  var primer_input = document.createElement('input'); // CREARA EL INPUT QUE RECIBE LO QUE ESCRIBA EL USUARIO
  primer_input.setAttribute('id', 'escribe_aqui'); // ESTOY DEFINIENDO EL ID QUE TENDRA EL INPUT
  primer_input.setAttribute('type', 'text'); // ESTOY DEFINIENDO LAS CARACTERISTICAS DEL INPUT POR MEDIO DE ATRIBUTES
  primer_input.setAttribute('placeholder', 'Añade una Lista'); // EL INPUT TENDRA UN TEXTO "POR DEFECTO" QUE ES "AÑADE UNA TAREA"
  primer_input.value; // ME DARA EL VALOR QUE ESCRIBIO EL USUARIO EN EL INPUT

  var boton_guardar = document.createElement('button'); // CREARA EL BOTON NECESARIO PARA GUARDAR LO ESCRITO EN EL INPUT
  boton_guardar.setAttribute('id', 'guardar'); // CON SUS ATRIBUTOS DE ID
  var texto_boton_guardar = document.createTextNode('Guardar'); // SERA EL NOMBRE "VISIBLE" DEL BOTON GUARDAR

  boton_guardar.appendChild(texto_boton_guardar); // GUARDANDO EL "NOMBRE" DEL BOTON EN SU PADRE, "BOTON GUARDAR"

  var icon_x = document.createElement('i'); // CREARA EL ICONO X (VA AL LADO DEL BOTON GUARDAR)
  icon_x.classList.add('fa', 'fa-times', 'times'); // ...CON SUS CLASS

  version_002.appendChild(primer_input); // GUARDANDO EN DIV VERSION_002: INPUT, BOTON GUARDAR E ICONO "X"
  version_002.appendChild(boton_guardar);
  version_002.appendChild(icon_x);
  version_001.appendChild(version_002); // GUARDANDO EN DIV VERSION_001 (PADRE) EL DIV VERSION_002 COMPLETO

  boton_guardar.addEventListener('click', function() { // CREO LA FUNCION PARA EL BOTON GUARDAR
    var version_003 = document.createElement('div'); // CON UN DIV
    var tarea_escrita = document.createElement('p'); // UN "P" QUE VA A DEJAR "ESTAMPADO" EL VALOR DE LO QUE ESCRIBIO EL USUARIO
    tarea_escrita.setAttribute('type', 'paragraph'); // ...CON SUS ATRIBUTOS
    var tarea_impresa = document.createTextNode(primer_input.value); // ...Y EL VALOR REGISTRADO EN PRIMER_INPUT

    var link_agregar_tarjeta = document.createElement('a'); // CREARA EL LINK PARA AGREGAR UNA NUEVA TARJETA
    link_agregar_tarjeta.setAttribute('href', '#'); // ...CON SUS ATRIBUTOS
    var texto_link = document.createTextNode('Añadir una Tarjeta...'); // ...Y EL NOMBRE "VISIBLE" DEL LINK

    link_agregar_tarjeta.appendChild(texto_link); // GUARDANDO NODO DE TEXTO DEL LINK, EN EL LINK "AGREGAR TARJETA"
    tarea_escrita.appendChild(tarea_impresa); // GUARDANDO NODO DE TEXTO CON VALOR EN "P"
    version_003.appendChild(tarea_escrita); // GUARDANDO EN DIV VERSION_003: EL "P" Y EL LINK
    version_003.appendChild(link_agregar_tarjeta);
    version_002.appendChild(version_003); // GUARDANDO EN DIV VERSION_002: EL CONTENIDO COMPLETO DE VERSION_003

  link_agregar_tarjeta.addEventListener('click', function() { // CREO LA FUNCION PARA EL LINK
      var version_004 = document.createElement('div'); // CON UN DIV
      var segundo_input = document.createElement('input'); // CREARA EL INPUT QUE RECIBE LO QUE ESCRIBA EL USUARIO
      segundo_input.setAttribute('id', 'escribe_aca'); // ESTOY DEFINIENDO EL ID QUE TENDRA EL INPUT
      segundo_input.setAttribute('type', 'text'); // ESTOY DEFINIENDO LAS CARACTERISTICAS DEL INPUT POR MEDIO DE ATRIBUTES
      segundo_input.setAttribute('placeholder', 'Añade otra tarea aquí'); // EL INPUT TENDRA UN TEXTO "POR DEFECTO" QUE ES "AÑADE OTRA TAREA"
      segundo_input.value; // ME DARA EL VALOR QUE ESCRIBIO EL USUARIO EN EL INPUT

      var boton_anadir = document.createElement('button'); // CREARA EL BOTON PARA AGREGAR UNA NUEVA TARJETA
      boton_anadir.setAttribute('id', 'anadir'); // ...CON SUS ATRIBUTOS
      var texto_link = document.createTextNode('Añadir'); //...Y EL NOMBRE "VISIBLE" DE ESTE BOTON

      version_004.appendChild(boton_anadir);
      boton_anadir.appendChild(texto_link);
      version_004.appendChild(segundo_input);
      version_003.appendChild(version_004);

      boton_anadir.addEventListener('click', function() { // CREO LA FUNCION PARA EL BOTON AÑADIR
        var version_005 = document.createElement('div'); // CON SU RESPECTIVO DIV
        var tarea_escrita_2 = document.createElement('p'); // UN "P" QUE VA A DEJAR "ESTAMPADO" EL VALOR DE LO QUE ESCRIBIO EL USUARIO
        tarea_escrita.setAttribute('type', 'paragraph'); // ...CON SUS ATRIBUTOS
        document.getElementById('escribe_aca'); // "RESCATO" EL SEGUNDO INPUT (YA CREADO), QUE VA A SERVIR PARA LO MISMO
        var tarea_impresa_2 = document.createTextNode(segundo_input.value); // Y QUE RESCATE NUEVAMENTE LO QUE ESCRIBA EL USUARIO

        boton_anadir.appendChild(texto_link);
        version_005.appendChild(boton_anadir);
        tarea_escrita_2.appendChild(tarea_impresa_2); // GUARDANDO NODO DE TEXTO CON VALOR EN "P"
        version_005.appendChild(tarea_escrita_2); // GUARDANDO EN DIV VERSION_005: EL "P" Y EL LINK
        version_005.appendChild(link_agregar_tarjeta);
        version_004.appendChild(version_005);
      })
    })
  })
})
