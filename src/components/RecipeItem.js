import React from 'react';

const RecipeItem = ({ recipe }) => {
  return (
    <div className="recipe-item">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <a href={`https://spoonacular.com/recipes/${recipe.title}-${recipe.id}`} target="_blank" rel="noopener noreferrer">View Recipe</a>
    </div>
  );
};

export default RecipeItem;
