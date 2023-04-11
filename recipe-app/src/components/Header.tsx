import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<Menu mode="horizontal">
				<Menu.Item key="brand">Recipe Book</Menu.Item>
				<Menu.Item key="recipes">
					<Link to="/recipes">Recipes</Link>
				</Menu.Item>
				<Menu.Item key="shopping-list">
					<Link to="/shopping-list">Shopping List</Link>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default Header;
