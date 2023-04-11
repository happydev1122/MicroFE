import { Button, Col } from "antd";
import { Field, Form, Formik, FormikProps } from "formik";
import React from "react";
import InputField from "../custom-fields/InputField";
import { IngredientValue } from "../recipe.model";
import * as Yup from "yup";

const initialValues: IngredientValue = {
	nameOfIngre: "",
	quantity: 0,
};

const validationSchema = Yup.object().shape({
	nameOfIngre: Yup.string().required("Name is required"),
	quantity: Yup.number()
		.required("Amount is required")
		.min(1, "Amount must be more than 1"),
});

const ShoppingForm = () => {
	return (
		<div>
			<Col span={6} style={{ marginTop: 30 }}>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(values, { resetForm }) => {
						console.log(values);
						resetForm({});
					}}
				>
					{(formikProps: FormikProps<any>) => {
						return (
							<Form>
								<Field name="nameOfIngre" component={InputField} label="Name" />
								<Field name="quantity" component={InputField} label="Amount" />

								<Button type="primary" htmlType="submit">
									Add
								</Button>
								<Button type="primary" danger htmlType="submit">
									Delete
								</Button>
								<Button
									type="primary"
									onClick={() => {
										formikProps.resetForm({});
									}}
								>
									Clear
								</Button>
							</Form>
						);
					}}
				</Formik>
			</Col>
		</div>
	);
};

export default ShoppingForm;
