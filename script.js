function enterprise() {
  const planos = document.querySelector(".premium");
  const bestSeller = document.createElement("p");
  bestSeller.classList.add("bestseller");
  bestSeller.innerText = "BESTSELLER";
  planos.insertAdjacentElement("afterbegin", bestSeller);
  const planosStandard = document.querySelector(".standard");
  const planoStandardChildren = planosStandard.children[0].innerText;
  if (planoStandardChildren === "BESTSELLER") {
    planosStandard.children[0].remove();
  }
}
function personal() {
  const planos = document.querySelector(".standard");
  const bestSeller = document.createElement("p");
  bestSeller.classList.add("bestseller");
  bestSeller.innerText = "BESTSELLER";
  planos.insertAdjacentElement("afterbegin", bestSeller);
  const planosPremium = document.querySelector(".premium");

  const planosPremiumChildren = planosPremium.children[0].innerText;

  if (planosPremiumChildren === "BESTSELLER") {
    planosPremium.children[0].remove();
  }
}

function removeBestBtn() {}

window.addEventListener("load", () => {
  const personalBtn = document.getElementById("personal");
  const enterpriseBtn = document.getElementById("enterprise");

  enterpriseBtn.addEventListener("click", enterprise);
  personalBtn.addEventListener("click", personal);
});
