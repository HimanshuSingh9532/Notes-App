//alert("hi");
let notesContainer = document.querySelector(".notes-container");
let createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", () => {
   let inputBox = document.createElement("p");
   let img = document.createElement("img");
   inputBox.className = "inputbox";
   inputBox.setAttribute("contenteditable","true" );
   img.src = "./notes-app-img/images/delete.png";
   notesContainer.appendChild(inputBox).appendChild(img);

});
