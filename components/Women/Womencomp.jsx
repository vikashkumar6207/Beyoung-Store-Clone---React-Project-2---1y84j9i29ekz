import React, { useEffect, useState } from "react";

const Womencomp = () => {
const [womenData, setWomenData] = useState([]);

  async function womendatafun() {
    const url = "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=300&gender=Women";
    const myHeaders = new Headers();
    myHeaders.append("projectID", "zx5u429ht9oj");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

   const response = await fetch(url, requestOptions)
    const data = await response.json();
    console.log('Womencomp',data.data);
    setWomenData(data.data);
  }

useEffect(()=>{
    womendatafun();
},[])
  return (
    <>
    <div>
    <div className="flex flex-wrap justify-center gap-4">
        { womenData.map((item) => {
          return (
            <div className="flex flex-col max-w-56 border rounded-xl m-3 overflow-hidden">
              <div>
                <img
                  src={item.displayImage}
                  alt="image"
                  className="h-72 min-w-full"
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
    </>
  )
};

export default Womencomp;
