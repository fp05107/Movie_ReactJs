import { useState, useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api.js";
function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi(
      "/movie/popular/?api_key=9c53685b9ba638f719207c205807a64d"
    ).then((res) => {
      console.log(res);
    });
  };
  return <></>;
}

export default App;
