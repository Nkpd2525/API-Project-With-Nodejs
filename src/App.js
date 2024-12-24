import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  const fetchRecipes = async (query) => {
    const API_KEY = 'fe16537d89044b27886e32347a90a5c9'; // Replace with your Spoonacular API key
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`;

    try {
      const response = await axios.get(url);
      setRecipes(response.data.results);  // Set recipes data to state
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
    fetchRecipes(searchTerm);
  };

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
