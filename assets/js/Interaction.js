
//Formatação dos caracteres


function upper() {
    let contmai = document.getElementById("text").value;
     document.getElementById("text").value = (`${contmai.toUpperCase()}`)
     document.getElementById ("text").placeholder = "Digite Aqui..."
}

function lower() {
    let contmin = document.getElementById ("text").value;
    document.getElementById ("text").value = (`${contmin.toLowerCase()}`)
    document.getElementById ("text").placeholder = "Digite Aqui..."
}

function lengt() {
    let contcaracter = document.getElementById ("text").value;
    document.getElementById ("text").value = null
    document.getElementById ("text").placeholder = (`O que você digitou possui ${contcaracter.length} caracteres (inluindo espaços)`)
}

//Mudar src para img padrão

function timeimg() {
    document.getElementById ("clipboard").src = ("assets/img/clipboard.svg")
    
}
