export interface IngredientValue {
	nameOfIngre: string;
	quantity: number;
}

export interface RecipeValue {
	name: string;
	imageUrl: string;
	description: string;
	ingredients: IngredientValue[];
}
