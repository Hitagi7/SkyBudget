import React from "react";
import { MenuItems } from "../components/MenuItems";
import "./DropdownMenu.css";

function DropdownMenu({ setProvinceTitle }) {
  return (
    <ul className="dropdown-menu">
      {MenuItems.map((item, index) => (
        <li
          key={index}
          onClick={(e) => {
            setProvinceTitle(item.title);
          }}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;
