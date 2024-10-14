//Repaso de Ciclos y Sentencias de Control

//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, #28a745 0%, #1e7d32 33%, #218838 86%)";
const style_console = `background-image: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1rem; font-weight: bold; background-size: cover;`;



//Personalizacion de salida de consola
console.warn("Practica 07: Ciclos y Sentencias de Control en Java Script");


console.log("%c1.- Condicionales - Si/Entonces ... (IF)",  style_console);
//Le indica al programa que hacer o que no hacer en base a una prueba de lógica de verdadero o falso.
let fechaActual = new Date();
/*let fechaActual = new Date("2024/6/5");//Cuando se declara una fecha el 0 será enero*/
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

//¡Y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleString('es-MX',
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    }
);
console.log(`En formato local (México): ${fechaLocalMX}`);

//Si es antes de las doce saluda con un "Buenos días"

if(fechaActual.getHours()<12)//Si solo tiene una instrucción no es necesario colocar llaves
    console.log(`Buenos días, hoy es: ${fechaLocalMX}`);

    //Existe unextensor de la sentencia if(sí) que es else (en caso contrario)
    if(fechaActual.getMonth()<=6)
        console.log(`Estas en la primera mitad del año.`);
    else
    console.log(`Estas en la segunda mitad del año.`)


// Que pasa si la validación tiene varias operaciones

const anio = fechaActual.getFullYear();

let inicioPrimavera = new Date(anio,2,21);
let inicioVerano = new Date(anio,5,21);
let inicioOtonio = new Date(anio,8,23);
let inicioInvierno = new Date(anio,11,21);
let estacion;
let horarioVerano=false;
if(fechaActual >=inicioPrimavera && fechaActual< inicioVerano)
    {
        console.log("Estamos en PRIMAVERA...")
        console.log("Inicia la floraciòn de muchas plantas.")
        console.log("Los días son más largos y las noches más cortas.")
        console.log("Muchos animales despiertan de la hibernación.")
        estacion="Primavera"
        horarioVerano=true;
    }
    else if(fechaActual >= inicioVerano && fechaActual< inicioOtonio)
    {
        console.log("Estamos en VERANO...")
        console.log("En esta temporada abundan los días soleados y calurosos.")
        console.log("En esta temporada el indicé de turismo vacacional sube.")
        console.log("Mucha gente busca realizar acitividades al aire.")
        estacion="Verano"
        horarioVerano=true;
    }
    else if(fechaActual >= inicioOtonio && fechaActual< inicioInvierno)
        {
            console.log("Estamos en OTOÑO...")
            console.log("Los árboles suelen cambiar el follaje.")
            console.log("Se registrarán temperaturas más templadas.")
            console.log("Los animales comienzan con la recolecciòn de alimento y preparan sus espacios para la hibernación, incluso algunas aves migran.")
            estacion="Otorño"
            horarioVerano=true;
        }
    else{
        
        console.log("Estamos en IVIERNO...")
        console.log("En esta temporada abundan los días son más cortos y las noches màs largas.")
        console.log("En algunas regiones suele nevar.")
        console.log("Dado a las bajas temperaturas, se recomienda abrigarse.")
        estacion="Invierno"
         horarioVerano=true;
           
    }
    
    console.log("%c2.- Operador Ternario (Validación?cumple:no_cumple)",  style_console);
    //En Java Script existe una operación simplificada que valida si una condición se cumple o no, y que hacer en cada caso
    
    const edadPersona = 18;
    const mayoriaEdadMX = 18;
    const mayoriaEdadUS = 21;
    
    let evaluarMayoriaEdad = (edad) =>
        edad>=18 ? "Eres mayor de edad." : "No eres mayor de edad."
    
    console.log("Evaluando la mayoria de edad de una persona...")
    console.log(evaluarMayoriaEdad(edadPersona));
    
    //Sin embargo tenemos que considerar que la mayoria de edad varia en cada país por cuestiones legales, por lo que debemos considerar un segundo paràmetro en la evaluaciòn.
    
    evaluarMayoriaEdad=(edad,pais) =>
        (edad>=18 && pais==="MX") ?`En ${pais} eres mayor de edad` : `En ${pais} No eres mayor de edad`;
    console.log("Evaluando la mayoria de edad de una persona en Mèxico.")
    console.log(evaluarMayoriaEdad(edadPersona, "MX"));
    
    console.log("Evaluando la mayoria de edad de una persona en Esatdos Unidos.")
    console.log(evaluarMayoriaEdad(edadPersona, "US"));
    

    console.log("%c3.- SWITCH - CASE (Elección por valor definido))",  style_console);
    
    //Calcualndo tu generaciòn en base a tu edad
    let anioNacimiento = 2000;
    let asignaGeneracion= (anioNacimiento)=>{
    
    switch(true)
    {
        case (anioNacimiento<1968): //Baby Boomers
        return "Baby Boomers";
    
        case(anioNacimiento>1968 && anioNacimiento <=1980):
        return "Generación X";
    
        case(anioNacimiento>1981 && anioNacimiento<=1993):
        return "Millennials";
    
        case(anioNacimiento>1994 && anioNacimiento<=2010):
        return "Generación Z";
        
        case(anioNacimiento>2011 && anioNacimiento<=2024):
        return "Cristalitos";
        }
    }
    
    console.log(`Dado que nació en el año 2000 es de la generación : ${asignaGeneracion(2000)}`);
    console.log("%c4.- Manejo de Excepciones (TRY / CATCH)",  style_console);
//En algunas ocaciones existiran errores que no son culpa del programa, si no del usuario, la red, el solo incluso de un MIDDLEWARE, pero que sin duda demenos controlar para evitar las fallas de ejecución-

console.log("Lo intentamos dividir: 0/10, el resultado es:")

// El try no interrumpe la ejecuciòn del programa, pero no puede eliminarse el catch


try{ //intenta
    let result = 0/10;  //dividir un entero entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Lo intentamos dividir: 10/0, el resultado es:")

try{ //intenta
    let result = 10/0;  //dividir 0 entre un entero
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Lo intentamos dividir: a/10, el resultado es:")

try{ //intenta
    let result = "a"/0;  //dividir una letra entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Lo intentamos dividir: la variable a/10, el resultado es:")

try{ //intenta
    let result = a/0;  //dividir una variable entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Lo intentamos dividir: el valor de la variable x/ entre el valor de la variable y, el resultado es:")

try{ //intenta
    let x=8, y=2,result = x/y;  //dividir una variable entre otra variable
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("%c5.- Control de Ciclos (BREAK / CONTINUE)",  style_console);

//En algunas ocaciones será importante detener un ciclo de manera abrupta para controlar casos especiales en un ciclo..

console.log("Vamos a contar del 1 al 10...")
for(let num = 1; num <= 10; num++)
    console.log(num);

console.log("Ahora necesitamos que si llegas a 7 pares de contar... suponiendo que solo por hoy es de mala suerte....")
for(num = 1; num <= 10; num++)
    if(num==7)
        break; //Deja de hacer lo que esta haciendo y para todo
    else
    console.log(num);

    console.log("Ahora necesitamos que si llegas a 7 te saltes ese numero y continues....")
    for(num = 1; num <= 10; num++){
        if(num==7){
            continue;}
        console.log(num);
}
