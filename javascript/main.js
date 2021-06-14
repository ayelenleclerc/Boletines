// Obtener la clase close

  let link= document.querySelectorAll(".close")
// recorrerlos

  link.forEach(function(link){


//agregar un evento click a cada uno de ellos

    link.addEventListener("click" , function(event){
      event.preventDefault();
      let content = document.querySelector(".content")


      // Vamos a quitarle a content las clases de animacion

      content.classList.remove("animate__fadeInDown")
      content.classList.remove("animate__animated")


      //Vamos a agregar clases para animar su salida FadeOutUp

      content.classList.add("animate__fadeOutUp")
      content.classList.add("animate__animated")

      setTimeout(function(){
        location.href = "https://ayelenleclerc.github.io/boletines";
      } , 600);
      })

    });
//
