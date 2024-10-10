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

console.log("%c3.- SWITCH - CASE (Elección por valor definido) ",style_console);

// Calculando tu generación en base a tu edad

let anioNacimiento= 2003;
let asignGeneration = (anioNacimiento)=>{

switch (true){
  case (anioNacimiento>1968): 
  return "Baby Boomers";

  case (anioNacimiento>1968 && anioNacimiento<=1980): 
  return "Generación X";

  case (anioNacimiento>1981 && anioNacimiento<=1993): 
  return "Millenials";

  case (anioNacimiento>1994 && anioNacimiento<=2010): 
  return "Generación Z";

  case (anioNacimiento>2010 ): 
  return "Cristalitos";
}
}
console.log(`Dado que nació en el año 2005 soy de la generación: ${asignGeneration(2005)}`)

console.log("%c4.-Manejo de Excepciones (TRY/ CATCH) ",style_console);
//En algunas pcaciones existiran errores que no son culpa del programa ,si no del usuario, la red, el SO o incluso de un middleware, pero que si duda debemos controlar para evitar las fallas de ejecución
console.log("Intentamos dividir : 0/100, el resultado es:")
try{ //intenta 
    let result=0/100;  //dividir un netero entre 0
    console.log(result)
}
catch(error){
    console.log("Ocurrio un error :"+ error.message)
}

console.log("Intentamos dividir : 0/10, el resultado es:")
try{ //intenta 
    let result=10/0;  //dividir un netero entre 0
    console.log(result)
}
catch(error){
    console.log("Ocurrio un error :"+ error.message)
}

console.log("Intentamos dividir : a/10, el resultado es:")
try{ //intenta 
    let result="a"/0;  //dividir un netero entre 0
    console.log(result)
}
catch(error){
    console.log("Ocurrio un error :"+ error.message)
}

console.log("Intentamos dividir la variable a/10, el resultado es:")
try{ //intenta 
    let result=a/0;  //dividir un netero entre 0
    console.log(result)
}
catch(error){
    console.log("Ocurrio un error :"+ error.message)
}

console.log("Intentamos dividir el valor de la variable x entre el valor de la variable y, el resultado es:")
try{ //intenta 
    let x=8,y=2,result=x/y;  //dividir un netero entre 0
    console.log(result)
}
catch(error){
    console.log("Ocurrio un error :"+ error.message)
}

console.log("%c5.- Control de Ciclos (BREAK/ CONTINUA)",style_console);

//En algunas ocaciones será importante detener un cliclo de manera abrupta para controlar casos especiales en un ciclo.....

console.log("Vamos a contar del 1 al 10....")
for(let num=1;num<=10;num++){
    console.log(num)
}
console.log("Ahora necesitamos que si llega al 7 pare de contar... suponiendo que solo por hoy es de mala suerte")
for( num=1;num<=10;num++){
    if (num==7)
        break;
    console.log(num)
}

console.log("Ahora necesitamos que si llega al 7 salte ese numero y continue")
for( num=1;num<=10;num++){
    if (num==7)
        continue;
    console.log(num)
}

console.log("%c6.- Ciclo Iterativo (FOR) ",style_console);
//Recorre de manera iterativa (i), de manera incremental o decremental

console.log("Los días de la semana son:")
let dias =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
for(let i=0;i<=dias.length;i++){
    console.log(dias[i])
}
console.log("Ahora vamos a imprimir los meses en orden descendente...")
const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
for (let i=11;i >=0; i--){
    console.log(meses[i])
}

console.log("%c7.- Ciclo Condicionales -(WHILE)",style_console);
//Estos ciclos (BUCKLE) dependen de una condición para continuar ejecutandose



let finDeSemana = false;
let mensaje = "";
let j = 0;

while (j < dias.length ) {
    switch (j) {
        case 0:
            finDeSemana = true;
            mensaje = "Mormingooooo... zzzzZZZZzzz";
            break;
        case 1:
            finDeSemana = false;
            mensaje = "San Lunes a chambiar";
            break;
        case 2:
            finDeSemana = false;
            mensaje = "Segundo dia de chamba a darle...";
            break;
        case 3:
            finDeSemana = false;
            mensaje = "Ombligo de semana !!....";
            break;
        case 4:
            finDeSemana = false;
            mensaje = "Es juebebes oh si oh si";
            break;
        case 5:
            finDeSemana = false;
            mensaje = "Es hoooy... es HOOOOOOOOOOOOOOOOOOOOY";
            break;
        case 6:
            finDeSemana = true;
            mensaje = "Sabadrink ☆*: .｡. o(≧▽≦)o .｡.:*☆";
            break;
    }
    if(!finDeSemana){
    console.log(`Dia ${j} ${dias[j]}`);
    console.log(`Mensaje del dia: ${mensaje}`);
    }
    j++;
}