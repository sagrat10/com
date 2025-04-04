
//alert("mensaje de alerta"); //mensaje de alerta comenzando la pagina web
//let nombre = 10; // declarar let o var para variables 
//document.write(nombre); declaracion de variable sin comillas y texto con
//prompt("ingresa tu edad ${nombre} ");
//document.write("")

//let nombre = 10;

//resultado = 10*2;


//et resultado = 1;
//while(resultado <=10)
//{
//document.write(resultado);
//resultado ++;
//}

let clase1 =
{
    nombre:"miguel",
    edad: "30"
    
}

console.log(clase1);

function validarFormulario() {
    // Obtener los campos del formulario
    var email = document.getElementsByName("email")[0].value;
    var mensaje = document.getElementsByName("message")[0].value;
  
    // Verificar si los campos están vacíos
    if (email == "" || mensaje == "") {
      alert("Por favor, complete todos los campos");
      return false;
    }
  
    // Si los campos no están vacíos, enviar el formulario
    return true;
  }