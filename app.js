const buttonRecipe = document.querySelector("#button-recipe");
const cardRecipe = document.querySelector("#card-recipe");


const recipes = [
    {
        foodName: "Brokoli Çorbası",
        img: "https://images.pexels.com/photos/5644943/pexels-photo-5644943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        serving: "4",
        time: "30",
        ingredients: "",
        making: "",
    }
]

buttonRecipe.addEventListener("click", getRecipe = () => {
    cardRecipe.classList.toggle("hide")
})
