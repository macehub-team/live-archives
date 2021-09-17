let hue = 0;
setInterval(() => {

    hue += 0.1;

    const data = document.getElementsByClassName("theme");
    data[0].style.transition = "filter 5s ease";
    data[0].style.filter =
        "hue-rotate(" + hue + "turn)";
}, 1300);