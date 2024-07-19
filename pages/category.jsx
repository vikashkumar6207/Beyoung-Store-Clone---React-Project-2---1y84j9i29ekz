"use client";
import { UserContext } from "@/Provider/UserProvider";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const Category = () => {
  const router = useRouter();

  // const {token}

  const [listItem, setListItem] = useState([]);
  const contextData = useContext(UserContext);

  const { getCategory } = contextData;
  // const itemcategory = sessionStorage.getItem("category");

  useEffect(() => {
    async function fetchCategoryItem() {
      let categoryData = sessionStorage.getItem("category");
      

      const URL = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?subCategory=${categoryData}&gender=Women&limit=50`;

      const myHeaders = new Headers();

      myHeaders.append("projectId", "zx5u429ht9oj");

      const requestOptions = {
        method: "GET",

        headers: myHeaders,

        redirect: "follow",
      };

      try {
        const response = await fetch(URL, requestOptions);

        console.log("response", response);

        if (response.status === 200) {
          const data = await response.json();

          const result = data?.data;
          setListItem(result);
          console.log("categoryItem", result);
        }
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchCategoryItem();
  }, []);
  console.log('getCategory getCategory', getCategory);

  return (
    <>
      <div>
      {console.log("listItem listItem", listItem)}
        <div className="flex flex-wrap justify-center">
           {listItem && listItem.map((item) => {
            const { _id } = item;
            return (
              <div className="flex flex-col max-w-56 border rounded-xl m-3 overflow-hidden">
                <div
                  onClick={() => {
                    sessionStorage.setItem("productId", _id);
                    router.push("/singleproduct");
                  }}
                >
                  <img
                    src={item.displayImage}
                    alt="image"
                    className="h-72 min-w-full"
                  />
                  <div className="p-2">
                    <p>{item.name}</p>
                    <p>ratings : {item.ratings.toFixed(1)}</p>
                    <p>₹{item.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
      </div>
    </>
  );
};

export default Category;
