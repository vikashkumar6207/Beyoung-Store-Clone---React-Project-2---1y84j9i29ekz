import React, { useEffect, useState } from "react";

const Menpagecomp = () => {

    const [limit, setLimit] = useState([]);
  async function limitApiCall() {
    const url =
      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?gender=Men&limit=300";
    const myHeaders = new Headers();
    myHeaders.append("projectId", "zx5u429ht9oj");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

  const response = await fetch(url, requestOptions)
      const data = await response.json();
      console.log('limitApiCall',data);
      setLimit(data.data);
  }

  useEffect(()=>{
    limitApiCall();
  },[]);
  return (
    <>
    <div>
     <div className="flex flex-wrap justify-center gap-4 ">
        {limit.map((item) => {
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
        )})}
         </div>
     </div>
    </>
  )
};

export default Menpagecomp;
