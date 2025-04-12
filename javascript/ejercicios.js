const { json } = require("body-parser");

console.log(eval(new String("2 + 2"))); //devuelve un objeto String que contiene 2 + 2 
console.log('\n');
console.log(eval("2 + 2"));    // devuelve 4 

var nombre = "Hola mundo";
console.log(nombre);

var variable = "nombre";

let nombre2;
nombre2 = "Camilo"

const apellido = "Rocha";

console.log(apellido, nombre2);

let nombrecompleto2 ="Sebastian Vanegas";

let nombreCompleto2 = "Camilo Rocha";

console.log(nombreCompleto2);
console.log(nombrecompleto2);


let_1654  = "carro";

console.log(let_1654);

let $Juan = "Juan";

console.log($Juan);

let a1677 = "matricula";

console.log(a1677);

let x, y;
x = 6;
y  = 4;
console.log(x, y);

var bandera = true;

console.log(bandera);

 var z = undefined;

 console.log(z);

 var objeto = {
    nombre: "Esteban",
    apellido : "Diaz",
    telefono : 3168248282
 }

 console.log(objeto.nombre, objeto.apellido, objeto.telefono);
//////////////////////////////////////////////////////////////////////////////////////////////////////
var autos = ['BMW','Audi','Volvo']
console.log(autos[1])
console.log(autos[4])
class persona{
    constructor(nombre, apellido){
        this.nombre=nombre
        this.apellido=apellido
    }
}
z = x+y;
console.log(z)
z = x-y;
console.log(z)
z = x*y;
console.log(z)
z = x/y;
console.log(z)
z = x%y;
console.log(z)
z = x**y;
console.log(z)

let i=0
console.log(++i)
let j =0 
console.log(j++)
console.log(j++)
console.log(j++)
/////////////////////////////////////////////////////////////////////////////////////////////////////
k=3
console.log(--k)
l=3 
console.log(l--)
console.log(l--)
console.log(l--)

let t 
console.log(t)
t=1
t+=3
console.log(t)
t=1
t-=3
console.log(t)
t=1
t*=3
console.log(t)
t=1
t/=3
console.log(t)
t=1
t%=3
console.log(t)
t=1
t**=3
console.log(t)
// === comparacion estricta revisa valor y tipo
let a1,b1,c1,d1
a1=3
b1=2
c1="3"
d1=3
console.log(a1==c1)
console.log(a1==d1)
console.log(a1===c1)
console.log(a1===d1)
console.log(a1!==c1)
console.log(a1!=c1)
console.log(a1!=b1)

let persona1 ={
    nombre: "Felipe",
    apellido : "Prieto",
    telefono : 3025701719,
    email:"pipegallo04@gmail.com",
    edad:21,
    nombreCompleto:function (){return this.nombre + " "+this.apellido}
}
console.log(persona1["edad"])

let persona2 =new Object()
persona2.nombre="jhon"
persona2.apellido="borda"
persona2

let persona3 ={
    nombre: "Camilo",
    apellido : "Rocha",
    telefono : 3057359505,
    email:"cerocha@udistrital.edu.co",
    edad:25,
    nombreCompleto:function (){return (this.nombre + " "+this.apellido)}
}
console.log(persona1["nombreCompleto"]())
for (nombrePropiedad in persona1){
    console.log(nombrePropiedad)
    console.log(persona1[nombrePropiedad])
}
persona1.tel=1234567
console.log(persona1)
for (nombrePropiedad in persona1){
    console.log(nombrePropiedad)
    console.log(persona1[nombrePropiedad])
}
let personaString=JSON.stringify(persona1)
console.log(personaString)

function Persona (nombre='juan',apellido,email){
    this.nombre=nombre
    this.apellido=apellido
    this.email=email
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido
    }
}

let padre = new Persona('Felipe','Prieto','pipegallo04@gmail.com')
console.log(padre)
let padre2 = new Persona()
console.log(padre2)