import _ from "lodash";
import "./common.css";

function component() {
  var el = document.createElement("div");

  el.innerHTML = _.join(["Hello", "webpack!!!!"], " ");

  return el;
}
var el2 = document.createElement("p");
el2.classList.add("mystyle");
el2.innerHTML = "css test!!";

let pretty = ["아이유", "한지민", "아이린"];
let spread = ["진기주", ...pretty, "전지현"];

var el3 = document.createElement("div");
el3.innerHTML = spread;

document.body.appendChild(el2);
document.body.appendChild(component());
document.body.appendChild(el3);
