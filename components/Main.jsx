import React, { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const ingredientsListItems = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient);
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button className="btn add-btn">Add ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}
