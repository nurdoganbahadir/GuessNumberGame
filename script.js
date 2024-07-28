let checkBtn = document.querySelector("button");
let myInput = document.querySelector(".myInput");

let tahminHakki = 5;
let sayi = Math.floor(Math.random() * 100) + 1;

let result = document.createElement("h2");
myInput.appendChild(result);
let tahminResult = document.createElement("h5");
myInput.appendChild(tahminResult);

checkBtn.onclick = function () {
  let number = parseInt(document.getElementById("number").value);

  if (number === sayi) {
    result.innerHTML = "Tebrikler";
    resetGame();
  } else if (number < sayi) {
    result.innerHTML = "Tahmininizi Yükseltin";
    tahminHakki--;
    tahminResult.innerHTML = `Kalan tahmin hakkınız: ${tahminHakki}`;
  } else if (number > sayi) {
    result.innerHTML = "Tahminsinizi Azaltın";
    tahminHakki--;
    tahminResult.innerHTML = `Kalan tahmin hakkınız: ${tahminHakki}`;
  }
  if (tahminHakki === 0 && number !== sayi) {
    result.innerHTML = `Tahmin Hakkınız Bitti! Doğru sayı ${sayi}`;
    resetGame();
  }
};

function resetGame() {
  tahminHakki = 5;
  sayi = Math.floor(Math.random() * 100) + 1;
}
