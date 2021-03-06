import React, { useContext, useEffect } from "react";
import { Header } from "./Header";
import { Context } from "../store/context";
import { LoaderSpinner } from "../components/LoaderSpinner";
import { errorStyle } from "../const/componentStyles";
import { IdeasList } from "../components/IdeasList";

export const Home = () => {
  const context = useContext(Context);

  useEffect(() => {
    context.getFromDB();
  }, []);

  return (
    <div>
      <Header />
      {!context.myState.length ? (
        <LoaderSpinner />
      ) : context.myState === "Error" ? (
        <h2 style={{ ...errorStyle }}>Server nie odpowiada :(</h2>
      ) : (
        <IdeasList />
      )}
    </div>
  );
};
