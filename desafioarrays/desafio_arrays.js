class integrante {
  constructor(nombre, apellido, rol, id) {
    //propiedades
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.rol = rol),
      (this.id = id);
  }
}
//instacias del obj
const integrante1 = new integrante("felipe", "flores", "anti-tanque", 1);
const integrante2 = new integrante("andres", "peretti", "fusilero", 2);
const integrante3 = new integrante("joaquin", "fica", "tirador", 3);
const integrante4 = new integrante("mauricio", "saravia", "granadero", 4);
const integrante5 = new integrante("pablo", "pardo", "ingeniero", 5);
//construyo el array
const escuadra = [
  integrante1,
  integrante2,
  integrante3,
  integrante4,
  integrante5,
];
// console.log(escuadra);

agregIntegrante();
modificaDato(); // aca queria que ingresar un numero de id y que me camiara alguno de los itegrantes por posicion pero se me complico
// eliminarUnIntegrante()
eliminarIntegrante()

//agrega un integrante a la escuadra
function agregIntegrante() {
  let nombreNuevoI = prompt("ingrese nombre del nuevo integrante: ");
  console.log(nombreNuevoI);
  let apellidoNuevoI = prompt("ingrese apellido del nuevo integrante:");
  console.log(apellidoNuevoI);
  let rolNuevoI = prompt("ingrese el rol del integrante:");
  console.log(rolNuevoI);
  let idNuevoI = prompt("ingrese id nuevo integrante:");
  console.log(idNuevoI);

  const nuevoIntegrante = new integrante(
    nombreNuevoI,
    apellidoNuevoI,
    rolNuevoI,
    idNuevoI
  );
  escuadra.push(nuevoIntegrante);
  // console.log(escuadra.length)
  console.log(escuadra);
}
//modifica rol de  un integrante
function modificaDato() {
  let resp = confirm("desea modificar el rol de algun integrante:");
  if (resp == true) {
    nr = prompt("cual es el nuevo rol ?" + "piloto" + " o " + "fusilero");
    integrante1.rol = nr;
  } else {
    alert("el rol no fue modificado..");
  }
}

//eliminar un integrante de la escuadra por id
function eliminarIntegrante() {
  let pregunta = confirm("desea eliminar un integrante:");
  if (pregunta == true) {
    let idopc = prompt("ingrese id del elemento a eliminar:");
    delete escuadra[idopc];
  } else {
    console.log("no eliminaste elementos de la escuadra..");
  }
  return console.log(escuadra);
}
