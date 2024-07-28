let checkBtn = document.querySelector("button");
let myInput = document.querySelector(".myInput");

let tahminHakki = 5;
let sayi = Math.floor(Math.random() * 100) + 1;
console.log(sayi);

let result = document.createElement("h1");
myInput.appendChild(result);
let tahminResult = document.createElement("p");
myInput.appendChild(tahminResult);

checkBtn.onclick = function () {
  let number = parseInt(document.getElementById("number").value);

  if (number === sayi) {
    result.innerHTML = "Tebrikler";
  } else if (number < sayi) {
    result.innerHTML = "Tahmininizi Yükseltin";
    tahminHakki--;
    tahminResult.innerHTML = `Kalan tahmin hakkınız: ${tahminHakki}`;
  } else if (number > sayi) {
    result.innerHTML = "Tahminsinizi Azaltın";
    tahminHakki--;
    tahminResult.innerHTML = `Kalan tahmin hakkınız: ${tahminHakki}`}
  if (tahminHakki === 0 && number !== sayi) {
    result.innerHTML = "Tahmin Hakkınız Bitti! Doğru sayı: " + sayi;
    tahminHakki = 5;
  }
};
