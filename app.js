let amigos = [];

//función para agregar elementos al array
function agregarAmigo() {
    //se toma el valor del input
    let nombreUsuario = document.getElementById("amigo").value;

    //si el input está vacío
    if(nombreUsuario === "") {
        alert("Ingrese un nombre valido por favor.")
    } else {
        //de lo contrario se añade el nombre al final del array y se reinicia el input
        amigos.push(nombreUsuario);
    }
    document.getElementById("amigo").value = "";
    console.log(amigos);
}