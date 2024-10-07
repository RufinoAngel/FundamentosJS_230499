//Repaso de ciclos y Sentencias de Control

//Estilizacion de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(0,128,0,1) 0%, rgba(102,255,102,1) 50%, rgba(51,204,51,1) 100%)";
const style_console = `background: ${bg}; color: black; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;

//Personalización de las salidas de la Consola
console.warn("Practica 07: Ciclos y Sentencias de Control en Java Script");

console.log("%c1.- Si/Entonces .... (IF)",  style_console);
//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso 
let fechaActual= new Date();
console.log(`Hola la fecha de hoy es: ${fechaActual.toString()}`);
// y si la necesitamos en formato local 
const fechaLocalMX= fechaActual.toLocaleString(`es-MX`,{
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric",
    hour: "numeric",
    minute: "numeric",
    hour12:false
})
console.log(`En formato local (México): ${fechaLocalMX}`)

//Si es antes de las 12 saluda con un buenos dias
if(fechaActual.getHours()<12){
    console.log(`Buenos dias, Hoy es: ${fechaLocalMX}`)
}
//Existe un extensor de la sentencia if(Si) que es else(en caso contrario)
if(fechaActual.getMonth()<=6){
    console.log(`Estas en la primera mitad del año `)
}else{
    console.log(`Estas en la segunda mitad del año`)
}

// Que pasa si la validación tiene varias operaciones
const anio=fechaActual.getFullYear();
let inicioPrimavera = new Date(anio,2,21);
let inicioVerano = new Date(anio,5,21);
let inicioOtonio = new Date(anio,8,23);
let inicioInvierno = new Date(anio,11,21);

let horarioVerano=false;
if(fechaActual>= inicioPrimavera|| fechaActual< inicioVerano){
    console.log("Estamos en PRIMAVERA...")
}