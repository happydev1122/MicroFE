import { Button, Dropdown, Menu } from "antd";
import React, { useEffect, useState } from "react";

interface Props {
	options: string[];
	onSelectOption: (index: number) => void;
}

const DropdownComponent = ({ options, onSelectOption }: Props) => {
	const [menu, setMenu] = useState(<Menu></Menu>);
	useEffect(() => {
		const menu2 = (
			<Menu>
				{options.map((option: string, index: number) => {
					return (
						<Menu.Item key={index} onClick={() => onSelectOption(index)}>
							{option}
						</Menu.Item>
					);
				})}
			</Menu>
		);
		setMenu(menu2);
	}, [options]);
	return (
		<div>
			<Dropdown overlay={menu} placement="bottomCenter">
				<Button>Manage Recipe</Button>
			</Dropdown>
		</div>
	);
};

export default DropdownComponent;
