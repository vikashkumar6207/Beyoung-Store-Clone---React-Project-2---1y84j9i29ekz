import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const addtocart = () => {
  const router = useRouter();
  const [cartElement, setCartElement] = useState([]);

  useEffect(() => {
    async function getCartElement() {
      const myHeaders = new Headers();
      myHeaders.append("projectID", "zx5u429ht9oj");
      myHeaders.append(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTI0ZTE1MTgwYjk2MWUzOGJlMWU5YyIsImlhdCI6MTcyMTQ5MTc0NSwiZXhwIjoxNzUzMDI3NzQ1fQ.AbbrVvGkKNiE6MyUq9OlM74cgoT8gKJvwpSzlqxF-eo"
      );

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/ecommerce/cart",
        requestOptions
      );
      const result = await response.json();
      console.log("getCartElement", result.data.items);
      setCartElement(result.data.items);
      /* .then((response) => response.text())
      .then((result) => console.log('getCartElement',result))
      .catch((error) => console.error(error)); `*/
    }
    getCartElement();
  }, []);
  return (
    <div className="flex flex-wrap justify-center bg-slate-50">
      { cartElement.length > 0 ? (
        cartElement.map((item, index) => {
          const { _id, displayImage, subCategory, size } = item.product;
          return (
            <div className="flex gap-4  mt-2 ">
                <div className="bg-white p-4 " style={{minWidth: '58%'}}>
            <div
              key={index}
              className="flex border rounded-xl overflow-hidden bg-white w-auto"
            >
              <div
             /*    onClick={() => {
                  sessionStorage.setItem("productId", _id);
                  router.push("/singleproduct");
                }} */
               className="m-2"
              >
                <img
                  src={item.product.displayImage}
                  alt="image"
                  className="h-44 w-40 rounded"
                />
                <select className="w-32 border rounded">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </select>
              </div>
              <div className="flex flex-col pl-3 pr-3 pt-2 pb-0 mb-0">
                <p className="text-gray-500">{item.product.name}</p>
                <p>₹{item.product.price}</p>
              </div>
            </div>
            </div>
            <div className="bg-white p-4" style={{width: '40%'}}>
            <div className="w-96">
                <p> Offers & Benefits</p>
                <div className=" relative ">
                <input type="text" placeholder="Enter code" className="h-7 overflow-hidden border-none rounded w-72 p-2" />
            <span className="h-7 p-2 w-16 absolute top-0 right-24 flex justify-center items-center " style={{background: '#51cbcc'}}>APPLY</span>
            </div>
            </div>
            </div>
            </div>
          );
        })
      ) : (
       
        <div className="flex justify-center items-center h-auto flex-col">
      {/*     <p className="text-2xl font-bold">No items in your cart</p> */}
          <img src="./EMPTY CARTORDER PAGE..png" alt="" className="h-44"/>
          <button onClick={()=> router.push('/')} className="h-12 w-56 mb-3 font-bold rounded-lg text-xl bg-black text-white">Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default addtocart;
