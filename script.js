// Add your code to this file
function addDottedBorderToImages() {
  const startersImage = document.getElementById("starters_image_div").querySelector("img");
  startersImage.style.border = "2px dotted yellow";

  const images = document.getElementsByClassName("pokemon_images");
  for (let i = 0; i < images.length; i++) {
    images[i].style.border = "2px dotted yellow";
  }
}

function changeBackgroundColorToBlue() {
  document.body.style.backgroundColor = "darkblue";
}

function underlinePokemonHeading() {
  const h1Heading = document.querySelector("h1");
  h1Heading.style.textDecoration = "underline";
}

function updateH2Text() {
  const h2Heading = document.querySelector("h2");
  h2Heading.innerText = "Here are Pokemon's incredible starters!";
  h2Heading.style.textAlign = "center";
  h2Heading.style.marginTop = "50px"; 
}

function updateFooterText() {
  const footer = document.querySelector("footer");
  footer.innerText = "ALL STAR CODE - DOM PROJECT";
}

window.onload = function () {
  addDottedBorderToImages();
  changeBackgroundColorToBlue();
  underlinePokemonHeading();
  updateH2Text();
  updateFooterText();
};
