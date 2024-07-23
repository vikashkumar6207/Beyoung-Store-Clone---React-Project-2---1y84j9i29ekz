import React, { useEffect, useState } from "react";

import Homecomponent from "./home/Homecomponent";
import Offercomponent from "./home/Offercomponent";
import Mencomponent from "./Men/Mencomponent";
import Womencomp from "./Women/Womencomp";
import Singleproduct from "./GetSingleProduct/Singleproduct";
import WomenComponent from "./Women/WomenComponent";
import UserProvider from "@/Provider/UserProvider";
import { useRouter } from "next/router";

function App() {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 1 });
    observer.observe(document.querySelector(".observer"));
    return () => observer.disconnect();
  }, [page]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const fetchData = () => {
    setLoading(true);
    // Simulating fetching data from an API
    setTimeout(() => {
      const myHeaders = new Headers();
      myHeaders.append("projectId", "zx5u429ht9oj");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=20&page=${page}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log("result.data", result.data);

          setItems((old) => [...old, ...result.data]);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    }, 1000); // Simulated delay
  };

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

        <div>
          <p className="gender_heading mb-10">FOR MEN</p>
          <Mencomponent />
        </div>
        <div className="mt-10 mb-10">
          <p className="gender_heading mb-10">FOR WOMEN</p>
          <WomenComponent />
        </div>

        <div>
          <div style={{ minHeight: "800px" }}>
            <div className="flex flex-wrap gap-4 ">
              {items.map((item, index) => {
                const { _id, displayImage, subCategory, size } = item;
                return (
                  <div
                    key={index}
                    className="flex flex-col max-w-64 border rounded-xl m-3 overflow-hidden"
                  >
                    <div
                      onClick={() => {
                        sessionStorage.setItem("productId", _id);
                        router.push("/singleproduct");
                      }}
                    >
                      <img
                        src={item.displayImage}
                        alt="image"
                        className=" min-w-full"
                      />
                    </div>
                    <div className="flex flex-col pl-3 pr-3 pt-2 pb-0 mb-0">
                      <p className="text-gray-500">{item.name}</p>
                      <p>₹{item.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {loading && <p>Loading...</p>}
          <div className="observer" style={{ height: "10px" }}></div>
        </div>
      </div>
    </>
  );
}

export default App;
