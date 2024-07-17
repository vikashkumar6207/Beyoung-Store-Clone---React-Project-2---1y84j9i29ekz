import Productdetails from "@/components/ProductDetails/Productdetails";
import useUser from "@/customHooks/useUser";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineArrowCircleRight } from "react-icons/md";
const Singleproduct = () => {

  const router = useRouter();
    // const {getToken} = useUser();

   /*  if(!getToken){
      router.push('/login');
    } */
    
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [size, setSize] = useState([]);

  async function singleproductApi() {
    const url = `https://academics.newtonschool.co/api/v1/ecommerce/product/${sessionStorage.getItem("productId")}`;
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

  return (
    <>
      
      <div className="flex gap-10 ">
        <div className="flex gap-2 w-full ml-2">
          <div>
            {images && images.map((item, index) => {
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
              <img src={selectedImage} alt={product.name} className="w-full" />
            ) : (
              <p>Loading image...</p>
            )}
          </div>
        </div>
        <div className="mt-2 w-full">
          <h1 className="font-bold">{product.name}</h1>
          <p className="font-semibold">₹ {product.price}</p>
          <p className="text-gray-400 font-semibold">Inclusive of All Taxes + Free Shipping</p>
          <p>Brand: {product.brand}</p>
          <p>Color: {product.color}</p>
          <div className="flex flex-col ">
           <p> SIZE </p>
           <div className="flex gap-1">
            {size && size.map((item)=>{
              return (
              <p className="flex h-10 w-10 border items-center justify-center">{item}</p>
            )
            })}
            </div>
          </div>
          <p >QTY:
            <select className="h-10 w-14 p-2 border m-1">

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
              <button className="flex justify-center items-center w-48 h-12 rounded" style={{background: '#51cccc'}}><FaShoppingCart />ADD TO CART</button>
              <button className="flex justify-center items-center w-72 h-12 rounded" style={{background: '#f9eb28'}}><MdOutlineArrowCircleRight />BUY NOW</button>
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
