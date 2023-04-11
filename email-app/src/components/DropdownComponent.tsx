import React, { useEffect, useState } from "react";
import { Menu, Dropdown, Button, Space } from "antd";

interface Props {
	userOptions: string[];
	onSelectedOption: (option: string) => void;
}

const DropdownComponent = ({ userOptions, onSelectedOption }: Props) => {
	const [options, setOptions] = useState<any>();
	const [option, setOption] = useState(userOptions[0]);

	const handleSelectOption = (option: any) => {
		setOption(option);
		onSelectedOption(option);
	};

	useEffect(() => {
		const menu = (
			<Menu>
				{userOptions.map((option, index) => {
					return (
						<Menu.Item key={index} onClick={() => handleSelectOption(option)}>
							{option}
						</Menu.Item>
					);
				})}
			</Menu>
		);
		setOptions(menu);
	}, [userOptions]);

	return (
		<div>
			<Space direction="vertical">
				<Dropdown overlay={options} placement="bottomCenter">
					<Button>{option}</Button>
				</Dropdown>
			</Space>
		</div>
	);
};

export default DropdownComponent;
