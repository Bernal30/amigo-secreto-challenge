let amigos = [];

//función para agregar elementos al array
function agregarAmigo() {
    //se toma el valor del input
    let nombreUsuario = document.getElementById("amigo").value;

    //si el input está vacío
    if(nombreUsuario === "") {
        return alert("Ingrese un nombre valido por favor.");
    } else {
        //de lo contrario se añade el nombre al final del array
        amigos.push(nombreUsuario);
    }
    //se reinicia el input
    document.getElementById("amigo").value = "";
    console.log(amigos);

    displayedList();

    return;
}

//función para visualizar la lista en la pantalla
function displayedList() {
    //Seleccion y limpieza de la lista existente
    let displayedList = document.getElementById("listaAmigos");
    displayedList.innerHTML = "";
    //iteración sobre el arreglo para agregar nombres en cada iteración 
    for (let index = 0; index < amigos.length; index++) {
        displayedList.innerHTML += `<li class="item-list"> ${amigos[index]} </li>`;
    }    
}
