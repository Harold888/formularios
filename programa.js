function mostrarMensaje(){
    console.log("Hicieron click en el boton "+ new Date().toLocaleTimeString());
}

//Agrefar un evenListener a otroBoton
let boton = document.getElementById("otroBoton");
boton.addEventListener("click", ()=>{
    console.log("Hicieron click en el boton "+ new Date().toLocaleTimeString());
});