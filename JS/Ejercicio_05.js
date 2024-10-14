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

console.log("%c6.- Ciclo Interactivo - (FOR)",  style_console);

//Recorre de manera interativa (i), de incremental a decremental

console.log("Los días de la semana en orden asecendente son: ")
let dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]

for(let i=0; i<dias.length; i++)
    console.log(dias[i])

console.log("Ahora vamos a imprimir los meses en orden descendente...")
const  meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
for(let i=11; i>=0; i--)
    console.log(meses[i])

console.log("%c7.- Ciclo Condicionales -(WHILE)",style_console);
//Estos ciclos (BUCKLE) dependen de una condición para continuar ejecutandose
let finDeSemana = false;
let mensaje = "";
let j = 0;
while (j < dias.length ) {
    switch (j) {
        case 0:
            finDeSemana = true;
            mensaje = "Mormingooooo... (_　_)。゜zｚＺ";
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
            mensaje = "Es hoooy... es HOOOOOOOOOOOOOOOOOOOOY ( •̀ ω •́ )✧";
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

console.log("%c8.- Ciclo Condicionales, que se ejecuta al menos una vez -(DO WHILE)",style_console);

//Simulamos una lista de episodios de una temporada
let episodios = [
    "Episodio 1: El Comienzo",
        "Episodio 2: El Libro",
            "Episodio 3: Tiempos Difíciles",
                "Episodio 4: Diversión el Sabado por la Mañana",
                    "Episodio 5: La opción para el Armagedón"
];

let indice = 0;
let continuarviendo = true; //Esta variable simula la desición del usuario de continuar viendo
do{
    console.log(`Reproduciendo ${episodios[indice]}`);

    //simulamos la reproducción del episodio
    indice++;

    //Simulamos una pregunta al usuario si desea continuar viendo
    if(indice < episodios.length){
        continuarviendo = confirm("¿Deseas continuar con el siguiente episodio?");
    }else{
        continuarviendo = false; //Cuando se acaba la lista de episodios
    }
}while(continuarviendo && indice < episodios.length);

console.log("Fin de la reproducción");

//Ciclo para recorer objetos iterables cómo mapas, arreglos, cadenas y conjuntos de datos
console.log("%c9.- Ciclos para recorrer elementos finitos  -(FOR ... OF)",style_console);
//Se crea un arreglo de las series
let seriesTrending=[
    {nombre: "The Witcher", temporadas: 3, totalViwers:"1.5M", totalReprods: "3.0M"},
    {nombre: "Good Omens", temporadas: 2, totalViwers:"6.5M", totalReprods: "10M"},
    {nombre: "The Boys", temporadas: 3, totalViwers:"3.2M"},
    {nombre: "Loki", temporadas: 2, totalReprods: "250K"},
    {nombre: "Sucession", temporadas: 4}
];

//Usando FOR .. OF para recorrer la lista
for(let serie of seriesTrending){
    console.log(`Serie: ${serie.nombre}, Temporadas: ${serie.temporadas}`);
}

try{
    console.log(`La última serie leida fué ${serie.nombre}`) //No va a fusionar por la variable serie ya no existe ya que su alcance solo estuvo durante el ciclo
}
catch(error){
console.log("Mensaje de error: "+error.message)
}

console.log("%c10.- Ciclos para recorrer las propiedades de elementos finitos  -(FOR ... IN)",style_console);

//Usando FOR ... IN para recorrer cada serie
for(let i in seriesTrending){
    console.log(`Serie ${parseInt(i)+1}:`);
    for(let propiedad in seriesTrending[i]){
        console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`);
    }
    console.log(`--------------------`);
}

console.log("%c11.- Ciclos Interrumpidos para cada uno de los elementos del arreglo -(FOR ... EACH)",style_console);

//La lista de series de TV tending con temporadas, viwers y reproducciones
let seriesTrending2 = [
    {nombre: "The Witcher", temporadas: 3, viwers:8000000, Reproduccioness: 2500000},
    {nombre: "Good Omens", temporadas: 2, viwers: 120000000, Reproducciones: 400000000},
    {nombre: "The Boys", temporadas: 3, viwers: 70000000, Reproducciones: 25000000},
    {nombre: "Loki", temporadas: 2, viwers: 900000, Reproducciones: 30000000},
    {nombre: "Sucession", temporadas: 4, viwers: 60000000, Reproducciones:18000000},
    {nombre: "The Walking Dead", temporadas: 16, viwers: 16000000, Reproducciones:36000000}
];

//usando forEach para recorrer cada serie y calcular la calificación
seriesTrending2.forEach((serie,index)=>{
    let calificacion = (serie.Reproducciones / serie.viwers).toFixed(2); //Calcula la calificación y la redondea a 2 decimales
    console.log(`Serie: ${index + 1}:`);
    console.log(`Nombre: ${serie.nombre}:`);
    console.log(`Temporadas: ${serie.temporadas}:`);
    console.log(`Viewers: ${serie.viwers}:`);
    console.log(`Reproducciones: ${serie.Reproducciones}:`);
    console.log(`Calificación: ${calificacion}:`); //Muestra la califiación
    console.log(`---------------`);
});


console.log("%c12.- Ciclos para Filtrar y para Transformar -(FILTER ... MAP)",style_console);
//Usando Filter para filtrar, y map para transformar la información
//Lista de series que queremos verifcar
let seriesDeseadas = ["The Walking Dead", "The Boys","Loki"];

//Usando map e includes para filtrar y obtener los nombres de series con 3 Temporadas
let seriesConTresTemporadas = seriesTrending2
.filter(serie=> serie.temporadas <=3)// Filtramos las series que tienen 3 Temporadas
.map(serie =>serie.nombre) //Obtenemos solo los nombres de estas Series
.filter(nombre =>seriesDeseadas.includes(nombre));// Filtramos las que están en la lista de series deseadas

//Mostrar los resultados
console.log("Series con 3 temporadas que están en la lista deseada");
console.table(seriesConTresTemporadas);