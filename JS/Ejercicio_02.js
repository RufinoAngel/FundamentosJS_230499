// Tipos de Datos en JS
//1. Undefined    - (null)
console.warn("--- Tipo de Dato UNDEFIEND")
let cliente;
console.log (`El cliente es : ${cliente}`);
console.log (`El tipo de dato de la variable cliente es : ${typeof(cliente)}`);

cliente="Juan Romero ";
console.log (`El cliente es : ${cliente}`);
console.log (`El tipo de dato de la variable cliente es : ${typeof(cliente)}`);

cliente=19227;
console.log (`El cliente es : ${cliente}`);
console.log (`El tipo de dato de la variable cliente es : ${typeof(cliente)}`);

//undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas.

//2. BOOLEAN - Boleanos - TRUE/FALSE  (Falso/verdadero)
console.warn("--- Tipo de Dato : BOOLEAN (boleano - true/false")
let esPremium = "No lo sé";
console.log(`¿Es el cliente Premium? : ${esPremium}`)
console.log (`El tipo de dato de la variable esPremium es : ${typeof(esPremium)}`);

console.log("Asignando el valor \"True\" a la variable .")
esPremium="true"
console.log (`El tipo de dato de la variable esPremium es : ${typeof(esPremium)}`);

console.log("Asignando el valor \"True\" a la variable .")
esPremium=true
console.log (`El tipo de dato de la variable esPremium es : ${typeof(esPremium)}`);

console.log(`¿Es el cliente Premium? : ${esPremium}`)
console.log ("Cambiando el valor de esPremium a false")
esPremium=0;

if (esPremium)
    console.log("El cliente pago por usar el servicio");
else
    console.log("El cliente recibe los servicios gratuitos");

//3. Number  (Numeros)
var cantidad;
const costo_producto=10.50;
let saldo_cuenta = -2500.40;
let monto_transaccion;

console.warn("--- Tipo de Dato - Number (Números, positivos, negativos,decimales, flotantes)")
console.log(`Tu saldo al día de hoy es de : ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`)
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad=8;
console.log(`Has elegido comprar: ${cantidad} de productos`)
console.log(`El importe total de la compra es: ${(cantidad*costo_producto)}`)
saldo_cuenta=saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
// El cliente realiza un abono de 1500
monto_transaccion=1500
console.log(`Tu abono es de : ${monto_transaccion} ha recibido, tu nuevo saldo de : ${(saldo_cuenta+monto_transaccion)} `)