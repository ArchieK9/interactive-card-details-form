let completed, submit, inputs, form, errors, CardNumber, CardHolder, m_input, y_input, cvc, numberInput, nameInput, cvc_output, y_output, m_output, complete
// Variable declarations
completed = document.getElementById("completed");
submit = document.getElementById("submit");
inputs = document.querySelectorAll("input");
form = document.querySelector("form");
errors = document.querySelectorAll("small");
CardNumber = document.getElementById("CardNumber");
CardHolder = document.getElementById("CardHolder");
m_input = document.getElementById("m_input");
y_input = document.getElementById("y_input");
cvc = document.getElementById("cvc");
numberInput = document.getElementById("numberInput");
nameInput = document.getElementById("nameInput");
cvc_output = document.getElementById("cvc_output");
y_output = document.getElementById("y_output");
m_output = document.getElementById("m_output");
complete = document.getElementById("complete");

// Event listeners
completed.addEventListener("click", (e) => {
    e.preventDefault();

    let isValid = true;

    inputs.forEach((input, idx) => {
        let inputValue = input.value.trim();

        if (inputValue === "") {
            errors[idx].textContent = "Can't be blank";
            errors[idx].classList.add("error");
            isValid = false;
        } else if (input.getAttribute("id") === "numberInput" && numberInput.value.length !== 16 ) {
            errors[idx].textContent = "Wrong format, numbers must be 16";
            errors[idx].classList.add("error");
            isValid = false;
        } else if (input.getAttribute("id") === "m_input" && (m_input.value > 12 || m_input.value < 1)) {
            errors[2].textContent = "Must be valid";
            errors[2].classList.add("error");
            isValid = false;
        } else {
            return false

        }
    });

    if (isValid) {
        form.style.display = "none";
        complete.style.display = "block";
    }
});

submit.addEventListener("click", () => {
    form.style.display = "flex";
    complete.style.display = "none";
});

y_input.addEventListener("input", function() {
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
    }
    y_output.textContent = this.value;
});

cvc.addEventListener("input", function() {
    if (this.value.length > 3) {
        this.value = this.value.slice(0, 3);
    }
    cvc_output.innerHTML = this.value;
});

nameInput.addEventListener("input", function() {
  if (this.value == "") {
    return errors[idx].textContent = "Can't be blank"  
  }
  else {
    CardHolder.textContent = this.value;
    return errors[idx].textContent = "";
    
}
});


numberInput.addEventListener("input", function(event) {
  // Remove any existing spaces and store only the digits
  let cleanedValue = this.value.replace(/\s/g, '');
  
  // Remove all non-digit characters
  cleanedValue = cleanedValue.replace(/\D/g, '');

  // Limit to 16 characters
  cleanedValue = cleanedValue.slice(0, 16);

  // Add a space after every 4 characters
  let formattedValue = cleanedValue.replace(/(.{4})/g, '$1 ').trim();
  // Update the text content of the CardNumber element with the formatted value
  CardNumber.textContent = formattedValue;
  if (cleanedValue.length >= 16) {
    this.value = this.value.slice(0, 16);

  }
});
m_input.addEventListener("input", function() {
  // Ensure only numbers are entered
  this.value = this.value.replace(/\D/g, '');
  
  // Limit the input length to 2 characters
  if (this.value.length > 2) {
      this.value = this.value.slice(0, 2);
  }
  console.log(this.value)
  // Ensure the value is not equal to 0 and not greater than 12
  let monthValue = parseInt(this.value, 10); // Convert value to integer
  if ( monthValue > 12) {
      // If value is invalid, set it to the maximum valid value
      this.value = "12";
      monthValue = 12;
  }

  m_output.textContent = monthValue < 10 ? '0' + monthValue : monthValue;
});
