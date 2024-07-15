import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import Singleproductcomp from "../GetSingleProduct/Singleproduct";
// import Singleproduct from "@/pages/singleproduct";

const Mencomponent = () => {
  const [mencloth, setMencloth] = useState([]);
  const [selected, setSelected] = useState();

  const router = useRouter();
  async function menclothApi() {
    const url =
      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products";
    const myHeaders = new Headers();
    myHeaders.append("projectId", "zx5u429ht9oj");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log("men data", data.data);
    setMencloth(data.data);
  }
  useEffect(() => {
    menclothApi();
  }, []);


  return (
    <>
      <div className="flex overflow-auto gap-4 ">
        {mencloth && mencloth.map((item) => {
            const {_id,displayImage,subCategory,size} = item;
          return (
            <div className="flex flex-col min-w-64 border rounded-xl m-3 overflow-hidden">
              <div onClick={()=>{
                   localStorage.setItem('productId', _id);
                    router.push('/singleproduct')
                  }
                  }>
                <img
                  src={item.displayImage}
                  alt="image"
                  className="h-80 min-w-full"
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
    </>
  );
};

export default Mencomponent;
