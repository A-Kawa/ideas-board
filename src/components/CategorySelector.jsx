import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { categories } from "../const/dataForms";

export const CategorySelector = () => {
  return (
    <Menu vertical>
      <Dropdown item text="Categories">
        <Dropdown.Menu>
          {categories.category.map(item => {
            return <Dropdown.Item key={item}>{item}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};
