import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Favorites = () => {
    
  const router = useRouter();
  const [favItem, setFavItem] = useState([]);

  useEffect(() => {
  async function getFavorites() {
    const token = sessionStorage.getItem('token');
    const url =  "https://academics.newtonschool.co/api/v1/ecommerce/wishlist";
    const myHeaders = new Headers();
    myHeaders.append("projectID", "zx5u429ht9oj");
    myHeaders.append("Authorization", `Bearer ${token}`);
       
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
     url,
      requestOptions
    );
    const data = await response.json();
    // console.log("setFavItem", data.data.items);
    setFavItem(data.data.items);
  }
 
    getFavorites();
  }, []);
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
      
        {favItem.map((item, index) => {
        //   const { _id, displayImage, subCategory, size } = item;
        console.log('item itemsssssssss', item);
          return (
            <div
              key={index}
              className="flex flex-col max-w-56 border rounded-xl m-3 overflow-hidden"
            >
              <div>
                <img
                  src={item.products.displayImage}
                  alt="image"
                  className="h-72 min-w-full"
                />
              </div>
              <div className="flex flex-col pl-3 pr-3 pt-2 pb-0 mb-0">
                <p className="text-gray-500">{item.products.name}</p>
                <p>₹{item.products.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Favorites;
