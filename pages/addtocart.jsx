import { unstable_getImgProps } from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const addtocart = () => {
  const router = useRouter();

  const [cartElement, setCartElement] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    async function getCartElement() {
      const myHeaders = new Headers();
      myHeaders.append("projectID", "zx5u429ht9oj");
      myHeaders.append("Authorization", `Bearer ${token}`);

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

      setCartElement(result.data.items);

      console.log("getCartElement", result.data.items);
    }
    getCartElement();
  }, []);

  return (
    <div>
      <div>
        {cartElement.length > 0 ? (
          <div className="flex flex-wrap justify-center bg-slate-50 gap-3">
            <div className="bg-white mt-4 ml-1" style={{ minWidth: "56%" }}>
              {cartElement.map((item, index) => {
                const { _id, displayImage, subCategory, size } = item.product;
                return (
                  <div className="flex gap-2 mt-2 p-5 " key={index}>
                    <div className="flex border w-full rounded-xl overflow-hidden bg-white shadow">
                      <div className="m-2">
                        <img
                          src={item.product.displayImage}
                          alt="image"
                          className="h-36 w-32 rounded"
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
                        <p>SIZE : {item.size}</p>
                      </div>

                      {/* </div> */}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white  mr-1 mt-4 p-4" style={{ width: "40%" }}>
              <div className="w-full">
                <p> Offers & Benefits</p>
                <div className=" relative ">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="h-7 bg-slate-100 overflow-hidden border-none rounded w-72 p-2"
                  />
                  <span
                    className="h-7 p-2 w-16 absolute top-0 right-24 flex justify-center items-center "
                    style={{ background: "#51cbcc" }}
                  >
                    APPLY
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-auto flex-col">
            {/*     <p className="text-2xl font-bold">No items in your cart</p> */}
            <img src="./EMPTY CARTORDER PAGE..png" alt="" className="h-44" />
            <button
              onClick={() => router.push("/")}
              className="h-12 w-56 mb-3 font-bold rounded-lg text-xl bg-black text-white"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
      {/* <div className="bg-white  mr-1 mt-4 p-4" style={{ width: "40%" }}>
        <div className="w-full">
          <p> Offers & Benefits</p>
          <div className=" relative ">
            <input
              type="text"
              placeholder="Enter code"
              className="h-7 bg-slate-100 overflow-hidden border-none rounded w-72 p-2"
            />
            <span
              className="h-7 p-2 w-16 absolute top-0 right-24 flex justify-center items-center "
              style={{ background: "#51cbcc" }}
            >
              APPLY
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default addtocart;
