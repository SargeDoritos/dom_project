// Add your code to this file
// Function to add a dotted yellow border to the first image and all images with the class "pokemon_images"
function addDottedBorderToImages() {
  const startersImage = document.getElementById("starters_image_div").querySelector("img");
  startersImage.style.border = "2px dotted yellow";

  const images = document.getElementsByClassName("pokemon_images");
  for (let i = 0; i < images.length; i++) {
    images[i].style.border = "2px dotted yellow";
  }
}

// Function to change the background color to blue
function changeBackgroundColorToBlue() {
  document.body.style.backgroundColor = "darkblue";
}

// Function to underline the text "Pokemon!" in the h1 heading
function underlinePokemonHeading() {
  const h1Heading = document.querySelector("h1");
  h1Heading.style.textDecoration = "underline";
}

// Function to update the h2 heading text and center it in the middle
function updateH2Text() {
  const h2Heading = document.querySelector("h2");
  h2Heading.innerText = "Here are Pokemon's incredible starters!";
  h2Heading.style.textAlign = "center";
  h2Heading.style.marginTop = "50px"; // Optional: Add some top margin for better positioning
}

// Function to update the footer text
function updateFooterText() {
  const footer = document.querySelector("footer");
  footer.innerText = "ALL STAR CODE - DOM PROJECT";
}

// Call the functions when the page has finished loading
window.onload = function () {
  addDottedBorderToImages();
  changeBackgroundColorToBlue();
  underlinePokemonHeading();
  updateH2Text();
  updateFooterText();
};
