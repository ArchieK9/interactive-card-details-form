"use strict"
// Var declaration
let completed = document.getElementById("completed");
let submit = document.getElementById("submit");
let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");
let errors = document.querySelectorAll("small");
let CardNumber = document.getElementById("CardNumber");
let CardHolder = document.getElementById("CardHolder");
let m_input = document.getElementById("m_input");
let y_input = document.getElementById("y_input");
let cvc = document.getElementById("cvc");
let numberInput = document.getElementById("numberInput");
let nameInput = document.getElementById("nameInput");
let cvc_output = document.getElementById("cvc_output");
let y_output = document.getElementById("y_output");
let m_output = document.getElementById("m_output");
let complete = document.getElementById("complete")
// Event listener
completed.addEventListener("click", (e)=>{
    e.preventDefault();
    inputs.forEach((input, idx) =>{

      let inputValue = input.value.trim();

    if (inputValue === "") {
      errors[idx].textContent = "Can't be blank";
      errors[idx].classList.add("error");
    } else if (input.getAttribute("placeholder") === "e.g. 1234 5678 9123 0000" && 
    !/^\d+$/.test(inputValue)) {
      errors[idx].textContent = "Wrong format, numbers only";
      errors[idx].classList.add("error");
    } else if (m_input.value > 12 || m_input.value < 1) {
        errors[2].textContent = "Must be valid"
        errors[2].classList.add("error")
    } else {
      errors[idx].textContent = "";
      errors[idx].classList.remove("error");
      form.style.display = "none"
      complete.style.display = "block"
    }

    } )


})




submit.addEventListener("click", ()=>{
  form.style.display= "flex";
  complete.style.display = "none";
})

y_input.addEventListener("input", function () {
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 2);
  }
  y_output.textContent = this.value;
});

cvc.addEventListener("input" , function () {
  if (this.value.length > 3) {
    this.value = this.value.slice(0, 3);
  } 
  cvc_output.innerHTML = this.value;
})

nameInput.addEventListener("input", function () {
  CardHolder.textContent = this.value;
});

numberInput.addEventListener("input", function () {
  CardNumber.textContent = this.value;
});

m_input.addEventListener("input", function () {
  m_output.textContent = this.value;
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 2);
  }
});
