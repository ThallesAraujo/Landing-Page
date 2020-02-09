function activateLink(element){

    var links = document.getElementsByClassName('menu-item')
    console.log(links)
    for(var i = 0; i< links.length; i++){
        links[i].classList.remove('active')
    }
    console.log(element)

    element.classList.add('active')
}

function openProjects(element){

    var embedded = document.getElementById("embedded")

    if (embedded.classList.contains("container-opened")){
        embedded.classList.remove("container-opened")
        embedded.classList.add("container-closed");
        setTimeout(function(){
            embedded.style.display = "none"
        }, 500)
        element.innerHTML = "Ver outros projetos"
    }else{
        fetch("/projects.html" /*, options */)
        .then((response) => response.text())
        .then((html) => {
            embedded.style.display = "block"
            embedded.innerHTML = html
            embedded.classList.remove("container-closed")
            embedded.classList.add("container-opened");
            element.innerHTML = "Ver menos projetos"
        })
        .catch((error) => {
            console.warn(error);
        });
    }


    
}