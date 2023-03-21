"use strict";

const btn = document.querySelector(".btn");
const fact = document.querySelector(".fact");
const btnsCategory = document.querySelector(".btnsCategory");

const fetchCategories = () => {
  fetch("https://api.chucknorris.io/jokes/categories")
    .then((res) => res.json())
    .then((data) => {
      displayCategory(data);

      const allBtns = document.querySelectorAll(".category");

      allBtns.forEach((el) => {
        el.addEventListener("click", () => {
          categoryFact(el.textContent);
        });
      });
    })
    .catch((error) => console.log(error));
};
fetchCategories();

const randomeFact = () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      fact.textContent = data.value;
    })
    .catch((error) => console.log(error));
};
btn.addEventListener("click", () => {
  randomeFact();
});

// display the available categories, create buttons
const displayCategory = (categories) => {
  categories.forEach((el) => {
    const html = `<button class="category">${el}</button>`;
    btnsCategory.insertAdjacentHTML("afterbegin", html);
  });
};

const categoryFact = (category) => {
  fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((res) => res.json())
    .then((data) => {
      fact.textContent = data.value;
    })
    .catch((error) => console.log(error));
};
