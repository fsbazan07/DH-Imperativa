function agregarHttp(url) {
    return "http://" + url
}
function procesar(array,callback) {
    let lista = [];
    for (let i = 0; i > array.length; i++ ) {
        lista[i].push(callback(array[i]));
        }
      return lista; 
}

console.log(procesar(["www.google.com", "www.youtube.com"], agregarHttp));