import React, { useState } from "react";
import TestComponent from "./TestComponent";
import TestComponent2 from "./TestComponent2";

const MainComponent = () => {
  const [asim, setAsim] = useState("");

  // Function to update 'asim'
  const ZkouskaFunction = (testingparameter) => {
    setAsim(testingparameter);
  };

  // Call ZkouskaFunction with a parameter
  ZkouskaFunction("testdata");

  return (
    <>
      <TestComponent daniel={asim}></TestComponent>
      <TestComponent2 asim={asim}></TestComponent2>
    </>
  );
};

export default MainComponent;
