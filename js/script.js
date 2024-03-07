//obtengo elementos del DOM
const visitCounter = document.getElementById('contadorVisitas');
const buttonreset = document.getElementById('btnReestablecer');

/*
paso 1: con cada recarga se aumentan las visitas. Creo una función, donde el contador se inicia en 0 y aumemta en 1
su valor, cada vez que se llama a la función.

paso2: recargar la página. Se emplea el evento de DOMContentLoaded. Cada vez que ocurr seva  a llamar a la función,
para ingrementar el valor de counter en 1.

paso3: evento de click para el botón. Cuando ocurra el valor de counter será 0
*/



//Aumento el contador con cada visita
function increaseCounter(){
    if(localStorage.getItem('counter') == null){//compruebo que no haya un counter almacenado. getItem para obtener valores
        localStorage.setItem('counter',0);//si no hay establezco dato clave valor. El contador se inicia en 0
    }
    let counterValue = Number(localStorage.getItem('counter'));//Creo una variable donde se va a almacenar el valor de counter. Se emplea Number para convertir el valor de LocalStorage en número
    localStorage.setItem('counter', counterValue +1)//Incremento el calor de counter en 1
    visitCounter.textContent = localStorage.getItem('counter');//El valor de counter aparece en el contendedor de mi página
};

//Recargar la página
//DOMContentLoaded para recargar la página HTML. 
//Cuando ocurra DOMCOntentLoaded, llamará a la función increaseCounter
document.addEventListener('DOMContentLoaded',() =>{
    increaseCounter();
});

//Evento de click para el botón
buttonreset.addEventListener('click', () =>{
    localStorage.setItem('counter', 0);//cuando se de a click se establecerá el valor de contador en 0
    visitCounter.textContent = localStorage.getItem('counter');
    increaseCounter();//para que la siguiente visita se incremente en 1
})