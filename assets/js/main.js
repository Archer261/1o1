var navButtons = document.querySelectorAll("li");
var logo = document.getElementById("logo");



logo.addEventListener("mouseover", function () {
    if (logo.style.backgroundColor !== 'red') {
        logo.style.backgroundColor = 'red';
    }
});

logo.addEventListener("mouseout", function () {
    if (logo.style.backgroundColor === 'red') {
        logo.style.backgroundColor = 'white';
    }
})


/*function changeColor(img) {
    img.style.background - color = 'red';
}*/