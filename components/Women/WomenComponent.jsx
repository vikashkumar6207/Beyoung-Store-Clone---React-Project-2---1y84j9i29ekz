import React, { useEffect, useState } from "react";

const WomenComponent = () => {
  const [womenData, setWomenData] = useState([]);
  const [category, setCategory] = useState("");

  console.log("category", category);

  
  /*  async function womendatafun() {
    const url = "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?gender=Women";
    const myHeaders = new Headers();
    myHeaders.append("projectID", "zx5u429ht9oj");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

   const response = await fetch(url, requestOptions)
    const data = await response.json();
    // console.log('Womencomp',data.data);
    setWomenData(data.data);
  } */

  // useEffect(()=>{
  //     womendatafun();
  // },[])
  return (
    <>
      <div className="flex overflow-auto gap-4">
        {/*  <div className="flex overflow-auto gap-4">
        { womenData.map((item, index) => {
          return (
            <div  key={index}  className="flex flex-col min-w-64 border rounded-xl m-3 overflow-hidden">
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
      </div> */}
      <div
          onClick={() => {sessionStorage.setItem("category","kurti")}}
          className="flex flex-col min-w-64 border rounded-xl m-3 overflow-hidden"
        >
          <img
            src="https://images.bewakoof.com/t1080/women-s-sleevelesss-ethnic-kurti-403804-1663921044-1.jpg"
            alt="img"
            className="h-72 min-w-full"
          />
          <div className="pl-2 h-12 bg-gray-300">
            <p
              className="flex m-2 pl-2 h-4 items-center"
              style={{ borderLeft: "5px solid #ffdd00" }}
            >
              kurti
            </p>
          </div>
        </div>

        <div
          onClick={() => sessionStorage.setItem("category","tshirt")}
          className="flex flex-col min-w-64 border rounded-xl m-3 overflow-hidden"
        >
          <img
            src="https://images.bewakoof.com/t1080/women-s-black-boyfriend-t-shirt-103943-1655747735-1.jpg"
            alt="img"
            className="h-72 min-w-full"
          />
          <div className="pl-2 h-12 bg-gray-300">
            <p
              className="flex m-2 pl-2 h-4 items-center"
              style={{ borderLeft: "5px solid #ffdd00" }}
            >
              tshirt
            </p>
          </div>
        </div>
        <div
          onClick={() => sessionStorage.setItem("category","jogger")}
          className="flex flex-col min-w-64 border rounded-xl m-3 overflow-hidden"
        >
          <img
            src="https://images.bewakoof.com/t1080/women-s-grey-oversized-plus-size-parachute-pants-589662-1693823550-1.jpg"
            alt="img"
            className="h-72 min-w-full"
          />
          <div className="pl-2 h-12 bg-gray-300">
            <p
              className="flex m-2 pl-2 h-4 items-center"
              style={{ borderLeft: "5px solid #ffdd00" }}
            >
              jogger
            </p>
          </div>
        </div>
        <div
          onClick={()=> sessionStorage.setItem("category","shirt")}
          className="flex flex-col min-w-64 border rounded-xl m-3 overflow-hidden"
        >
          <img
            src="https://images.bewakoof.com/t1080/women-s-blue-striped-drop-shoulder-crop-shirt-624525-1695985894-1.jpg"
            alt="img"
            className="h-72 min-w-full"
          />
          <div className="pl-2 h-12 bg-gray-300">
            <p
              className="flex m-2 pl-2 h-4 items-center"
              style={{ borderLeft: "5px solid #ffdd00" }}
            >
              shirt
            </p>
          </div>
        </div>
        <div
          onClick={() => sessionStorage.setItem("category","jumpsuit")}
          className="flex flex-col min-w-64 border rounded-xl m-3 overflow-hidden"
        >
          <img
            src="https://images.bewakoof.com/t1080/women-s-black-floral-printed-jumpsuit-563483-1671107477-1.jpg"
            alt="img"
            className="h-72 min-w-full"
          />
          <div className="pl-2 h-12 bg-gray-300">
            <p
              className="flex m-2 pl-2 h-4 items-center"
              style={{ borderLeft: "5px solid #ffdd00" }}
            >
              jumpsuit
            </p>
          </div>
        </div>

        <div
          onClick={() => sessionStorage.setItem("category","jeans")}
          className="flex flex-col min-w-64 border rounded-xl m-3 overflow-hidden"
        >
          <img
            src="https://images.bewakoof.com/t1080/women-s-white-cargo-jogger-jeans-y110104-617211-1693820414-1.jpg"
            alt="img"
            className="h-72 min-w-full"
          />
          <div className="pl-2 h-12 bg-gray-300">
            <p
              className="flex m-2 pl-2 h-4 items-center"
              style={{ borderLeft: "5px solid #ffdd00" }}
            >
              jeans
            </p>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default WomenComponent;
