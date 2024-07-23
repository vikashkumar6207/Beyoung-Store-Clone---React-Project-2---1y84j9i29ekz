import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Favorites = () => {
  const router = useRouter();
  const [favItem, setFavItem] = useState([]);
  const [reRander, serRerander] = useState(false);

  useEffect(() => {
    async function getFavorites() {
      const token = sessionStorage.getItem("token");
      const url = "https://academics.newtonschool.co/api/v1/ecommerce/wishlist";
      const myHeaders = new Headers();
      myHeaders.append("projectID", "zx5u429ht9oj");
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log("setFavItem", data.data.items);
      setFavItem(data.data.items);
    }

    getFavorites();
  }, [reRander]);

  function deleteFunction() {
    const token = sessionStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("projectId", "zx5u429ht9oj");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/wishlist/?productId=652675ccdaf00355a78380f8",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  return (
    <>
      <div>
        <button
          className="h-10 w-48 bg-yellow-300 m-2 rounded-md"
          onClick={() => {
            deleteFunction();
            serRerander(true);
          }}
        >
          Reset favItem
        </button>

        <div className="flex flex-wrap justify-center gap-4">
          {favItem.map((item, index) => {
            // console.log("item itemsssssssss", item);
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
      </div>
    </>
  );
};

export default Favorites;
