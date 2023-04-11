import { Menu } from "antd";
import React, { useState } from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";

interface Props {
	folders: string[];
}
const EmailBoxComponent = ({ folders }: Props) => {
	const [selectedFolder, setSelectedFolder] = useState(folders[0]);
	const { pathname } = useLocation();
	// const match = useRouteMatch();
	// console.log(match);
	const path = pathname.split("/")[1];

	const handleSelectFolder = (folder: string) => {
		setSelectedFolder(folder);
	};
	return (
		<div>
			<Menu mode="inline" selectedKeys={[selectedFolder]}>
				{folders?.map((folder) => {
					return (
						<Menu.Item key={folder} onClick={() => handleSelectFolder(folder)}>
							<Link to={`/${path}/${folder}`}>{folder}</Link>
						</Menu.Item>
					);
				})}
			</Menu>
		</div>
	);
};

export default EmailBoxComponent;
