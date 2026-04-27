const ImgEl = document.querySelector("#center");
const LeftEl = document.querySelectorAll(".left img");
const ButtonEl = document.querySelector('#button');
const ContainerEl = document.querySelector('.container');
const CloseEl = document.querySelector('#close');
const PlusEl = document.querySelector('#plus');
const MinusEl = document.querySelector('#minus');
const CountEl = document.querySelector('#count');
LeftEl.forEach((img) => {
  img.addEventListener("click", () => {
    ImgEl.src = img.src;
  });
});
ButtonEl.addEventListener(('click'), () => {
  document.body.classList.toggle('black');
  ContainerEl.classList.toggle('hidden');
});
CloseEl.addEventListener(('click'), () => {
  document.body.classList.toggle('black');
  ContainerEl.classList.toggle('hidden');
});
PlusEl.addEventListener(('click'), () => {
  if (Number(CountEl.textContent) < 6) {
    CountEl.textContent = Number(CountEl.textContent) + 1;
  }
});
MinusEl.addEventListener(('click'), () => {
  if (Number(CountEl.textContent) > 0) {
    CountEl.textContent = Number(CountEl.textContent) - 1;
  };
});
