function displayPoem(response) {
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("blink");
  poemElement.innerHTML = "";

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3b0ded4cbf171oa2b4ef5367a1a5tfc9";
  let context =
    "You are a poetic expert with a personality that is whimsical and magical. Your mission is to generate a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.classList.add("blink");
  poemElement.innerHTML = `⌛Generating a poem about ${instructionsInput.value}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
