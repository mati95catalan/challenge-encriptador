function encriptar(){// function encriptar
        let texto = document.getElementById("idTexto").value;
        let ocultarImagen = document.getElementById("idOcultarImagen").style.display='none';//permite ocultar la imagen 
        let ocultarText = document.getElementById("idOcultarTexto").style.display='none';//permite ocultar el texto que se encuentra en el contenido 2
        let mostrarText = document.getElementById("idMostrarTexto");
        let mostrarBtnCopiar = document.getElementById("idMostrarBtnCopiar");
        let cifrarTexto = texto //En la variable cifrar texto se almacena todo lo que esta en la otra variable con el nombre text y se indica que rempace los valores utilizando la propiedad replace. 
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat");
        if(validarCaracteres(texto) ){
          
          alert("No debe ingresar acentos, textos en mayúsculas o caracteres especiales como los siguientes (!#$%&'()*+-/:;<=>?@[\]^_`{|}~)")
          mostrarText.style.display='block';//muestra el texto, en este caso estará vacio porque no se ingreso nada
          mostrarBtnCopiar.style.display='block';//aparece el boton copiar. 
          
        }else{
          if(document.getElementById("idTexto").value.length !=0){//valida que haya un valor
            document.getElementById("idTexto").value = "";//Limpia el textArea al momento de presionar el boton
            document.getElementById("idMostrarTexto").value = cifrarTexto;
            mostrarText.style.display='block';//muestra lo que esta en la variable al momento de presionar el boton
            mostrarBtnCopiar.style.display='block';//;//muestra el boton que esta en la variable al momento de presionar el boton
            ocultarImagen;//oculta lo que esta almacenado en la variable al momento de presionar el boton encriptar
            ocultarText;//oculta lo que esta almacenado en la variable al momento de presionar el boton encriptar
        }else{
          alert("Debe ingresar el texto");//si se presiona el boton y no hay texto ingresado se generara un mensaje
          mostrarText.style.display='block';//muestra el texto, en este caso estará vacio porque no se ingreso nada
          mostrarBtnCopiar.style.display='block';//aparece el boton copiar. 
        }
        }
      
}
function desencriptar(){//cumple una funcion simir al encriptador, la diferencia es que hace lo contratio al momento de remplacar los valores que se ingresan en el textarea
        let texto = document.getElementById("idTexto").value;
        let ocultarImagen = document.getElementById("idOcultarImagen").style.display='none';
        let ocultarText = document.getElementById("idOcultarTexto").style.display='none';
        let mostrarText = document.getElementById("idMostrarTexto");
        let mostrarBtnCopiar = document.getElementById("idMostrarBtnCopiar");
        let cifrarTexto = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi,"a")
        .replace(/ober/gi,"o")
        .replace(/ufat/gi,"u");
        if(document.getElementById("idTexto").value.length !=0){
            document.getElementById("idTexto").value = "";
            document.getElementById("idMostrarTexto").value = cifrarTexto;
            mostrarText.style.display='block';
            mostrarBtnCopiar.style.display='block';
            ocultarImagen;
            ocultarText;
        }else{
            alert("Debe ingresar el texto");
        }
}
function copiar() {
  let copiarTexto = document.getElementById("idMostrarTexto").value;//captuda lo que esta en el textArea
  navigator.clipboard.writeText(copiarTexto)//Permite copiar lo que se captura en el textArea
    .then(() => {
      console.log("Texto copiado al portapapeles");
    })
    .catch(err => {
      console.error("Error al copiar el texto: ", err);
    });
}
document.querySelector("#idMostrarBtnCopiar").addEventListener("click", copiar);//al hacer click en el boton se llama la funcion copiar

function validarCaracteres(texto){
  var caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚáéíóú!#$%&'()*+-/:;<=>?@[\]^_`{|}~";
  for(let i=0; i<texto.length; i++){
    if(caracteres.indexOf(texto.charAt(i),0)!=-1){
      return 1;
    }
  }
  return 0;
}

