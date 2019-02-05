import React from "react";
import { headerName } from "../const/texts";
import "../styles/Header.scss";

export const Header = () => {
  return (
    <div>
      <h1 className="header-name">{headerName}</h1>
    </div>
  );
};
