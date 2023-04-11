import { Form, Input } from "antd";
import React from "react";

interface Props {
	field: any;
	form: any;

	type: string;
	label: string;
	placeholder: string;
	disabled: boolean;
}

const InputField = ({
	field,
	form,
	type,
	label,
	placeholder,
	disabled,
}: Props) => {
	const { name } = field;
	const { errors, touched } = form;
	return (
		<div>
			<Form.Item
				label={label}
				hasFeedback
				validateStatus={errors[name] ? "error" : "success"}
				help={errors[name]}
			>
				{type === "text-area" ? (
					<Input.TextArea
						{...field}
						id={name}
						placeholder={placeholder}
						disabled={disabled}
						autoSize={{ minRows: 6, maxRows: 10 }}
					/>
				) : (
					<Input
						{...field}
						id={name}
						placeholder={placeholder}
						type={type}
						disabled={disabled}
					/>
				)}
			</Form.Item>
		</div>
	);
};

InputField.defaultProps = {
	type: "text",
	label: "",
	placeholder: "",
	disabled: false,
};

export default InputField;
