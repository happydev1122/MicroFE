import { Card, Typography } from "antd";
import React from "react";
import { useHistory } from "react-router";
import { RecipeValue } from "../recipe.model";

interface Props {
	recipeItem: RecipeValue;
	order: number;
}

const { Title } = Typography;

const RecipeItem = ({ recipeItem, order }: Props) => {
	const history = useHistory();
	const handleSelectItem = () => {
		history.push(`/recipes/detail/${order}`);
	};
	return (
		<div>
			{/* <Card
				title={recipeItem.name}
				style={{ width: 300 }}
				hoverable
				extra={
					<img
						alt="example"
						src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
						style={{ height: 100 }}
					/>
				}
			>
				<p>Card content</p>
				<p>Card content</p>
				<p>Card content</p>
			</Card> */}
			<Card
				style={{ width: 500, marginBottom: 30 }}
				hoverable
				onClick={handleSelectItem}
			>
				<Title level={4}>{recipeItem.name}</Title>
				<img
					src={recipeItem.imageUrl}
					alt="Recipe Food"
					style={{ width: 100 }}
				/>
				<p>{recipeItem.description}</p>
			</Card>
		</div>
	);
};

export default RecipeItem;
