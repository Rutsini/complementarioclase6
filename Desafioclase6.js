let ingreso = prompt("¿Quiere realizar una compra? \nsi\nno");

if(ingreso == "no"){
  alert("No lo podemos ayudar en otra cosa");
  ingreso = prompt("¿Quiere realizar una compra? \nsi\nno");
}else if(ingreso == "si"){
  alert("Bienvenido");
}else if(ingreso = " "){
  alert("Ingrese un valor valido")
}

const listaDePrecios = [
  {producto: "cocacola", precio: 200 },
  {producto: "fideos" , precio: 80},
  {producto: "lentejas" , precio: 70 },
  {producto: "milanesas" , precio: 150 },
  {producto: "sal" , precio: 40 },
  {producto: "galletas" , precio: 90 },
  {producto: "agua" , precio: 60 },
  {producto: "jamon" , precio: 120 },
  {producto: "sanguche de miga" , precio: 80 },
  {producto: "manteca" , precio: 150 },
];

let precioTotal = 0;

const carrito = [];

let cantidad = parseInt(prompt("¿Cuantos Productos desea comprar?\n(Entre 1 y 10 productos por carrito"));

while(cantidad < 1 ){
  alert ("El valor ingresado es invalido");
  cantidad = parseInt(prompt("¿Cuantos Productos desea comprar?"));
}while(cantidad > 10){
  alert("El valor ingresado es invalido");
  cantidad = parseInt(prompt("¿Cuantos Productos desea comprar?"));
}
alert("Ingrese los productos que quiera comprar");

do{
  let entrada = prompt("Ingresar el producto que queiras que aparezca en la lista: \nmanteca\nsanguche de miga\njamon\nagua\nsal\ncocacola\nfideos\nlentejas\nmilanesas\ngalletas");
  
  let indentificarProducto = listaDePrecios.find ( elem => elem.producto === entrada);
  
  console.log(indentificarProducto);
  precioTotal += indentificarProducto.precio

  carrito.push(entrada.toUpperCase());
  console.log(carrito.lenght);
  
}while(carrito.length != cantidad);

const carritoCompleto = carrito.concat(["Precio a pagar: " + "$ " + precioTotal]);
  alert(carritoCompleto.join("\n"));

let domicilioComprador = prompt("Ingrese su domicilio");

let formaDePago = prompt ("¿Como realizara el pago? \n Ingrese el numero de la operación" + "\n1-Efectivo\n2-transferencia");

switch(formaDePago){
  case "1" :
    alert("En unos minutos llegaran los productos a " + domicilioComprador + " y debera pagar al repartidor" + precioTotal);
    break;
  case "2" :
    alert("Luego de que recibamos el pago, le mandaremos al repartidor a " + domicilioComprador);
    break;
}

alert("Gracias por realizar su compra");







