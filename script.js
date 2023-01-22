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
<<<<<<< HEAD

  const priceEnterpriseBasic = document.querySelector(".valor-basic");
  priceEnterpriseBasic.innerHTML = "$29,99";
}
function personal() {
  const planos = document.querySelector(".standard");
  const bestSeller = document.createElement("p");
  bestSeller.classList.add("bestseller");
  bestSeller.innerText = "BESTSELLER";
  planos.insertAdjacentElement("afterbegin", bestSeller);
  const planosPremium = document.querySelector(".premium");

=======
}
function personal() {
  const planos = document.querySelector(".standard");
  const bestSeller = document.createElement("p");
  bestSeller.classList.add("bestseller");
  bestSeller.innerText = "BESTSELLER";
  planos.insertAdjacentElement("afterbegin", bestSeller);
  const planosPremium = document.querySelector(".premium");

>>>>>>> 003e1259b9bcc6bc8e3dd543e9c398bf33341519
  const planosPremiumChildren = planosPremium.children[0].innerText;

  if (planosPremiumChildren === "BESTSELLER") {
    planosPremium.children[0].remove();
  }
<<<<<<< HEAD
  const priceEnterpriseBasic = document.querySelector(".valor-basic");
  priceEnterpriseBasic.innerHTML = "$19,99";
=======
>>>>>>> 003e1259b9bcc6bc8e3dd543e9c398bf33341519
}

function removeBestBtn() {}

window.addEventListener("load", () => {
  const personalBtn = document.getElementById("personal");
  const enterpriseBtn = document.getElementById("enterprise");

  enterpriseBtn.addEventListener("click", enterprise);
  personalBtn.addEventListener("click", personal);
});
