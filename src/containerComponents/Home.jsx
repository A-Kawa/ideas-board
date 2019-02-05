import React from "react";
import { Header } from "./Header";
import { LoaderSpinner } from "../components/LoaderSpinner";

export const Home = () => {
  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      <LoaderSpinner />
    </div>
  );
};
