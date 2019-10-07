// Assign user input as dog header
var dogNameInput = document.querySelector("#user_name_input");
var dogNameSubmit = document.querySelector("#user_name_submit");
var dogParaText = document.querySelector("#landing_dog_name");

dogNameSubmit.addEventListener('click', function() {
  var inputValue = dogNameInput.value;
  dogParaText.innerText = inputValue;
})

// Hide and show center content paragraph text
  // Select button and text
var howToButton = document.querySelector("#how_to_button");
var howToText= document.querySelector("#how_to_text");

var whatIsButton = document.querySelector("#what_is_button");
var whatIsText = document.querySelector("#what_is_text");

var factsFromButton = document.querySelector("#facts_from_button");
var factsFromText = document.querySelector("#facts_from_text");

  // Toggle hidden style on and off
howToButton.addEventListener('click', function() {
    howToText.classList.toggle('hidden');
  })

whatIsButton.addEventListener('click', function() {
    whatIsText.classList.toggle('hidden');
  })

factsFromButton.addEventListener('click', function() {
    factsFromText.classList.toggle('hidden');
  })

// Assign user input to center content paragraphs
var centerInput = document.querySelector("#user_para_input");
var centerSubmit = document.querySelector("#user_para_submit");
var paragraphInput = document.querySelector("#para_change");

function changeCenterContent() {
  var userParaChoice = paragraphInput.value;
  var userParaInput = centerInput.value;

  switch(userParaChoice) {
    case "how_to" :
      howToText.innerText = userParaInput;
      break;
    case "what_is" :
      whatIsText.innerText = userParaInput;
      break;
    case "facts_from" :
      factsFromText.innerText = userParaInput;
      break;
    }
}

centerSubmit.addEventListener('click', changeCenterContent);
