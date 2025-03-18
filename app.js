let amigos = [];

//función para agregar elementos al array
function agregarAmigo() {
    //se toma el valor del input
    let nombreUsuario = document.getElementById("amigo").value;

    //si el input está vacío
    if(nombreUsuario === "") {
        return displayedResult("Ingrese un nombre valido por favor.");
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
    let friendsList = document.getElementById("listaAmigos");
    friendsList.innerHTML = "";
    //iteración sobre el arreglo para agregar nombres en cada iteración 
    for (let index = 0; index < amigos.length; index++) {
        friendsList.innerHTML += `<li class="item-list"> ${amigos[index]} </li>`;
    }
    return; 
}

function randomName() {
    //si el arreglo tiene al menos 2 elementos
    if (amigos.length >= 2) {
        let randomIndex = Math.floor(Math.random()*amigos.length);
        let sortedName = amigos[randomIndex];
        displayedResult(sortedName);
    } else {
        return displayedResult("Ingrese al menos dos nombres a la lista para el sorteo.");
    }
}

//función para exponer mensajes en la sección de resultado
function displayedResult(textResult) {
    resultBox = document.getElementById("resultado");
    resultBox.innerHTML = textResult;
}