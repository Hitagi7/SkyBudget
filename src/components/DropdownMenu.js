import React from "react";
import { MenuItems } from "../components/MenuItems";
import "./DropdownMenu.css";

function DropdownMenu() {
    return (
        <ul className="dropdown-menu">
            {MenuItems.map((item, index) => (
                <li key={index}>
                    {item.title}
                </li>
            ))}
        </ul>
    );
}

export default DropdownMenu;
