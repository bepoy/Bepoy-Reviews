let oepnBtn = document.getElementById("open-btn");
let modalContainer = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");
let para = document.querySelector(".para");
let modal = document.getElementById("modal");


oepnBtn.addEventListener("click", function(){

    modalContainer.style.display = "block";


});


closeBtn.addEventListener("click", function(){

    modalContainer.style.display = "none";

});

window.addEventListener("click", function(e){       
    if(e.target === modalContainer){
        modalContainer.style.display = "none";
    }
});

modal.addEventListener("mouseover", function(){
    para.innerText = "Why you touching meow?";
    para.style.backgroundColor = "black";
    para.style.color = "white";
});

modal.addEventListener("mouseout", function(){
    para.innerText = "MIIYYYAAAAOOO";
    para.style.backgroundColor = "white";
    para.style.color = "black";
});