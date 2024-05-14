"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

console.log(btnsShowModal);

const openModal = function () {
  console.log("Button clicked!");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// btnCloseModal.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

//keyboard events

document.addEventListener("keydown", function (e) {
  // console.log(e);
  // console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    // console.log("Esc was pressed");
    closeModal();
  }
});
