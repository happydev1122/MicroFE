import { Menu } from "antd";
import React, { useState } from "react";
import {
	MailOutlined,
	PhoneOutlined,
	InfoCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import DropdownComponent from "./DropdownComponent";

interface Props {
	userOptions: string[];
	onSelectedOption: (option: string) => void;
}

const Header = ({ userOptions, onSelectedOption }: Props) => {
	const [current, setCurrent] = useState("messages");

	const handleClick = (event: any) => {
		if (event.key !== "dropdown") {
			setCurrent(event.key);
		}
	};

	const handleSelectedOption = (option: string) => {
		onSelectedOption(option);
	};

	return (
		<div>
			<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
				<Menu.Item key="messages" icon={<MailOutlined />}>
					<Link to="/messages/inbox">Messages </Link>
				</Menu.Item>
				<Menu.Item key="contacts" icon={<PhoneOutlined />}>
					<Link to="/contacts">Contacts </Link>
				</Menu.Item>
				<Menu.Item key="preferences" icon={<InfoCircleOutlined />}>
					<Link to="/preferences">Preferences </Link>
				</Menu.Item>
				<Menu.Item key="dropdown">
					<DropdownComponent
						userOptions={userOptions}
						onSelectedOption={handleSelectedOption}
					/>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default Header;
