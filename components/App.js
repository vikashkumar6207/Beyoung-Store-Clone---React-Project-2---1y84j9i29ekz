import React, { useEffect } from "react";
import Homecomponent from "./home/Homecomponent";
import Offercomponent from "./home/Offercomponent";

function App() {
  async function fetchAPI() {
    const myHeaders = new Headers();
    myHeaders.append("projectId", "zx5u429ht9oj");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://learn.newtonschool.co/n/api/v1/ecommerce/clothes/products",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div id="App">
      <Homecomponent />
      <Offercomponent />
      <img src="./assets/URBAN_Img.jpg" alt="" className="w-100vw" />

      <div className="flex justify-center gap-4 m-12">
        <button className="h-8 pt-1 pb-1 pl-4 pr-4 rounded-3xl bg-black text-white ">Urban Shirts</button>
        <button className="h-8 pt-1 pb-1 pl-4 pr-4 border border-black rounded-3xl" >Cargo Pants</button>
      </div>
    </div>
  );
}

export default App;
