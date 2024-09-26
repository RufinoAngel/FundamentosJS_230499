//Repaso de objetos
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las salidas de la Consola
console.warn("Practica 05: Repaso de Objetos en Java Script");



//VARIABLES INDEPENDIENTS
console.log("%c1.- Variables Independientes",  style_console);

//Declaramos valores independientes relacionados a un PRODUCTO

let Producto_Nombre="Computadora Gammer Laptop 17\"";
let Producto_Marca="ASUS";
let Producto_Modelo= "TUF 17";
let Producto_Precio= 15749.50;
let Producto_Disponibilidad=" true";
let Producto_SKU=Symbol("TUF707VV-HX221W");
let Producto_Stock= 15;
let Producto_Imagen=null;
let Producto_Barcode;
let Producto_Categorias= ["Electronicos", "Computación","Gamming","Promoción Buen Fin","Mejor Valorados"];


//Accedemos a los valores de las caracteristicas del producto de manera independiente 

console.log(`Los datos del PRODUCTO son: \n
    Nombre: ${Producto_Nombre},Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca},Tipo de Dato <${typeof(Producto_Modelo)}>
    Modelo: ${Producto_Modelo},Tipo de Dato <${typeof(Producto_Marca)}>
    Precio: ${Producto_Precio},Tipo de Dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad},Tipo de Dato <${typeof(Producto_Disponibilidad)}>
    Stock:${Producto_Stock},Tipo de Dato <${typeof(Producto_Stock)}> 
    Barcode: ${Producto_Barcode},Tipo de Dato <${typeof(Producto_Barcode)}>
    Imagen:${Producto_Imagen},Tipo de Dato <${typeof(Producto_Imagen)}>
    Categorias:${Producto_Categorias},Tipo de Dato <${typeof(Producto_Categorias)}>`);

    console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior");
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));

    console.log("%c2.- Objetos",  style_console);
// Ahora lo declaramos como un OBJETO
let Producto =
{
    ID:3216,
    Nombre:"Tenis Deportivos",
    Marca:"Nike",
    Modelo:"Jordan `24",
    precio:"3361.25",
    Disponibilidad: false,
    Stock:0,
    SKU:"DZ5485-612",
    Imagen:"../assets/products/sneakers/Jordan.png",
    Barcode:null,
    Categorias:["Deportes", "Juvenil"]
}

//Ahora leemos el Objeto

console.table(Producto );

// Para acceder a las prioridades del objeto utilizamos un "." y el nombre de la propiedad a leer
console.log("Accediendo a prioridades especificas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.precio}`)
if(Producto.Disponibilidad==0)
console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto.Stock} unidades disponibles`)

let Producto2 =
{
    Clave:3312,
    Nombre:"Lentes para Sol",
    Marca:"Oakley",
    Modelo:"QNTM Kato",
    precio:"6829.00",
    Disponibilidad: true,
    Stock:5,
    SKU:"00948D-0356",
    Imagen:"../assets/products/sunglasses/KatoRed.png",
    Barcode:888392491626,
    Categorias:["Deportes", "Lentes" , "Hombre" , "Accesorios"] 
}

let Comprador ={
    Clave:455,
    tipo:"Frecuente",
    nombre:"Angel",
    Apellidos:"Rufino Mendoza ",
    correo:"angelrufino87@gmail.com",
    PaisOrigen:"México",
    saldoActual:40000.00
}

let Pedido ={
    //ID:15,
    Producto_Clave:3312,
    Comprador_Clave:455,
    Cantidad:2,
    Estatus:"Carrito de Compra",
    TipoPago: "Tarjeta de Credito"
}

//En Base a los 3 objetos necesitamos  el costo de la compra y si le alcanza con sus saldo a favor
let {Precio:Producto_Precio2}=Producto2;
let {Cantidad:Pedido_Cantidad}=Pedido;
let {saldoActual:Cliente_SaldoActual} = Comprador;
let Costo_Compra =Producto_Precio * Pedido_Cantidad;


console.log("%c3.-Destructuración de Objetos ",  style_console);

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: ${Costo_Compra} `)

if(Costo_Compra<Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente ")
else 
 console.log("No cuenta con saldo suficiente")



 console.log("%c4.-Actualización de los valores de las propiedades de UN OBJETO.",  style_console);

console.log(`El objeto actualmente tiene los siguientes valores `)
console.log(JSON.stringify(Producto2,null,2))
console.log(`Por cuestiones de inflación el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a 6,915.00`)
// Para Modificar el valor de un objeto basta con igualar el nuevo valor de la propiedad deseada.
Producto2.precio=6915.50;
console.log(`Los nuevos valores Son`)
console.log(Producto2);

// ¿Puedo cambiar no solo el valor , sino el tipo de dato de un objeto en JavaScript?

console.log("----------------------------------------------------")
console.log(`El objeto actualmente tiene los siguientes valores `)
let tipoDispo = typeof(Producto2.Disponibilidad)
console.log(`El tipo de dato de la Disponibilidad es : ${tipoDispo}`)
console.log(JSON.stringify(Producto2,null,2));
Producto2.Disponibilidad="Si";
let nuevoTipoDispo= typeof(Producto2.Disponibilidad)
console.log(Producto2)
console.log(`El nuevo tipo de dato de la disponibilidad es : ${nuevoTipoDispo}`)

// Agregar nuevas propiedades al objeto
console.log("%c5.-Agregar nuevas propiedades al Objeto.",  style_console);
// Para agregar una nueva propiedad utilizaremos el nombre del objeto los corchetes [] y el nuevo de la propiedad con su valor por defecrto
console.log("Los datos actuales del Comprador son: ")
console.table(Comprador)
Comprador[`Direccion`]= "AV. Benito Juárez No. 1525, Interior 4D, Xicotepec de Juárez, Pueba ,México"
Comprador[`Tipo`]= "Nuevo Cliente"
Comprador[`ActividadReciente`]= true
Comprador[`TotalCompras`]=3516.25
console.log("Despues de haber agregado las propiedades Dirección, Tipo, ActividadReciente y TotalCompras....")
console.table(Comprador)

// Eliminar propiedades existentes de un Objeto
console.log("%c6.-Eliminar propiedades existentes de un Objeto.",  style_console);
console.log("La estructura y valores del objeto PEDIDO son previos a la modificación ")
console.table(Pedido)
delete Pedido.TipoPago
console.group("Despues de la modificación")
console.table(Pedido)

console.log("%c7.-Metodos para controlar la mutabilidad de los Objetos, Congelación (FREEZE).",  style_console);
// Si deseamos no permitir que los objetos sean modificados ni en estructura, ni valor, utilizaremos el metodo FREEZE (congelar)
console.log(`La estructura actual del OBJETO comprador es: `)
console.table(Comprador);
Object.freeze(Comprador)
// Intentamos agregar, eliminar o modificar los valores de sus propiedades 
Comprador.FechaUltimaCompra = "05/09/2024"
delete Comprador.tipo;
Comprador.Direccion="Calle 16 de Septiembre #102. col. Manantiales , Huauchinango,Puebla , México";
console.log(`Verificar si se realizaron los cambios en el objeto COMPRADOR:`)
console.table(Comprador);

console.log("%c8.-Métodos para controlar la mutabilidad de los Objetos , sellando (SEAL).",  style_console);
// Sin embargo, en el caso que deseamos poder modificar los valores de las propiedades del Objeto ,pero no su estructura, usaremos SEAL
console.log("Onjetos antes de ser modificado :")
console.table(Pedido);
//sellamos el Objeto
Object.seal(Pedido);
// Intentamos modificar su estructura 
Pedido['FechaPedido']= "25/09/2024 11:05:03"
delete Pedido['Cantidad']
console.log('Verificamos si se realizaron los cambios en el Objeto PEDIDO:')
console.table(Pedido)

// Ahora intentamos modificar el valor de ls propiedades
Pedido.Cantidad=5
console.log('Verificamos si se realizaron los cambios en el OBJETO PEDIDO:')


console.log("%c9.-Desestructuración de 2 o más Objetos.",  style_console);

let{Precio:ProductoPrecio, Marca:ProductoMarca}= Producto;
let{correo: clienteCorreo, PaisOrigen:clientePais, saldoActual:ClienteSaldo,Tipo: clienteTipo}= Comprador;

//Transformar valores cuantitativos a cualitativos 
if(ProductoPrecio>2000)
    ProductoPrecio="Caro"
else 
    ProductoPrecio="Barato"

if(ClienteSaldo >0)
    ClienteSaldo="A favor "
else if(ClienteSaldo<0)
    ClienteSaldo="En contra"
else
ClienteSaldo="Sin deuda"
// Transformar valores cualitativos en cuantitativos
let clienteNivel;
if (clienteTipo=="Premium")
    clienteNivel=1
if (clienteTipo=="Freemium")
    clienteNivel=2
if (clienteTipo=="No identificado")
    clienteNivel=3

// Clasificamos al cliente por su País de Origen
if (clientePais=="México")
    clientePais="Nacional"
else
 clientePais="Extranjero"
 
 //OLE - OBJECT LITERAL ENHACEMENT
 
 let datosClientePromociones={clienteCorreo,clientePais,clienteNivel,ClienteSaldo,ProductoMarca,ProductoPrecio}

 // El nuevo objeto que creamos sería un ejemplo de la información que enviaremos al área de Marketing para la difusión de promociones
 console.log("Los datos del cliente y sus habitos de compra son: ")
 console.table(datosClientePromociones)

 console.log("%c10.-Unión de Objetos usando el metodo de asignación (ASSING).",  style_console);
console.log("Imprimimos la estructura y valores de Objeto PRODUCTO")
console.table(Producto);

console.log("Imprimimos la estructura y valores del Objeto PEDIDO")
console.table(Pedido);
//Suponiendo que el usuario ya realizó el pago del pedido se convertira en una VENTA que requiere información de ambos objetos 
const Venta = Object.assign(Producto,Pedido);
console.log("Consultamos este nuevo objeto Venta ")
console.table(Venta);


