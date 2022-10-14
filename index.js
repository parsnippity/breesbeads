console.log("test");

var test = [document.getElementById("customNecklace"), document.getElementById("customBracelet")];

function custom() {
    if(test[0].checked) {
        document.getElementById("customColor").removeAttribute("disabled");
    } else if(test[1].checked) {
        document.getElementById("customColor").removeAttribute("disabled");
    } else {
        document.getElementById("customColor").setAttribute("disabled", "");
    };
}