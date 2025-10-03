function zmenBarvu() {
  const hodnota = Number(document.getElementById("inp1").value);

  if (hodnota < 10) {
    document.body.style.backgroundColor = "blue";
  } else if (hodnota > 30) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "green";
  }
}
