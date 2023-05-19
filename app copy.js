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
  let recipeCard = "<div class=>kıj87huy6</div>"
  recipesList.forEach((recipe) => {
    
    
      

  });

 
};

setTimeout(() => {
  createRecipesItemHtml();
}, 100);
// const createRecipeCard = () => {
//   recipesList.forEach((recipe) => {
//     const hServing = document.querySelector("#serving");
    
//     hServing.insertAdjacentHTML("afterbegin", `${recipe.serving}`)
//   })}

// createRecipeCard()

// const createRecipesMakingList= () => {
//   const makingTitle = document.querySelector(".making-title");
//   recipesList.forEach((recipe) => {
//     makingTitle.insertAdjacentHTML("afterend", `<li>${recipe.making}</li>`)
    
//   });

  
// };

// setTimeout(() => {
//   createRecipesItemHtml();
// }, 100);
