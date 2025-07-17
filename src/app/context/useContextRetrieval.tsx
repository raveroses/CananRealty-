"use client";
import { useContext } from "react";
import { ContextInit } from "./ContextKingdom";
const useContextRetrieval = () => {
  const context = useContext(ContextInit);

  if (!context)
    throw new Error(
      "ContextInit is undefined. Wrap your component in the Provider."
    );

  return context;
};
export default useContextRetrieval;
