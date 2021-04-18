let lunchList = ["카레", "우동", "햄버거", "냉면", "마라탕"];

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
}
