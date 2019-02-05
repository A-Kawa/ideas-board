import React from "react";
import { CategorySelector } from "./CategorySelector";
import { Button } from "semantic-ui-react";

export const Navbar = () => {
  return (
    <div>
      <CategorySelector />
      <Button icon="save" content="Save All" />
      <Button icon="plus circle" content="Add" />
    </div>
  );
};
