// script.js

document.addEventListener("DOMContentLoaded", () => {
  /* ============ 공통: 가격 합산 ============ */

  let outerPrice = 0; // 상의(아우터)
  let bottomPrice = 0; // 하의(치마)
  let bagPrice = 0; // 가방

  const totalPriceEl = document.getElementById("total-price");

  function updateTotalPrice() {
    const total = outerPrice + bottomPrice + bagPrice;
    if (!totalPriceEl) return;

    totalPriceEl.textContent = total.toLocaleString();
  }

  /* ============ 상의(아우터) ============ */

  const price1 = document.querySelector(".price-1");
  const price2 = document.querySelector(".price-2");
  const price3 = document.querySelector(".price-3");

  const outer1 = document.getElementById("outer1");
  const outer2 = document.getElementById("outer2");
  const outer3 = document.getElementById("outer3");

  const outers = [outer1, outer2, outer3];

  /* ============ 하의(바텀) ============ */

  const price4 = document.querySelector(".price-4");
  const price5 = document.querySelector(".price-5");
  const price6 = document.querySelector(".price-6");

  const bottom1 = document.getElementById("bottom1");
  const bottom2 = document.getElementById("bottom2");
  const bottom3 = document.getElementById("bottom3");

  const bottoms = [bottom1, bottom2, bottom3];

  /* ============ 가방 ============ */

  const price7 = document.querySelector(".price-7");
  const price8 = document.querySelector(".price-8");
  const price9 = document.querySelector(".price-9");

  const bag1 = document.getElementById("bag1");
  const bag2 = document.getElementById("bag2");
  const bag3 = document.getElementById("bag3");

  const bags = [bag1, bag2, bag3];

  /* ============ 공통 ============ */

  function showOnly(list, target) {
    list.forEach((item) => {
      if (!item) return;

      if (item === target) {
        item.classList.add("show", "flash");
        setTimeout(() => item.classList.remove("flash"), 300);
      } else {
        item.classList.remove("show", "flash");
      }
    });
  }

  price1.addEventListener("click", () => {
    showOnly(outers, outer1);
    outerPrice = 58000;
    updateTotalPrice();
  });

  price2.addEventListener("click", () => {
    showOnly(outers, outer2);
    outerPrice = 139000;
    updateTotalPrice();
  });

  price3.addEventListener("click", () => {
    showOnly(outers, outer3);
    outerPrice = 139000;
    updateTotalPrice();
  });

  price4.addEventListener("click", () => {
    showOnly(bottoms, bottom1);
    bottomPrice = 89000;
    updateTotalPrice();
  });

  price5.addEventListener("click", () => {
    showOnly(bottoms, bottom2);
    bottomPrice = 69000;
    updateTotalPrice();
  });

  price6.addEventListener("click", () => {
    showOnly(bottoms, bottom3);
    bottomPrice = 45000;
    updateTotalPrice();
  });

  price7.addEventListener("click", () => {
    showOnly(bags, bag1);
    bagPrice = 160200;
    updateTotalPrice();
  });

  price8.addEventListener("click", () => {
    showOnly(bags, bag2);
    bagPrice = 158400;
    updateTotalPrice();
  });

  price9.addEventListener("click", () => {
    showOnly(bags, bag3);
    bagPrice = 248000;
    updateTotalPrice();
  });
});

const priceNodes = document.querySelectorAll(".price");
const labelNodes = document.querySelectorAll(".item-label");

priceNodes.forEach((priceEl, index) => {
  const labelEl = labelNodes[index];
  if (!labelEl) return;
  priceEl.addEventListener("mouseenter", () => {
    labelEl.classList.add("show");
  });

  priceEl.addEventListener("mouseleave", () => {
    labelEl.classList.remove("show");
  });
});
