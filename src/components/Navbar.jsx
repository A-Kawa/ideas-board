import React from "react";
import { CategorySelector } from "./CategorySelector";
import { Button } from "semantic-ui-react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <CategorySelector />
      <Button className="button-save" icon="save" content="Save All" />
      <Button className="button-add" icon="plus circle" content="Add" />
    </div>
  );
};
