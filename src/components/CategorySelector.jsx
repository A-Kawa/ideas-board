import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { categories } from "../const/dataForms";

export const CategorySelector = () => {
  return (
    <Menu vertical className="menu">
      <Dropdown item text="Categories" className="dropdown">
        <Dropdown.Menu className="dropdown-menu">
          {categories.category.map(item => {
            return (
              <Dropdown.Item className="dropdown-item" key={item}>
                {item}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};
