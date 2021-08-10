const addBtn = document.querySelector(".addBtn");
const searched = document.getElementById("ingredientsSearched");
const input = document.querySelector("input");
input.addEventListener("change", updateValue);
let searchIngredients = [];
let ingredients = searchIngredients.join();
let ingredient = "";
function updateValue(e) {
  ingredient = e.target.value.toLowerCase();
}

// $(document).ready(function () {
//   embedElements();
// });

function addIngredients(ingredient) {
  // console.log(ingredient);
  searchIngredients.push(ingredient);
  console.log(ingredients);
  // console.log(searchIngredients);
}

// const myArray = ["kale", "cheese", "onions"];
function embedElements() {
  searched.innerHTML = "";
  searchIngredients.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    searched.appendChild(li);
  });
}

addBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  $(input).val("");
  await addIngredients(ingredient);
  embedElements();
});
// embedElements();

const ingredientSearchHandler = async (event) => {
  event.preventDefault();

  const searchIngredients = ingredients;

  if (searchIngredients) {
    const response = await fetch("/api/userFavoriteRoutes/personalHomepage", {
      method: "GET",
      body: JSON.stringify({ searchIngredient }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);
  }
};

document
  .querySelector("#button-addon1")
  .addEventListener("click", ingredientSearchHandler);
