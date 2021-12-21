const btn1 = document.getElementById("hola")
const btn2 = document.getElementById("chao")



//* vamos a pasar la funcion de callback desde afuera 
const sayHi =()=> {
    alert("hola")
}

//al pasar una funcion como callback, tiene que ir sin parentesis, o va a ejecutarla inmediatamente no con el evento click
btn1.addEventListener("click", sayHi )

//! esta función es equivalente a esto
//btn1.addEventListener("click", ()=> alert("hola"))

//* podemos pasarla con los parentesis, pero para eso tenemos que hacer esto

const cb =()=>{
    console.log("chau")
}

const amdate = (cosa) =>{
    cosa() //ahora esto es un parametro, entonces podria pasarle cualquier función 
}

const fn3 = (fn) =>{
    setTimeout(() => {
        console.log("soy la primera")
        fn()
    }, 1000);
}

const fn4 = (fn) =>{
    console.log("soy el segundo")
}
