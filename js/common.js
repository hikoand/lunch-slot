let FirstlunchList = ["카레", "우동", "햄버거", "냉면", "마라탕"];
let lunchList = ["카레", "우동", "햄버거", "냉면", "마라탕"];
let distanceList = ["10m", "8m", "7m", "7m", "9m"];
let costList = ["7000won", "5000won", "4500won", "8000won", "9000won"];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

console.log(shuffle(lunchList));
let lunckPick = shuffle(lunchList)[0];

function lunchIs() {
  console.log(lunckPick);
  let elem = document.querySelector(".menu_print > h2");
  elem.innerHTML = lunckPick;

  let i = FirstlunchList.indexOf(lunckPick);

  let elem2 = document.querySelector(".main_text> p > span");
  elem2.innerHTML = distanceList[i];

  let elem3 = document.querySelector("em");
  console.log(elem3);
  elem3.innerHTML = costList[i];
}
