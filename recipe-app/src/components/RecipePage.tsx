import { Button, Col, Row } from "antd";
import React from "react";
import { Route, useParams } from "react-router";
import { Link } from "react-router-dom";
import { RecipeValue } from "../recipe.model";
import FormTest from "./FormTest";
import RecipeDetail from "./RecipeDetail";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";

interface Props {
	recipeList: any;
	onSaveRecipe: (values: RecipeValue, id?: any) => void;
}

const RecipePage = ({ recipeList, onSaveRecipe }: Props) => {
	const handleSaveRecipe = (values: RecipeValue, id: any) => {
		if (id !== undefined) {
			onSaveRecipe(values, id);
		}
		onSaveRecipe(values);
	};
	return (
		<div>
			<Row justify="center">
				<Col span={9}>
					<br />
					<Button type="primary">
						<Link to="/recipes/create">New Recipe</Link>
					</Button>
					<p />
					<hr />
					<Route exact path="/recipes">
						<RecipeList recipeList={recipeList} />
					</Route>
				</Col>
				<Col span={13} offset={1}>
					<br />
					<Route exact path="/recipes">
						<h1>Please select a recipe!</h1>
					</Route>
					<Route path="/recipes/create">
						<RecipeForm onSaveRecipe={handleSaveRecipe} />
					</Route>
					<Route path="/recipes/detail/:id">
						<RecipeDetail recipeList={recipeList} />
					</Route>
					<Route path="/recipes/edit/:id">
						<RecipeForm
							onSaveRecipe={handleSaveRecipe}
							recipeList={recipeList}
						/>
					</Route>
				</Col>
			</Row>
		</div>
	);
};

export default RecipePage;
