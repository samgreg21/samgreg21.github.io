let miTexto_btn = document.getElementById('miTexto_btn');

let miTexto = document.getElementById('miTexto');

miTexto_btn.addEventListener('click', toggleText);

function toggleText() {
    miTexto.classList.toggle('show');
}


