import Productdetails from "@/components/ProductDetails/Productdetails";
import useUser from "@/customHooks/useUser";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { UserContext } from "@/Provider/UserProvider";
const Singleproduct = () => {
  const router = useRouter();
  // const token = sessionStorage.getItem("productId")

  const { updateState } = useContext(UserContext);

  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [size, setSize] = useState([]);
  const [like, setLike] = useState(false);

  // const [likeItem, setLikeItem] = useState([]);
  // const id = sessionStorage.getItem("productId");

  async function singleproductApi() {
    const url = `https://academics.newtonschool.co/api/v1/ecommerce/product/${sessionStorage.getItem(
      "productId"
    )}`;
    const myHeaders = new Headers();
    myHeaders.append("projectID", "zx5u429ht9oj");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log("singleproductApi", data.data);
    setProduct(data.data);
    setImages(data.data.images);
    setSelectedImage(data.data.displayImage);
    setSize(data.data.size);
  }

  useEffect(() => {
    singleproductApi();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  function addFavorites() {
    let _id = product._id;
    const token = sessionStorage.getItem("token");
    if (token) {
      {
        console.log("productId token", _id, token);
      }
      const myHeaders = new Headers();
      myHeaders.append("projectID", "zx5u429ht9oj");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      const raw = JSON.stringify({
        productId: _id,
      });

      const requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://academics.newtonschool.co/api/v1/ecommerce/wishlist/",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log("setFavList", result);
          updateState(result.results);
        })
        .catch((error) => console.error(error));
    } else {
      router.push("/login");
    }
  }

  // Add to cart function

  const [quantity, setQuantity] = useState();

  function setNumFun(e) {
    setQuantity(e.target.value);
  }
  async function addToCartfunction() {
    const token = sessionStorage.getItem("token");
    if (token) {
      const myHeaders = new Headers();
      myHeaders.append("projectID", "zx5u429ht9oj");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      const raw = JSON.stringify({
        quantity: quantity,
        size: "M",
      });

      const requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/cart/${product._id}`,
        requestOptions
      )
        .then((response) => response.text())
        // .then((result) => console.log('addToCartfunction',result))
        .catch((error) => console.error(error));
    } else {
      router.push("/login");
    }
  }

  async function buyNowFun() {
    const myHeaders = new Headers();
    myHeaders.append("projectID", "zx5u429ht9oj");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTI0ZTE1MTgwYjk2MWUzOGJlMWU5YyIsImlhdCI6MTcyMTQ5MTc0NSwiZXhwIjoxNzUzMDI3NzQ1fQ.AbbrVvGkKNiE6MyUq9OlM74cgoT8gKJvwpSzlqxF-eo"
    );

    const raw = JSON.stringify({
      productId: "652675ccdaf00355a78380f8",
      quantity: 2,
      addressType: "HOME",
      address: {
        street: "123 Main St",
        city: "Ranchi",
        state: "Jharkhand",
        country: "India",
        zipCode: "12345",
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/order",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log("buyNowFun", result))
      .catch((error) => console.error(error));
  }

  return (
    <>
      <div className="flex gap-10 ">
        <div className="flex gap-2 w-full ml-2">
          <div>
            {images &&
              images.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item}
                    alt="image"
                    className="h-24 w-36 cursor-pointer"
                    onClick={() => handleImageClick(item)}
                  />
                );
              })}
          </div>
          <div>
            {selectedImage ? (
              <div className="relative ">
                <p
                  onClick={() => {
                    const token = sessionStorage.getItem("productId");
                    if (!token) {
                      router.push("/login");
                    } else {
                      setLike(!like);
                    }
                  }}
                  className="overflow-hidden flex items-center justify-center absolute right-2 top-2 h-8 w-8 rounded-full bg-yellow-50"
                >
                  {like ? (
                    <FaHeart />
                  ) : (
                    <CiHeart className="h-5 w-5" onClick={addFavorites} />
                  )}
                </p>
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full"
                />
              </div>
            ) : (
              <p>Loading image...</p>
            )}
          </div>
        </div>
        <div className="mt-2 w-full">
          <h1 className="font-bold">{product.name}</h1>
          <p className="font-semibold">₹ {product.price}</p>
          <p className="text-gray-400 font-semibold">
            Inclusive of All Taxes + Free Shipping
          </p>
          <p>Brand: {product.brand}</p>
          <p>Color: {product.color}</p>
          <div className="flex flex-col ">
            <p> SIZE </p>
            <div className="flex gap-1">
              {size &&
                size.map((item) => {
                  return (
                    <p className="flex h-10 w-10 border items-center justify-center">
                      {item}
                    </p>
                  );
                })}
            </div>
          </div>
          <p>
            QTY:
            <select
              className="h-10 w-14 p-2 border m-1"
              value={quantity}
              onChange={setNumFun}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </p>
          <div className="flex gap-2">
            <button
              className="flex justify-center items-center w-48 h-12 rounded"
              style={{ background: "#51cccc" }}
              onClick={addToCartfunction}
            >
              <FaShoppingCart />
              ADD TO CART
            </button>
            <button
              className="flex justify-center items-center w-72 h-12 rounded"
              style={{ background: "#f9eb28" }}
              onClick={buyNowFun}
            >
              <MdOutlineArrowCircleRight />
              BUY NOW
            </button>
          </div>
          <div className="mt-3">
            <div className="bg-slate-100 p-3">
              <p className="font-bold text-2xl">Delivery Options</p>
              <div className=" relative mt-2">
                <input
                  type="Number"
                  minLength={6}
                  maxLength={6}
                  required
                  placeholder="Enter your city Pincode"
                  className="h-10 w-96 rounded p-2 bg-white text-sm "
                />
                <button className="h-6 absolute top-2 left-80  bg-slate-700 text-white pl-2 pr-2 rounded">
                  Check
                </button>
              </div>
              <div className="flex justify-between p-2">
                <div>
                  <img
                    src="./pin-code1.png"
                    alt="image"
                    className="h-14 border-r pr-14"
                  />
                  <p>Free Shipping</p>
                </div>
                <div className="flex justify-center flex-col">
                  <img
                    src="./pin-code2.png"
                    alt="image"
                    className="h-14 border-r  pr-14"
                  />
                  <p>15 Days Return</p>
                </div>
                <div>
                  <img src="./pin-code3.png" alt="image" className="h-14" />
                  <p>Cash on Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Productdetails product={product} />
      </div>
    </>
  );
};

export default Singleproduct;
