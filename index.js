const opciones = ["Monociclo","Bicicleta","Triciclo","Cuatriciclo"];
const elementosOpcionesContainerElement = document.getElementById("elementosOpcionesContainer");
const mensajeListaPersonalizadaElement = document.getElementById("mensajeListaPersonalizada");
let opcionesElegidas = [];


opciones.forEach(opcion => {
  const nuevaOpcion = document.createElement("div");
  nuevaOpcion.innerHTML = `
    <input id="${opcion}" type="checkbox" name="productos" value="${opcion}">
		<label for="${opcion}">${opcion}</label>
  `
  elementosOpcionesContainerElement.appendChild(nuevaOpcion)
})

elementosOpcionesContainerElement.addEventListener("input", (e)=> {
  console.log(e.target.value, e.target.checked)
  if(e.target.checked){
    opcionesElegidas.push(e.target.value);
  } else {
    opcionesElegidas = opcionesElegidas.filter(opcion => opcion!==e.target.value);
  }
  console.log(opcionesElegidas)
  let mensaje="";
  switch (opcionesElegidas.length){
    case 0:
      mensaje="Seleccionar productos";
      break;
    case 1:
      mensaje=opcionesElegidas[0];
      break;
    default:
      mensaje= opcionesElegidas.length+" opciones elegidas."
      break;
  }
  mensajeListaPersonalizadaElement.innerText = mensaje;
})
