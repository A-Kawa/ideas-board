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
        changeCategorySingleElement: (newValue, element, index) => {
          let newElement = Object.assign(
            { ...element },
            { category: newValue }
          );

          let copy = Object.assign([], [...myState]);
          copy[index] = Object.assign({}, newElement);
          //here will be connection to end point ;)
          setState(copy);
        }
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
