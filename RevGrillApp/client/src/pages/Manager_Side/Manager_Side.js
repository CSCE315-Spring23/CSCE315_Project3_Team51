const MS1 = require("../../backend_functions/Manager_Side");
const prac = require("./practice.js");

function fun() {
    // window.alert("hi!");
    window.alert(MS1.getMostUsedItems());
    // window.alert(prac.getMostUsedItems());
    // window.alert("Bye");
}

exports.fun = fun;