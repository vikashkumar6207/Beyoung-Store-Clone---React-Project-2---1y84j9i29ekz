import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Menpagecomp = () => {
  const router = useRouter();
  const [limit, setLimit] = useState([]);
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  async function limitApiCall() {
    let url;
    if (color) {
      url = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?gender=Men&color=${color}&limit=50`;
    } else if (category) {
      url = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?subCategory=${category}&gender=Men`;
    } else {
      url =
        "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?gender=Men&limit=50";
    }
    const myHeaders = new Headers();
    myHeaders.append("projectId", "zx5u429ht9oj");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(url, requestOptions);
    const data = await response.json();
    // console.log('limitApiCall',data);
    setLimit(data.data);
  }

  useEffect(() => {
    limitApiCall();
  }, [color, category]);

  return (
    <>
      <div className="flex w-screen mt-6">
        <div className="border-r menpage_aside flex flex-col pl-2">
          <h1 className="text-xl font-bold text-gray-500">FILTER</h1>
          <div>
            <div>
              <details>
                <summary>COLOR</summary>
                <div className="flex gap-4 flex-wrap">
                  <div
                    className="bg-red-600 h-8 w-8 rounded-full cursor-pointer"
                    onClick={() => setColor("RED")}
                  ></div>
                  <div
                    className="bg-blue-600 h-8 w-8 rounded-full cursor-pointer"
                    onClick={() => setColor("BLUE")}
                  ></div>
                  <div
                    className="bg-green-600 h-8 w-8 rounded-full cursor-pointer"
                    onClick={() => setColor("GREEN")}
                  ></div>
                  <div
                    className="bg-yellow-400 h-8 w-8 rounded-full cursor-pointer"
                    onClick={() => setColor("YELLOW")}
                  ></div>
                  <div
                    className="bg-pink-600 h-8 w-8 rounded-full cursor-pointer"
                    onClick={() => setColor("PINK")}
                  ></div>
                  <div
                    className="bg-orange-600 h-8 w-8 rounded-full cursor-pointer"
                    onClick={() => setColor("ORANGE")}
                  ></div>
                  <div
                    className="bg-white border h-8 w-8 rounded-full cursor-pointer"
                    onClick={() => setColor("WHITE")}
                  ></div>
                </div>
              </details>
              <details>
                <summary>CAREGORY</summary>
                <div className="flex gap-4 flex-wrap">
                  <div
                    onClick={() => setCategory("hoodie")}
                    className="cursor-pointer hover:bg-yellow-300 p-1"
                  >
                    Hoodie
                  </div>
                  <div
                    onClick={() => setCategory("shirt")}
                    className="cursor-pointer hover:bg-yellow-300 p-1"
                  >
                    shirt
                  </div>
                  <div
                    onClick={() => setCategory("jeans")}
                    className="cursor-pointer hover:bg-yellow-300 p-1"
                  >
                    Jeans
                  </div>
                  <div
                    onClick={() => setCategory("kurta")}
                    className="cursor-pointer hover:bg-yellow-300 p-1"
                  >
                    kurta
                  </div>
                  <div
                    onClick={() => setCategory("pyjamas")}
                    className="cursor-pointer hover:bg-yellow-300 p-1"
                  >
                    pyjamas
                  </div>
                  <div
                    onClick={() => setCategory("tshirt")}
                    className="cursor-pointer hover:bg-yellow-300 p-1"
                  >
                    tshirt
                  </div>
                  <div
                    onClick={() => setCategory("jogger")}
                    className="cursor-pointer hover:bg-yellow-300 p-1"
                  >
                    jogger
                  </div>
                  <div
                    onClick={() => setCategory("tracksuit")}
                    className="cursor-pointer hover:bg-yellow-300 p-1"
                  >
                    tracksuit
                  </div>
                  <div
                    onClick={() => setCategory("trouser")}
                    className="cursor-pointer hover:bg-yellow-300 p-1"
                  >
                    trouser
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
        <div className="menpage_main">
          <div className="flex flex-wrap justify-center gap-4">
            {limit.map((item, index) => {
              const { _id, displayImage, subCategory, size } = item;
              return (
                <div
                  key={index}
                  className="flex flex-col max-w-56 border rounded-xl m-3 overflow-hidden"
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
      </div>
    </>
  );
};

export default Menpagecomp;
