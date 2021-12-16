const form = document.getElementById("form");
const username = document.getElementById("username");
const wand = document.getElementById("wand");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const password2 = document.getElementById("pass2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("nope");
  validate()
});

//vamos a llamar cada validación en una sola función:

const validate = () => {
  console.log("validate");
  //tenemos un problema los espacios, los toma como caracteres, para evitar eso usamos una funcion llamada trim, va a quitar los espacios del inicio y el final
  const user = username.value.trim();

  //vamos a hacer las comprobaciones
  if (user === "") {
      let errorMessage = "el user no puede estar vacio"
    inputError(username, errorMessage)
  } else if (user.length < 2 || user.length > 30){
          let errorMessage = "El nombre de usuario debe tener entre 2 y 30 caracteres"
        inputError(username, errorMessage )
      } else{
        inputSuccess()
      }
    inputSuccess(username);
  
};

//*vamos a validar si el form se rellenó bien
const inputSuccess = (input) => {
  const inputParent = input.parentElement;
  //con querySelector nos va a agarrar el primero en que la etiqueta coincida. Si fuera querySelectorAll nos agarra todos
  const small = inputParent.querySelector("small");
  inputParent.classList.add("success");
  inputParent.classList.remove("error");
  small.innerHtml = "";
  console.log("success");
 
};

//* o si se rellenó mal
//agrego un parametro que va a ser el texto de error de los small, que va a ser personalizado
const inputError = (input, message) => {
    const inputParent = input.parentElement;
    //con querySelector nos va a agarrar el primero en que la etiqueta coincida. Si fuera querySelectorAll nos agarra todos
    const small = inputParent.querySelector("small");
    inputParent.classList.add("erroe");
    inputParent.classList.remove("success");
    small.innerHTML = message;
    small.classList.add("error")
    console.log("error!");
   
  };


//* REGEXP https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp
