import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="flex gap-7">
      <div
        className="bg-gray-100 p-10"
        style={{ width: "100%", lineHeight: "2" }}
      >
        <h1 className="font-bold">Product Highlights</h1>
        <p>
          <strong> Brand</strong> {product.brand}
        </p>
        <p>
          <strong> Seller</strong> {product.name}
        </p>
        <p>
          <strong> Category</strong> {product.category}
        </p>
        <p>
          <strong> Color</strong> {product.color}
        </p>
        <p>
          <strong> Tag</strong> {product.sellerTag}
        </p>
        <p>
          <strong> Gender</strong> {product.gender}
        </p>
      </div>
      <div className="bg-gray-100 p-10" style={{ width: "100%" }}>
        <h1 className="font-bold">Product Description</h1>
        <div
          style={{ maxWidth: "100%" }}
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
