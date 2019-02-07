import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { categories } from "../const/dataForms";

export const CategorySelector = () => {
  return (
    <Menu size="small" className="menu">
      <Dropdown item text="Category" className="dropdown">
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
