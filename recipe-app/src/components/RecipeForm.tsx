import { CloseOutlined } from "@ant-design/icons";
import { Button, Col, Row, Tooltip } from "antd";
import {
	FastField,
	Field,
	FieldArray,
	Form,
	Formik,
	FormikProps,
} from "formik";
import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import * as Yup from "yup";
import InputField from "../custom-fields/InputField";
import { IngredientValue, RecipeValue } from "../recipe.model";

interface Props {
	onSaveRecipe: (values: RecipeValue, id?: any) => void;
	recipeList?: RecipeValue[];
}

const validation = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	imageUrl: Yup.string()
		.required("Image URL is required")
		.url("URL is not valid")
		.matches(/\.(jpeg|jpg|gif|png)$/, "URL is not image URL"),
	description: Yup.string().required("Description is required"),
	ingredients: Yup.array(
		Yup.object().shape({
			nameOfIngre: Yup.string().required("Name of ingredient is required"),
			quantity: Yup.number()
				.required("Quantity is required")
				.integer("Quantity must be integer")
				.moreThan(0, "Quantity more than 0"),
		})
	),
});

const initialValues: RecipeValue = {
	name: "",
	imageUrl: "",
	description: "",
	ingredients: [],
};

const RecipeForm = ({ onSaveRecipe, recipeList }: Props) => {
	const history = useHistory();
	const { id } = useParams() as { id: string };
	return (
		<div>
			<Formik
				initialValues={
					recipeList && id !== undefined ? recipeList[+id] : initialValues
				}
				validationSchema={validation}
				onSubmit={(values) => {
					if (id !== undefined) {
						onSaveRecipe(values, id);
					}
					onSaveRecipe(values);
					history.push("/recipes");
				}}
			>
				{(formikProps: FormikProps<any>) => {
					const { values, errors, touched } = formikProps;
					return (
						<Form>
							<Button
								type="primary"
								htmlType="submit"
								disabled={!formikProps.isValid ? true : false}
							>
								Save
							</Button>
							<Button type="primary" htmlType="submit" danger>
								<Link to="/recipes">Cancel</Link>
							</Button>
							<FastField name="name" component={InputField} label="Name" />
							<FastField
								name="imageUrl"
								component={InputField}
								label="Image URL"
							/>
							{values.imageUrl && (
								<img
									src={values.imageUrl}
									alt="Image of food"
									style={{ width: 500 }}
								/>
							)}
							<FastField
								name="description"
								component={InputField}
								label="Description"
								type="text-area"
							/>
							<FieldArray name="ingredients">
								{(fieldArrayProps) => {
									return (
										<div>
											{values.ingredients.map(
												(ingredient: IngredientValue, index: number) => {
													return (
														<Row key={index}>
															<Col span={12}>
																<Field
																	name={`ingredients[${index}].nameOfIngre`}
																	component={InputField}
																/>
															</Col>
															<Col span={4} offset={3}>
																<Field
																	name={`ingredients[${index}].quantity`}
																	component={InputField}
																	type="number"
																/>
															</Col>
															<Col span={1} offset={3}>
																<Tooltip title="Delete">
																	<Button
																		danger
																		type="primary"
																		icon={<CloseOutlined />}
																		onClick={() => {
																			fieldArrayProps.remove(index);
																		}}
																	/>
																</Tooltip>
															</Col>
														</Row>
													);
												}
											)}
											<hr />
											<Button
												type="primary"
												onClick={() => {
													fieldArrayProps.push({
														nameOfIngre: "",
														quantity: 1,
													});
												}}
											>
												Add Ingredient
											</Button>
										</div>
									);
								}}
							</FieldArray>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default RecipeForm;
