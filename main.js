function navClicked() {
    let element = document.getElementById("menu");
    element.classList.add('clicked');
    let hamburger = document.getElementById("hamburger");
    hamburger.style.display = 'none';

    setTimeout(function(){
        element.classList.remove('clicked');
        hamburger.style.display = 'block';
    }, 5000);
}