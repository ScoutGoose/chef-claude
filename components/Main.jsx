import { useState } from "react";
import getRecipeFromChefClaude from "../ai.js";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";
export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function getRecipe() {
    const recipe = await getRecipeFromChefClaude(ingredients);
    setRecipe(recipe);
  }

  return (
    <main>
      <form action={addIngredient} className="form-container">
        <input
          type="text"
          className="ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
          required
        />
        <button className="btn add-btn">Add ingredient</button>
      </form>
      <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
}
