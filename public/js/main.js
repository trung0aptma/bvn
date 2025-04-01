

var b = document.getElementById("contai");
var data;


// for (let i = 0; i < data.length; i++) {
//     const a = `<div class="col-6">
//         <div class="border border-secondary rounded-3">
//             <div class="img">
//                 <img class="imag-set" src="./img/backgr/34781557_cover.jpg" alt="">
//             </div>
//             <div class="m-4 border-bottom border-secondary pb-3">
//                 <p class="text-content fw-bold">${data[i].name}</p>
//                 <button class="views px-3 py-2 rounded-3">Xem trước</button>
//             </div>
//             <div class="row g-0 m-4">
//                 <div class="lava col-sm-6 col-md-8 text-danger fw-bold">${data[i].name2}</div>
//                 <div class="price col-6 col-md-4 fw-bold">${data[i].cost}</div>
//             </div>
//         </div>
//     </div>`;
//     var div = document.createElement("div");
//     div.innerHTML = a;
//     b.appendChild(div);
// }

var bn = document.getElementById("get");
bn = document.addEventListener("click", getData);

// console.log(data);

async function getData() {
    const url = "http://localhost:8080/getData";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);

        render(json.data);

    } catch (error) {
        console.error(error.message);
    }
}





function render(data) {
    for (let i = 0; i < data.length; i++) {
        const a = `<div class="col-6">
            <div class="border border-secondary rounded-3">
                <div class="img">
                    <img class="imag-set" src="./img/backgr/34781557_cover.jpg" alt="">
                </div>
                <div class="m-4 border-bottom border-secondary pb-3">
                    <p class="text-content fw-bold">${data[i].name}</p>
                    <button class="views px-3 py-2 rounded-3">Xem trước</button>
                </div>
                <div class="row g-0 m-4">
                    <div class="lava col-sm-6 col-md-8 text-danger fw-bold">${data[i].name2}</div>
                    <div class="price col-6 col-md-4 fw-bold">${data[i].cost}</div>
                </div>
            </div>
        </div>`;
        var div = document.createElement("div");
        div.innerHTML = a;
        b.appendChild(div);
    }
}