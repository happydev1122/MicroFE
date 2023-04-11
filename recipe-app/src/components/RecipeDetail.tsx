import React from "react";
import { useHistory, useParams } from "react-router";
import { RecipeValue } from "../recipe.model";
import DropdownComponent from "./DropdownComponent";

interface Props {
	recipeList: RecipeValue[];
}

const options = ["To Shopping List", "Edit Recipe", "Delete Recipe"];

const RecipeDetail = ({ recipeList }: Props) => {
	const { id } = useParams() as { id: string };
	const history = useHistory();
	const handleSelectOption = (option: number) => {
		switch (option) {
			case 0:
				// let ingredientValues = [...recipesList[idNumber].ingredients];
				// handleAddIngredient(ingredientValues);
				// history.push("/shopping-list");
				break;
			case 1:
				history.push(`/recipes/edit/${id}`);
				break;
			case 2:
				// let newRecipeList = recipesList.filter((recipe, index) => {
				//   return index !== idNumber;
				// });
				// handleRemoveRecipe(newRecipeList);
				history.push("/recipes");
				break;
			default:
				break;
		}
	};
	return (
		<div>
			<img
				src={recipeList[+id].imageUrl}
				alt="Image of food"
				style={{ width: 500 }}
			/>
			<h1>{recipeList[+id].name}</h1>
			<DropdownComponent
				options={options}
				onSelectOption={handleSelectOption}
			/>
		</div>
	);
};

export default RecipeDetail;
