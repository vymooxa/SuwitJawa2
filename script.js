function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (player == "orang") return comp == "gajah" ? "KALAH" : "MENANG";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG";
}

function putar(i) {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];

  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pPlayer = document.querySelectorAll("li img");
const info = document.querySelector(".info");
const imgComputer = document.querySelector(".img-komputer");

const gambar = ["gajah", "semut", "orang"];

pPlayer.forEach(function (pil) {
  console.log(pil);

  pil.addEventListener("mouseenter", (e) => {
    let i = 0;
    let c = 0;
    const regex = /img\/([^/.]+)\.png/;

    timeout = setTimeout(function () {
      interval = setInterval(function () {
        //info.innerHTML = c++;
        imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");

        if (i == gambar.length) i = 0;
      }, 50);
    }, 300);
  });

  pil.addEventListener("mouseleave", clearTimers);

  function clearTimers() {
    pComp = imgComputer.getAttribute("src");
    pComp = pComp.substring(pComp.lastIndexOf("/") + 1, pComp.lastIndexOf("."));

    const hasil = getHasil(pComp, pil.className);

    info.innerHTML = hasil;
    clearTimeout(timeout);
    clearInterval(interval);
  }
});
