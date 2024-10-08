//Repaso de ciclos y Sentencias de Control

//Estilizacion de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(0,128,0,1) 0%, rgba(102,255,102,1) 50%, rgba(51,204,51,1) 100%)";
const style_console = `background: ${bg}; color: black; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;

//Personalización de las salidas de la Consola
console.warn("Practica 07: Ciclos y Sentencias de Control en Java Script");

console.log("%c1.- Si/Entonces .... (IF)",  style_console);
//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso 
let fechaActual= new Date();
//let fechaActual=new Date("2024/06/05");

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

if(fechaActual>= inicioPrimavera && fechaActual< inicioVerano){
    console.log("Estamos en PRIMAVERA ...")
    console.log("Inicia la Floración de muchas plantas ...")
    console.log("Los dias son las mas largos y las noches más cortas...")
    console.log("Muchos animales despiertan de la hibernación...")
    estacion="Primavera"
    horarioVerano=true;
    
}else if(fechaActual>= inicioVerano && fechaActual< inicioOtonio){
    console.log("Estamos en VERANO ...")
    console.log("En esta temporada abundan los días Soleados y Caluroso...")
    console.log("En esta temporada el indice de turismo vacacional sube...")
    console.log("Mucha gente busca realizar actividades al aire ...")
    estacion="Verano"
    horarioVerano=true;
}else if(fechaActual>= inicioOtonio && fechaActual< inicioInvierno){
    console.log("Estamos en OTOÑO ...")
    console.log("Los Árboles suelen cambiar de follaje...")
    console.log("Se registrarán temperaturas más templadas...")
    console.log("Los animales comienzan con la recolección de alimento y preparan sus espacios de hibernación, incluso algunas aves migran ...")
    estacion="Otoño"
    horarioVerano=true;
}else{
    console.log("Estamos en INVIERNO...")
    console.log("En esta temporada los días son más cortos y las noches mas largas...")
    console.log("En algunas regiones suele nevar...")
    console.log("Dado las bajas temperaturas, se recomiebnda abrigarse ...")
    estacion="Invierno"
    horarioVerano=false;
}

console.log("%c2.- Operador Ternario (Validacion? cumple:no_cumple)",  style_console);
//JavaScript exista una operacion simplificada que valida si una condición se cumple o no, y que hacer en cada caso

let edadPersona=18;
const mayoriaEdadMX=18;
const mayoriaEdadUS=21;

let evaluarMayoriaEdad=(edad)=>
    edad>=18 ? "Eres mayor de edad.": "No eres mayor de edad."
console.log("Evaluando la mayoría de edad de una persona...")
console.log(evaluarMayoriaEdad(edadPersona));

// Sin embargo tenemos que considerar que la mayoria de edad varía en cada país por cuestiones legales, por lo que debemos considerar un segundo parámetro en la evaluación

evaluarMayoriaEdad=(edad,pais)=>
    (edad>=18&& pais==="MX")? `En ${pais} eres mayor de edad`: `En ${pais} NO eres mayor de edad`
console.log("Evaluando la mayoría de edad de una persona en México...")
console.log(evaluarMayoriaEdad(edadPersona,"MX"));
console.log("Evaluando la mayoría de edad de una persona en Estados Unidos...")
console.log(evaluarMayoriaEdad(edadPersona,"US"));

console.log("%c3.-SWITCH - CASE (Elección por valor definido)",style_console);

//calculando tu generacion en base a tu edad
let anioNacimiento = 2003;
let generacion;

switch (true) {
    case (anioNacimiento < 1968):
        generacion = "Baby Boomers";
        break;
    case (anioNacimiento >= 1968 && anioNacimiento <= 1980):
        generacion = "Generación X";
        break;
    case (anioNacimiento >= 1981 && anioNacimiento <= 1993):
        generacion = "Millennials";
        break;
    case (anioNacimiento >= 1994 && anioNacimiento <= 2010):
        generacion = "Generación Z";
        break;
    default:
        generacion = "Generación Alpha"; 
}
console.log(generacion);



