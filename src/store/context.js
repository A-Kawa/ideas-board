import React, { useState } from "react";
import { apiAdressGet, mainForm } from "../const/dataForms";
export const Context = React.createContext();

export const Provider = props => {
  const [myState, setState] = useState([]);
  const [category, setCategory] = useState("All");
  return (
    <Context.Provider
      value={{
        myState,
        category,
        getFromDB: () => {
          fetch(apiAdressGet)
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
          console.log(object, index);
          setState(
            Object.values({
              ...myState,
              ...{ [index]: object }
            })
          );
        },
        addElement: () => {
          setState([...myState, mainForm]);
        },
        deleteElement: element => {
          setState(
            myState.filter(el => {
              return el !== element;
            })
          );
        }
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
