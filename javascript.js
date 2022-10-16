function add(a, b) {
   return a + b;
}

function subtract(a, b) {
   return a - b;
}

function multiply(a, b) {
   return a * b;
}

function divide(a, b) {
   if (b == 0) {
      console.log('I see what you did there bastard')
      return;
   } else {
      return a / b;
   }
}

function operate(a, b, op) {
   return op(a, b);
}

/* DOM */
buttons = document.querySelectorAll('button')
display = document.querySelector('#display')

function populate() {
   for (const button of buttons) {
      button.addEvenListener('click', function(e) {
         display.textContent = e.target.value;
      })
   }
}