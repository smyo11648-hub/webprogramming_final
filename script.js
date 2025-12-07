// script.js

document.addEventListener("DOMContentLoaded", () => {
  /* ============== 상의(아우터) ============== */

  const price1 = document.querySelector(".price-1");
  const price2 = document.querySelector(".price-2");
  const price3 = document.querySelector(".price-3");

  const outer1 = document.getElementById("outer1");
  const outer2 = document.getElementById("outer2");
  const outer3 = document.getElementById("outer3");

  const outers = [outer1, outer2, outer3];

  /* ============== 하의(바텀) ============== */

  const price4 = document.querySelector(".price-4");
  const price5 = document.querySelector(".price-5");
  const price6 = document.querySelector(".price-6");

  const bottom1 = document.getElementById("bottom1");
  const bottom2 = document.getElementById("bottom2");
  const bottom3 = document.getElementById("bottom3");

  const bottoms = [bottom1, bottom2, bottom3];

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

  // 상의
  price1?.addEventListener("click", () => showOnly(outers, outer1));
  price2?.addEventListener("click", () => showOnly(outers, outer2));
  price3?.addEventListener("click", () => showOnly(outers, outer3));

  // 하의
  price4?.addEventListener("click", () => showOnly(bottoms, bottom1));
  price5?.addEventListener("click", () => showOnly(bottoms, bottom2));
  price6?.addEventListener("click", () => showOnly(bottoms, bottom3));
});
