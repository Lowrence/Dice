let randaomNr1 = Math.floor(Math.random() * 6) + 1;;
let randaomNr2 = Math.floor(Math.random() * 6) + 1;;


document.querySelector("#firstImg").setAttribute("src", "images/dice" + randaomNr1 + ".png");
document.querySelector("#secondImg").setAttribute("src", "images/dice" + randaomNr2 + ".png");

if (randaomNr1 === randaomNr2) {
    document.querySelector(".result-draw").classList.add("displayed");
} else if (randaomNr1 > randaomNr2) {
    document.querySelector(".result1").classList.add("displayed");
} else {
    document.querySelector(".result2").classList.add("displayed");
};
