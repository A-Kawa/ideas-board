import React, { useState } from "react";

export const Context = React.createContext();

export const Provider = props => {
  const [myState, setState] = useState([]);
  return (
    <Context.Provider
      value={{
        myState,
        getFromDB: () => {
          setState([]);
        }
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
