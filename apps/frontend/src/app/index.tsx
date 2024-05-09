import React from "react";
import "./styles.css";

function App(): JSX.Element {
  return (
    <div className=" flex flex-col justify-center items-center gap-4  h-screen">
      <h1 className="text-yellow-600">
        <span>Welcome app</span>
      </h1>
      <p className="text-green-900">Built With vite </p>
    </div>
  );
}

export default App;
