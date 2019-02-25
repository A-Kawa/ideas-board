import React, { useContext } from "react";
import { Context } from "../store/context";
import { SingleComponent } from "./IdeaSingleComponent";

export const IdeasList = () => {
  const context = useContext(Context);

  return (
    <div className="idea">
      {context.myState.map(element => {
        if (context.category === "All") {
          return (
            <SingleComponent
              key={element._id ? element._id : context.myState.indexOf(element)}
              props={element}
            />
          );
        } else {
          if (context.category === element.category) {
            return (
              <SingleComponent
                key={
                  element._id ? element._id : context.myState.indexOf(element)
                }
                props={element}
              />
            );
          }
        }
        return <div key={element._id} />;
      })}
    </div>
  );
};
/*  <SingleComponent
            key={element._id ? element._id : context.myState.indexOf(element)}
            props={element}
          />*/
