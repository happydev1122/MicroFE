import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import Header from "./components/Header";
import RecipePage from "./components/RecipePage";
import { IngredientValue, RecipeValue } from "./recipe.model";
import ShoppingList from "./components/ShoppingList";

const App = () => {
	const [recipeList, setRecipeList] = useState<RecipeValue[]>([]);
	const [ingredientList, setIngredientList] = useState<IngredientValue[]>();

	const handleSaveRecipe = (values: RecipeValue, id: any) => {
		if (id !== undefined) {
			let newRecipeList = [...recipeList];
			newRecipeList[+id] = values;
			setRecipeList(newRecipeList);
		}
		setRecipeList([...recipeList, values]);
	};
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Redirect exact from="/" to="/recipes" />
				<Route path="/recipes">
					<RecipePage recipeList={recipeList} onSaveRecipe={handleSaveRecipe} />
				</Route>
				<Route path="/shopping-list">
					<ShoppingList />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
