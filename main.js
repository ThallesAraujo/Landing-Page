function activateLink(element){

    var links = document.getElementsByClassName('menu-item')
    console.log(links)
    for(var i = 0; i< links.length; i++){
        links[i].classList.remove('active')
    }
    console.log(element)

    element.classList.add('active')

}