// import React, { useEffect, useState } from "react";

// const Singleproductcomp = (props) => {
//   const { _id } = props;
//   const [product, setProduct] = useState([]);

//   console.log('SingleproductAPI', _id);

//   async function SingleproductAPI() {
//     let url = `https://academics.newtonschool.co/api/v1/ecommerce/product/${_id}`;
//     const myHeaders = new Headers();
//     myHeaders.append("projectID", "zx5u429ht9oj");

//     const requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };

//     const response = await fetch(url, requestOptions);
//     const data = await response.json();
//     console.log("SingleproductAPI data", data);
//     setProduct(data);
//   }
// //   SingleproductAPI();
//    useEffect(() => {
//     SingleproductAPI();
//   }, []); 
//   return (
//     <>
//     <div>
//         <div>
//             <div>
//                 <img src={product.displayImage} alt="" />
//             </div>
//             <div>
//                 <p>{product.price}</p>
//                 <p>{product.name}</p>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// };

// export default Singleproductcomp;
