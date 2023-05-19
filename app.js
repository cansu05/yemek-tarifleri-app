const buttonRecipe = document.querySelector("#button-recipe");
const cardRecipe = document.querySelector(".card-recipe");

let recipesList = [];

buttonRecipe.addEventListener(
  "click",
  (toggleRecipe = () => {
    cardRecipe.classList.toggle("show");
  })
);

const createRecipesCard = () => {
  fetch("./recipes.json")
    .then((response) => response.json())
    .then((recipes) => {
      // recipes.forEach((item) => {

        const ingredientList = document.getElementById("ingredients");

        recipes.forEach((item) => {
          const ingredientListLi = `<li>${item.making}</li>`;
          ingredientList.insertAdjacentHTML("beforeend", ingredientListLi);
        });

        const makingList = document.getElementById("making");

        recipes.forEach((item) => {
          const makingListLi = `<li>${item.making}</li>`;
          makingList.insertAdjacentHTML("beforeend", makingListLi );
        });

        const ingredientTitle = document.querySelector(".ingredients-title");
        
        recipes.forEach((item) => {
          const jsonMetin = item.foodName;
          ingredientTitle.insertAdjacentText("afterbegin", jsonMetin);
        });

        recipes.forEach((item) => {
          const jsonMetin = item.foodName;
          ingredientTitle.insertAdjacentText("afterbegin", jsonMetin);
        });
      // })
      
    })
    .catch((error) => {
      console.error("JSON verisi alınamadı:", error);
    });
}; 






createRecipesCard ()



