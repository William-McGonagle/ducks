var subheader = document.getElementById("subheader");
var svg = document.getElementById("duckSVG");

var eyeOptions = [
    require("../ducks/eyes/eyes1.svg"),
    require("../ducks/eyes/eyes2.svg"),
    require("../ducks/eyes/eyes3.svg"),
];

var smokeOptions = [ 
    require("../ducks/smoke/smoke1.svg"),
    require("../ducks/smoke/smoke2.svg"),
    require("../ducks/smoke/smoke3.svg"),
    require("../ducks/smoke/smoke4.svg"),
    require("../ducks/smoke/smoke5.svg"),
    require("../ducks/smoke/smoke6.svg"),
    require("../ducks/smoke/smoke7.svg"),
    ""
];

var hatOptions = [ 
    require("../ducks/hat/hat1.svg"),
    require("../ducks/hat/hat2.svg"),
    require("../ducks/hat/hat3.svg"),
    require("../ducks/hat/hat4.svg"),
    require("../ducks/hat/hat5.svg"),
    require("../ducks/hat/hat6.svg"),
    require("../ducks/hat/hat7.svg"),
    require("../ducks/hat/hat8.svg"),
];

function randomFromArray(array) {

    return array[Math.floor(Math.random() * array.length)];

}

function addLayer(url) {

    var img = document.createElementNS("http://www.w3.org/2000/svg", "image") as SVGImageElement;

    img.setAttribute('width', '200'); 
    img.setAttribute('height', '200');
    
    img.setAttribute('href', url);

    svg.appendChild(img);

}

function countDucks() {

    return eyeOptions.length * smokeOptions.length * hatOptions.length;

}

subheader.innerHTML = `Over ${countDucks()} Ducks and Counting...`;

addLayer(require("../ducks/body/body1.svg"));

addLayer(randomFromArray(eyeOptions));
addLayer(randomFromArray(smokeOptions));
addLayer(randomFromArray(hatOptions));

addLayer(require("../ducks/beak/beak1.svg"));
addLayer(require("../ducks/wing/wing1.svg"));