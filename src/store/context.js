import React, { useState } from "react";
import { apiAdress } from "../const/dataForms";
export const Context = React.createContext();

export const Provider = props => {
  const [myState, setState] = useState([]);
  const [category, setCategory] = useState("unselected");
  return (
    <Context.Provider
      value={{
        myState,
        category,
        getFromDB: () => {
          fetch(apiAdress)
            .then(res => res.json().then(json => setState(json)))
            .catch(err => {
              // eslint-disable-next-line no-console
              console.error(err);
              setState("Error");
            });
        },
        changeCategory: value => {
          setCategory(value);
        },
        changeSingleElement: (object, index) => {
          setState(
            Object.assign(
              [...myState],
              Object.assign(
                ...myState,
                (myState[index] = Object.assign({}, object))
              )
            )
          );
        }
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
