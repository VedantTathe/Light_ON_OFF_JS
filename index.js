const img = document.getElementById("img");

const btnon = document.getElementById("btnon");
const btnoff = document.getElementById("btnoff");

btnon.addEventListener('click', ()=>{
    img.src = "./images/lighton.png"
})

btnoff.addEventListener('click', ()=>{
    img.src = "./images/lightoff.png"
})