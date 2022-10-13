console.log("test");

var test = [document.getElementById("customNecklace"), document.getElementById("customBracelet")];

function custom() {
    var yell = 0;
    while(yell < test.length) {
        if(test[yell].checked) {
            document.getElementById("customColor").setAttribute("disabled", "false");
        };
        yell ++;
    }
}