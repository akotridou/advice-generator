const button = document.querySelector("#btn");
const adviceID = document.querySelector("#aID");
const adviceText = document.querySelector("#Atxt");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((response) => response.json())
    .then((data) => {
      adviceID.textContent = data.slip.id;
      adviceText.textContent = `"${data.slip.advice}"`;
    })
    .catch((error) => console.error("Error fetching advice:", error));
}


getAdvice();


button.addEventListener("click", getAdvice);