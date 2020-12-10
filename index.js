document.querySelector("button").addEventListener("click",diceRow)
document.querySelector("button").addEventListener("click",diceRow2)

function diceRow(){
  dnot();
  var row = Math.random() * 6;
  row = Math.floor(row) + 1;
  if (row === 1) {d1();}
  if (row === 2) {d2();}
  if (row === 3) {d3();}
  if (row === 4) {d4();}
  if (row === 5) {d5();}
  if (row === 6) {d6();}
}

function diceRow2(){
  dnot2();
  var row1 = Math.random() * 6;
  row1 = Math.floor(row1) + 1;
  if (row1 === 1) {ds1();}
  if (row1 === 2) {ds2();}
  if (row1 === 3) {ds3();}
  if (row1 === 4) {ds4();}
  if (row1 === 5) {ds5();}
  if (row1 === 6) {ds6();}
}


function dnot() {
  document.querySelector("#c01").classList.remove("invisibility")
  document.querySelector("#c02").classList.remove("invisibility")
  document.querySelector("#c03").classList.remove("invisibility")
  document.querySelector("#c04").classList.remove("invisibility")
  document.querySelector("#c05").classList.remove("invisibility")
  document.querySelector("#c06").classList.remove("invisibility")
  document.querySelector("#c07").classList.remove("invisibility")
  document.querySelector("#c08").classList.remove("invisibility")
  document.querySelector("#c09").classList.remove("invisibility");
}

function dnot2() {
  document.querySelector("#c10").classList.remove("invisibility")
  document.querySelector("#c11").classList.remove("invisibility")
  document.querySelector("#c12").classList.remove("invisibility")
  document.querySelector("#c13").classList.remove("invisibility")
  document.querySelector("#c14").classList.remove("invisibility")
  document.querySelector("#c15").classList.remove("invisibility")
  document.querySelector("#c16").classList.remove("invisibility")
  document.querySelector("#c17").classList.remove("invisibility")
  document.querySelector("#c18").classList.remove("invisibility");
}

function d1() {
  document.querySelector("#c01").classList.add("invisibility")
  document.querySelector("#c02").classList.add("invisibility")
  document.querySelector("#c03").classList.add("invisibility")
  document.querySelector("#c04").classList.add("invisibility")
  document.querySelector("#c06").classList.add("invisibility")
  document.querySelector("#c07").classList.add("invisibility")
  document.querySelector("#c08").classList.add("invisibility")
  document.querySelector("#c09").classList.add("invisibility");
}

function ds1() {
  document.querySelector("#c10").classList.add("invisibility")
  document.querySelector("#c11").classList.add("invisibility")
  document.querySelector("#c12").classList.add("invisibility")
  document.querySelector("#c13").classList.add("invisibility")
  document.querySelector("#c15").classList.add("invisibility")
  document.querySelector("#c16").classList.add("invisibility")
  document.querySelector("#c17").classList.add("invisibility")
  document.querySelector("#c18").classList.add("invisibility");
}

function d2() {
  document.querySelector("#c01").classList.add("invisibility")
  document.querySelector("#c02").classList.add("invisibility")
  document.querySelector("#c04").classList.add("invisibility")
  document.querySelector("#c05").classList.add("invisibility")
  document.querySelector("#c06").classList.add("invisibility")
  document.querySelector("#c08").classList.add("invisibility")
  document.querySelector("#c09").classList.add("invisibility");
}

function ds2() {
  document.querySelector("#c10").classList.add("invisibility")
  document.querySelector("#c11").classList.add("invisibility")
  document.querySelector("#c13").classList.add("invisibility")
  document.querySelector("#c14").classList.add("invisibility")
  document.querySelector("#c15").classList.add("invisibility")
  document.querySelector("#c17").classList.add("invisibility")
  document.querySelector("#c18").classList.add("invisibility");
}

function d3() {
  document.querySelector("#c01").classList.add("invisibility")
  document.querySelector("#c02").classList.add("invisibility")
  document.querySelector("#c04").classList.add("invisibility")
  document.querySelector("#c06").classList.add("invisibility")
  document.querySelector("#c08").classList.add("invisibility")
  document.querySelector("#c09").classList.add("invisibility");
}

function ds3() {
  document.querySelector("#c10").classList.add("invisibility")
  document.querySelector("#c11").classList.add("invisibility")
  document.querySelector("#c13").classList.add("invisibility")
  document.querySelector("#c15").classList.add("invisibility")
  document.querySelector("#c17").classList.add("invisibility")
  document.querySelector("#c18").classList.add("invisibility");
}

function d4() {
  document.querySelector("#c02").classList.add("invisibility")
  document.querySelector("#c04").classList.add("invisibility")
  document.querySelector("#c05").classList.add("invisibility")
  document.querySelector("#c06").classList.add("invisibility")
  document.querySelector("#c08").classList.add("invisibility");
}

function ds4() {
  document.querySelector("#c11").classList.add("invisibility")
  document.querySelector("#c13").classList.add("invisibility")
  document.querySelector("#c14").classList.add("invisibility")
  document.querySelector("#c15").classList.add("invisibility")
  document.querySelector("#c17").classList.add("invisibility");
}

function d5() {
  document.querySelector("#c02").classList.add("invisibility")
  document.querySelector("#c04").classList.add("invisibility")
  document.querySelector("#c06").classList.add("invisibility")
  document.querySelector("#c08").classList.add("invisibility");
}

function ds5() {
  document.querySelector("#c11").classList.add("invisibility")
  document.querySelector("#c13").classList.add("invisibility")
  document.querySelector("#c15").classList.add("invisibility")
  document.querySelector("#c17").classList.add("invisibility");
}

function d6() {
  document.querySelector("#c02").classList.add("invisibility")
  document.querySelector("#c05").classList.add("invisibility")
  document.querySelector("#c08").classList.add("invisibility");
}

function ds6() {
  document.querySelector("#c11").classList.add("invisibility")
  document.querySelector("#c14").classList.add("invisibility")
  document.querySelector("#c17").classList.add("invisibility");
}
