import React, { useState } from "react";
import { mainForm } from "../const/dataForms";

export const Context = React.createContext();

export const Provider = props => {
  const [myState, setState] = useState([mainForm]);
  return (
    <Context.Provider
      value={{
        myState,
        getFromDB: data => {
          setState(data);
        }
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
