import React, { useState } from "react";
import { HomeDropdown, ExperienceDropdown, AchievementsDropdown, BlogsDropdown, ContactDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown(itemName) {
  const [dropdown, setDropdown] = useState(false);
  const dropdowns = () => {
    let itmNm = Object.values(itemName)
    if(itmNm[0] === 'Home'){
      return HomeDropdown;
    }
    if(itmNm[0] === 'Experience'){
      return ExperienceDropdown;
    }
    if(itmNm[0] === 'Achievements'){
      return AchievementsDropdown;
    }
    if(itmNm[0] === 'Blogs'){
      return BlogsDropdown;
    }
    if(itmNm[0] === 'Contact'){
      return ContactDropdown;
    }
  }
  
  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {dropdowns().map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
