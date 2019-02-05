import React from "react";
import { CategorySelector } from "./CategorySelector";
import { Button } from "semantic-ui-react";
import "../styles/Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <CategorySelector />
      <Button
        className="button-save"
        size="mini"
        icon="save"
        content="Save All"
      />
      <Button
        className="button-add"
        size="mini"
        icon="plus circle"
        content="Add"
      />
    </div>
  );
};
