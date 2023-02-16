function gofullscreen(pic){
    let plane = document.getElementById('fsplane');
    plane.style.backgroundImage = 'url(' + pic + ')';
    plane.style.top = document.documentElement.scrollTop.toString() + 'px';
    plane.style.display = 'block';
}