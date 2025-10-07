// Evento onload
function onPageLoad() {
    document.getElementById('loadMessage').innerText = 'La página ha cargado correctamente.';
}

// Evento onunload
function onPageUnload() {
    alert('La página se está cerrando o navegando a otro lugar.');
}

// Evento onerror y onabort
function onObjectError() {
    alert('Ha ocurrido un error al cargar el objeto.');
}
