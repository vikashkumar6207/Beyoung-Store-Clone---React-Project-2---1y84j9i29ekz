import React, { useEffect, useState } from "react";

const Category = () => {
  const [catogaryItem, setcatogaryItem] = useState("");
  const [listItem, setListItem] = useState("");

  useEffect(() => {
    function getItemfun() {
      const categorydata = sessionStorage.getItem("category");
      setcatogaryItem(categorydata);
      console.log("category", categorydata);
    }
    getItemfun();
    // categoryItem();
    // console.log('category',categorys)
  }, []);

  async function categoryItem() {
    const URL = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?gender=Women&subCategory=${catogaryItem}`;
    const myHeaders = new Headers();
    myHeaders.append("projectId", "zx5u429ht9oj");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(URL, requestOptions);
    // const data = await response.json();
    console.log('categoryItem',response);
    const url =  response.url;
    if(response.ok){
        const response = await fetch(url,requestOptions);
        const result = response.json();
        
        console.log('nestedurl data', result);
      console.log('nestedurl data', result.data)
    
    }
  }
  categoryItem();

  return <div>category</div>;
};

export default Category;
