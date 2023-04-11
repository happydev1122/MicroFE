import { Card } from "antd";
import React from "react";
import { RecipeValue } from "../recipe.model";
import RecipeItem from "./RecipeItem";

interface Props {
	recipeList: RecipeValue[];
}
const RecipeList = ({ recipeList }: Props) => {
	return (
		<div>
			{recipeList.map((recipeItem, index) => {
				return <RecipeItem key={index} recipeItem={recipeItem} order={index} />;
			})}
		</div>
	);
};

export default RecipeList;
