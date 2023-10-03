import {yallHungry} from "./YallHungry.js";

const mainContainer = document.querySelector(#container);

const renderALLHTML = () => {
    mainContainer.innerHTML = yallHungry();

};

renderALLHTML();

document.addEventListener("stateChanged", function() {
renderALLHTML();
});