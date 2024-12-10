import React from "react";
import { MenuItems } from "../components/MenuItems";
import "./DropdownMenu.css";

function DropdownMenu({ updateInput }) {
  return (
    <ul className="dropdown-menu">
      {MenuItems.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            updateInput("provinceTitle", item.title);
            updateInput("provinceDistance", item.distance);
          }}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;
