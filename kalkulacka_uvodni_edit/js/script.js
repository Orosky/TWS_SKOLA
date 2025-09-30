function secti() {
  let hodnota1 = parseInt(document.getElementById("id_prvni").value);
  let hodnota2 = parseInt(document.getElementById("id_druhy").value);
  let vysledek = hodnota1 + hodnota2;
  document.getElementById("id_vysledek").value = vysledek;
}

function odecti() {
  let hodnota1 = parseInt(document.getElementById("id_prvni").value);
  let hodnota2 = parseInt(document.getElementById("id_druhy").value);
  let vysledek = hodnota1 - hodnota2;
  document.getElementById("id_vysledek").value = vysledek;
}

function vynasob() {
  let hodnota1 = parseInt(document.getElementById("id_prvni").value);
  let hodnota2 = parseInt(document.getElementById("id_druhy").value);
  let vysledek = hodnota1 * hodnota2;
  document.getElementById("id_vysledek").value = vysledek;
}

function vydel() {
  let hodnota1 = parseInt(document.getElementById("id_prvni").value);
  let hodnota2 = parseInt(document.getElementById("id_druhy").value);
  let vysledek = hodnota1 / hodnota2;
  document.getElementById("id_vysledek").value = vysledek;
}