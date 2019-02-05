import React, { useState } from "react";
import { apiAdress } from "../const/dataForms";
export const Context = React.createContext();

export const Provider = props => {
  const [myState, setState] = useState([]);
  return (
    <Context.Provider
      value={{
        myState,
        getFromDB: () => {
          fetch(apiAdress)
            .then(res => res.json().then(json => setState(json)))
            .catch(err => {
              setState("Error");
            });
        }
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
