import React from "react";

const Womenhover = () => {
  return (
    <div className="flex w-screen h-screen bg-white">
      <div className="flex h-screen w-screen bg-white gap-36 mt-10 mr-10 ml-10">
        <div className="list_item">
          <div className="font-bold">Topwear</div>
          <p>Printed T-Shirts</p>
          <p>Oversize T-Shirts New</p>
          <p>Kurti</p>
          <p>Women Shirts</p>
          <p>Half Sleeve T-Shirts</p>
          <p>Plain T-Shirts</p>
          <p>Full Sleeve T-Shirts</p>
          <p>Kurta Sets</p>
          <p>Crop Tops</p>
          <p>Plus Size T-Shirts</p>
          <p>Combos</p>
        </div>
        <div className="list_item">
          <div className="font-bold">Bottomwear</div>
          <p>Boxer for Women</p>
          <p>Jeggings</p>
          <p>Women Pants</p>
          <p>Couple Boxers</p>
        </div>
        <div className="list_item">
          <div className="font-bold">Theme</div>
          <p>Travel</p>
          <p>Gym</p>
          <p>Cartoon</p>
          <p>Sports</p>
          <p>Music</p>
          <p>Biker</p>
          <p>Funky</p>
          <p>God</p>
          <p>Quotes</p>
        </div>
        <div>
          <img src="./hoverImg.jpg" alt="image" className="h-60" />
        </div>
      </div>
    </div>
  );
};

export default Womenhover;
