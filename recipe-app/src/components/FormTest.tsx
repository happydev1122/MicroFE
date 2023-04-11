import { Form, Input, Select } from "antd";
import React from "react";

const { Option } = Select;

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 5 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 12 },
	},
};

const FormTest = () => {
	return (
		<div>
			<Form {...formItemLayout}>
				<Form.Item label="Success" hasFeedback validateStatus="success">
					<Input placeholder="I'm the content" id="success" />
				</Form.Item>

				<Form.Item
					label="Fail"
					hasFeedback
					validateStatus="error"
					help="Should be combination of numbers & alphabets"
				>
					<Input placeholder="unavailable choice" id="error2" />
				</Form.Item>
			</Form>
		</div>
	);
};

export default FormTest;
