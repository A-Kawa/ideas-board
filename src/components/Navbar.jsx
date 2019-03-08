import React, { useContext } from "react";
import { CategorySelector } from "./CategorySelector";
import { Button } from "semantic-ui-react";
import { Context } from "../store/context";
import "../styles/Navbar.scss";

export const Navbar = () => {
  const context = useContext(Context);
  return (
    <div className="navbar">
      <CategorySelector />
      <Button
        className="button-add"
        size="mini"
        icon="plus circle"
        content="Add"
        onClick={() => {
          context.addElement();
        }}
      />
    </div>
  );
};
