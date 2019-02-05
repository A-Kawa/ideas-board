import React, { useContext, useEffect } from "react";
import { Header } from "./Header";
import { Context } from "../store/context";
import { LoaderSpinner } from "../components/LoaderSpinner";

export const Home = () => {
  const context = useContext(Context);
  console.log(context.myState);

  useEffect(() => {
    context.getFromDB();
  }, []);

  return (
    <div>
      <Header />
      {!context.myState.length ? <LoaderSpinner /> : <h1>test2</h1>}
    </div>
  );
};
