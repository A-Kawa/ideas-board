import React, { useContext } from "react";
import { Context } from "../store/context";
import { SingleComponent } from "./IdeaSingleComponent";
import { setProperKey } from "../utils/_setProperKey";

export const IdeasList = () => {
  const context = useContext(Context);

  return (
    <div className="idea">
      {context.myState.map(element => {
        if (context.category === "All") {
          return (
            <SingleComponent
              key={setProperKey(context.myState.indexOf(element), element._id)}
              props={element}
            />
          );
        } else {
          if (context.category === element.category) {
            return (
              <SingleComponent
                key={setProperKey(
                  context.myState.indexOf(element),
                  element._id
                )}
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
