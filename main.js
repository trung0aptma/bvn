import {ig, text, btn, name, cost} from "./data.js"


var but = document.getElementById("print");
but.addEventListener("click", print);


function print() {

    const ele1 = ig[0];
    const ele2 = text[0];
    const ele3 = btn[0];
    const ele4 = name[0];
    const ele5 = cost[0];

    const Div = document.createElement("div");
    Div.innerHTML = ele1.textContent + ele2.textContent + ele3.textContent
        + ele4.textContent + ele5.textContent;
    document.body.appendChild(Div);



    // for (let i = 0; i < text.length; i++) {
    //     const ele = ig[i];
    //     const Div = document.createElement("div");
    //     Div.innerHTML = ele.textContent;
    //     document.body.appendChild(Div);
    // }

    // for (let i = 0; i < text.length; i++) {
    //     const ele = text[i];
    //     const Div = document.createElement("div");
    //     Div.innerHTML = ele.textContent;
    //     document.body.appendChild(Div);
    // }

    // for (let i = 0; i < text.length; i++) {
    //     const ele = btn[i];
    //     const Div = document.createElement("div");
    //     Div.innerHTML = ele.textContent;
    //     document.body.appendChild(Div);
    // }

    // for (let i = 0; i < text.length; i++) {
    //     const ele = name[i];
    //     const Div = document.createElement("div");
    //     Div.innerHTML = ele.textContent;
    //     document.body.appendChild(Div);
    // }

    // for (let i = 0; i < text.length; i++) {
    //     const ele = cost[i];
    //     const Div = document.createElement("div");
    //     Div.innerHTML = ele.textContent;
    //     document.body.appendChild(Div);
    // }

}



