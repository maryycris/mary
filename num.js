function handleButtonClick(value) {
  const fromSystem = document.getElementById('fromSystem').value;
  if (fromSystem === 'binary' && !['0', '1'].includes(value)) {
    alert('Invalid input! Only 0 and 1 are allowed in Binary.');
    return;
  }
  const inputValue = document.getElementById('inputValue');
  inputValue.value += value;
}

function handleLetter(letter) {
  const inputValue = document.getElementById('inputValue');
  inputValue.value += letter;
}

function handleInputChange(event) {
  if (event.inputType !== 'insertText') {
    convert();
  }
}

function convert() {
  const fromSystem = document.getElementById('fromSystem').value;
  const toSystem = document.getElementById('toSystem').value;
  const inputValue = document.getElementById('inputValue').value.toUpperCase();

  let result = '';

  if (fromSystem === 'binary') {
    if (toSystem === 'decimal') {
      result = parseInt(inputValue, 2).toString(10);
    } else if (toSystem === 'octal') {
      result = parseInt(inputValue, 2).toString(8);
    } else if (toSystem === 'hexadecimal') {
      result = parseInt(inputValue, 2).toString(16).toUpperCase();
    }
  } else if (fromSystem === 'decimal') {
    if (toSystem === 'binary') {
      result = parseInt(inputValue, 10).toString(2);
    } else if (toSystem === 'octal') {
      result = parseInt(inputValue, 10).toString(8);
    } else if (toSystem === 'hexadecimal') {
      result = parseInt(inputValue, 10).toString(16).toUpperCase();
    }
  } else if (fromSystem === 'octal') {
    if (toSystem === 'binary') {
      result = parseInt(inputValue, 8).toString(2);
    } else if (toSystem === 'decimal') {
      result = parseInt(inputValue, 8).toString(10);
    } else if (toSystem === 'hexadecimal') {
      result = parseInt(inputValue, 8).toString(16).toUpperCase();
    }
  } else if (fromSystem === 'hexadecimal') {
    if (toSystem === 'binary') {
      result = parseInt(inputValue, 16).toString(2);
    } else if (toSystem === 'decimal') {
      result = parseInt(inputValue, 16).toString(10);
    } else if (toSystem === 'octal') {
      result = parseInt(inputValue, 16).toString(8);
    }
  }

  return result;
}

function clearInput() {
  document.getElementById('inputValue').value = '';
  document.getElementById('outputValue').value = '';
}

function deleteLast() {
  const inputValue = document.getElementById('inputValue');
  inputValue.value = inputValue.value.slice(0, -1);
}

function handleEnter() {
  document.getElementById('outputValue').value = convert();
}

function toggleButtons() {
  const fromSystem = document.getElementById('fromSystem').value;
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    const value = button.textContent;
    if (fromSystem === 'decimal' || fromSystem === 'octal') {
      if (['A', 'B', 'C', 'D', 'E', 'F'].includes(value)) {
        button.disabled = true;
      } else {
        button.disabled = false;
      }
    } else if (fromSystem === 'binary') {
      if (['2', '3', '4', '5', '6', '7', '8', '9','A', 'B', 'C', 'D', 'E', 'F'].includes(value)) {
        button.disabled = true;
      } else {
        button.disabled = false;
      }
    } else {
      button.disabled = false;
    }
  });
}

window.onload = toggleButtons;
const logOut=document.querySelector(".log-out");

logOut.addEventListener("click",()=>{
    window.location.replace("login.html")
})
