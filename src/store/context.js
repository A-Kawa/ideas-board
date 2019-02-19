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
        changeCategorySingleElement: (newValue, element) => {
          console.log(newValue, element);
          let newElement = {
            category: newValue,
            description: element.description,
            title: element.title,
            _v: element._v,
            _id: element._id
          };
          Object.assign(...myState, newElement); //here will be connection to end point ;)
          console.log(newElement);
          console.log(myState);
        }
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
