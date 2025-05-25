import get from "./api.js";
let box = document.querySelector(".box");

export default function getData(data) {
    box.innerHTML= ""
    data.forEach((e)=>{
        let conteiner = document.createElement("div");
    })
}