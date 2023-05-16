const buttonRecipe = document.querySelector("#button-recipe");
const cardRecipe = document.querySelector(".card-recipe");

let recipesList = [];

buttonRecipe.addEventListener(
  "click",
  (toggleRecipe = () => {
    cardRecipe.classList.toggle("show");
  })
);

const getRecipes = () => {
  fetch("./recipes.json")
    .then((res) => res.json())
    .then((recipes) => (recipesList = recipes));
};

getRecipes();

const createRecipesItemHtml = () => {
  const recipesListElement = document.querySelector(".recipes__list");
  let recipesListHtml = "";
  recipesList.forEach((recipe) => {
    recipesListHtml += `
    
    <div class="card-item recipes__list">
      <img class="image" src="${recipe.img}" alt="" />
      <h2>${recipe.foodName}</h2>
          
      <div class="button">
        <button id="button-recipe" onclick="toggleRecipe">
          <i class="button-icon fa-solid fa-angles-down"></i>
        </button>
      </div>
    </div>
    <!-- card recipe başlangıç-->
    <div class="card-recipe">
      <div class="recipe-icon">
        <div class="recipe-serving-icon">
          <i class="fa-solid fa-utensils"></i>
          <h5>${recipe.serving} Kişilik</h5>
        </div>
        <div class="recipe-time-icon">
          <i class="fa-regular fa-clock"></i>
          <h5>
            Pişme Süresi <br />
            ${recipe.time}dk
          </h5>
        </div>
      </div>
      <div class="recipe">
        <h3 id="recipe-title">${recipe.foodName}  Tarifi İçin Malzemeler</h3>
        <ul id="ingredients">
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
        <h3 id="recipe-title">${recipe.foodName} Tarifi Nasıl Yapılır?</h3>
        <ol id="making">
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </li>
        </ol>
      </div>
    </div>
    <!-- card recipe bitiş-->

    `;
  });

  recipesListElement.innerHTML = recipesListHtml;
};

setTimeout(() => {
  createRecipesItemHtml();
}, 100);
