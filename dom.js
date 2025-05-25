// import get from "./api.js";
let box = document.querySelector(".box");

export default function getData(data) {
    box.innerHTML= ""
    data.forEach((e)=>{
        let conteiner = document.createElement("div");
        conteiner.classList.add("conteiner");

        let h1Name = document.createElement("h1");
        h1Name.innerHTML = e.name;

        let pAge = document.createElement("p");
        pAge.innerHTML = e.age;

        let pStatus = document.createElement("p");
        pStatus.innerHTML = e.status? "Active" : "Inactive";

        conteiner.append(h1Name, pAge, pStatus);
        box.append(conteiner);
    })
}