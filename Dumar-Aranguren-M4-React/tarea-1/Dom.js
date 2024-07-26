let div = document.querySelector('div');
let boton = document.getElementById('boton')



boton.addEventListener('click',saludar);
boton.addEventListener('click',adios);

// boton.onclick = saludar;
// boton.onclick = adios;

function colores(){
    console.log('entro -->');
    div.innerHTML = 'prueba desde js javascript';
    div.style.marginTop = '50px'
    div.style.background = 'azul celeste'

}

function saludar(){
    alert('hola estoy aqui con ganas de aprender cada dia más');
}


function adios(){
    alert('fue un placer')
}