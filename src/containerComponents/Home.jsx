import React, { useContext, useEffect } from "react";
import { Header } from "./Header";
import { Context } from "../store/context";
import { LoaderSpinner } from "../components/LoaderSpinner";
import { errorStyle } from "../const/errorStyle";

export const Home = () => {
  const context = useContext(Context);
  console.log(context.myState);

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
        <h1> test 2</h1>
      )}
    </div>
  );
};
