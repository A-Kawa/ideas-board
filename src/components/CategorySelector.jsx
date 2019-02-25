import React, { useContext } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { categories } from "../const/dataForms";
import { Context } from "../store/context";

export const CategorySelector = () => {
  const context = useContext(Context);

  return (
    <Menu size="small" className="menu">
      <Dropdown item text={context.category} className="dropdown">
        <Dropdown.Menu className="dropdown-menu">
          {categories.category.map(item => {
            return (
              <Dropdown.Item
                onClick={(e, data) => {
                  context.changeCategory(data.value);
                }}
                className="dropdown-item"
                key={item}
                value={item}
              >
                {item}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};
