function start() {
    
    let element = document.getElementById("caroline");
    element.classList.remove("d-none");
    
    element = document.getElementById("afetiva");
    element.classList.remove("d-none");
    
    element = document.getElementById("ruiva");
    element.classList.remove("d-none");
    let newElement = document.getElementById("r");
    r.classList.add("animated", "tada");
    
    element = document.getElementById("otaka");
    element.classList.remove("d-none");
    
    element = document.getElementById("linda");
    element.classList.remove("d-none");
    
    setTimeout(function() {
        let nome = document.getElementById("nome");
        nome.classList.add("d-none");
        let beginning = document.getElementById("beginning");
        beginning.classList.remove("d-none");
        beginning.classList.add("animated", "slideInUp");
    }, 2000);
    
}

function backward(current, backward) {
    let currentElement = document.getElementById(current);
    currentElement.classList.add("d-none");
    let beforeElement = document.getElementById(backward);
    beforeElement.classList.remove("d-none");
    beforeElement.classList.remove("slideInUp")
    beforeElement.classList.remove("slideInRight")
    beforeElement.classList.add("slideInLeft");
}

function forward(current, forward) {
    let currentElement = document.getElementById(current);
    currentElement.classList.add("d-none");
    let nextElement = document.getElementById(forward);
    nextElement.classList.remove("d-none");
    nextElement.classList.add("animated", "slideInRight");
}

function startOver() {
    let currentElement = document.getElementById("fim");
    currentElement.classList.add("d-none");
    let nome = document.getElementById("nome");
    nome.classList.remove("d-none");
}