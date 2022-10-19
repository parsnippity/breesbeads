var test = [document.getElementById("customNecklace"), document.getElementById("customBracelet")];
let list = document.getElementsByClassName("color");

function custom() {
    if(test[0].checked || test[1].checked) {
        document.getElementById("customColor").removeAttribute("disabled");
    } else {
        document.getElementById("customColor").setAttribute("disabled", "");
        for (var x = 0; x < list.length; x++) {
            list[x].checked = false;
        }
    };
}

var hi = document.getElementsByClassName('review');

function all() {
    console.log("hi");
}