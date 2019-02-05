import React, { useContext } from "react";
import { Context } from "../store/context";

export const IdeasList = () => {
  const context = useContext(Context);
  return (
    <div className="idea">
      <h1>Here will be a ideas list</h1>
    </div>
  );
};
