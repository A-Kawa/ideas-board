import React, { useContext } from "react";
import { Context } from "../store/context";
import { SingleComponent } from "./IdeaSingleComponent";

export const IdeasList = () => {
  const context = useContext(Context);

  return (
    <div className="idea">
      {context.myState.map(element => {
        return (
          <SingleComponent
            key={element._id ? element._id : context.myState.indexOf(element)}
            props={element}
          />
        );
      })}
    </div>
  );
};
