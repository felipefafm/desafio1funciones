
let opcion = confirm("desea calcular promedio de 3 notas");

if (opcion==true) {
    
    
    let nota1=parseInt(prompt("ingrese primera nota:"));
    let nota2=parseInt(prompt("ingrese segunda nota:"));
    let nota3=parseInt(prompt("ingrese tercera nota:"));
    alert("Las notas fueron correctamente ingresadas!!!")
    console.log(`el promedio es ${promedio(nota1,nota2,nota3)}`);
    alert(`el promedio es ${promedio(nota1, nota2, nota3)}`);

}else if(opcion==false) {
  alert("hasta pronto")
}else{
    console.log("saliste");

}




function promedio(nota1,nota2,nota3) {
  let prom=(nota1+nota2+nota3)/3;
  return prom;   
}
