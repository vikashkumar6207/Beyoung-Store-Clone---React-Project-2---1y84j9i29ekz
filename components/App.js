import React, { useEffect, useState } from "react";

import Homecomponent from "./home/Homecomponent";
import Offercomponent from "./home/Offercomponent";
import Mencomponent from "./Men/Mencomponent";
import Womencomp from "./Women/Womencomp";
import Singleproduct from "./GetSingleProduct/Singleproduct";
import WomenComponent from "./Women/WomenComponent";
import UserProvider from "@/Provider/UserProvider";

function App() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("");
  const [type, setType] = useState();

  // set category in localStorage
  // console.log("category", category);
  useEffect(() => {
    localStorage.setItem("category", category);
  }, [category]);

  async function homepageUiApi() {
    const myHeaders = new Headers();
    myHeaders.append("projectId", "zx5u429ht9oj");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories",
      requestOptions
    );
    const data = await response.json();
    setProduct(data.data);
    // console.log("homepageUiApi", data);
  }

  useEffect(() => {
    homepageUiApi();
  }, []);

  return (
    <>
      <div id="App">
        <div className="mb-20">
          <Homecomponent />
        </div>
        <div className="mb-20">
          <Offercomponent />
        </div>
        <img src="./assets/URBAN_Img.jpg" alt="" className="w-100vw" />

        <div className="flex justify-center gap-4 m-12">
          <button className="h-8 pt-1 pb-1 pl-4 pr-4 rounded-3xl bg-black text-white ">
            Urban Shirts
          </button>
          <button className="h-8 pt-1 pb-1 pl-4 pr-4 border border-black rounded-3xl">
            Cargo Pants
          </button>
        </div>

        <div className="flex gap-3">
          {product.map((item) => {
            return (
        
              <p key={item} onClick={() => setCategory(item)}>
                {item}
              </p>
            );
          })}
        </div>
        <div>
          <p className="gender_heading mb-10">FOR MEN</p>
          <Mencomponent />
        </div>
        <div className="mt-10 mb-10">
          <p className="gender_heading mb-10">FOR WOMEN</p>
          <WomenComponent />
        </div>
      </div>
    
    </>
  );
}

export default App;
