import { YallHungry } from "./YallHungry.js"

const mainContainer = document.querySelector("#container");

const renderAllHTML = () => {
    mainContainer.innerHTML = YallHungry();
};

renderAllHTML();

document.addEventListener("stateChanged", function() {
    renderAllHTML(); 

  

    
});


