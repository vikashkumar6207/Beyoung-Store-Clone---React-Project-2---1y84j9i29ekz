import React from "react";

const Hovercomp = () => {
  return (
    <div className="flex w-screen h-2/3 bg-white hover_comp_container">
      <div className="flex h-2/3 w-screen bg-white gap-36 mt-10 mr-10 ml-10">
        <div className="list_item">
          <div className="font-bold">Topwear</div>
          <p>Printed T-Shirts</p>
          <p>Oversize T-Shirts New</p>
          <p>Plain T-Shirts</p>
          <p>Full Sleeve T-Shirts</p>
          <p>Shirts</p>
          <p>Polo T-Shirts</p>
          <p>Activewear</p>
          <p>Half Sleeve T-Shirts</p>
          <p>Plus Size T-Shirts</p>
          <p>Combos</p>
        </div>
        <div className="list_item">
          <div className="font-bold">Bottomwear</div>
          <p>Joggers</p>
          <p>Chino Pants SAVE 250</p>
          <p>Boxers</p>
          <p>Shorts</p>
          <p>Cargo Pants New</p>
          <p>Pyjamas</p>
          <p>Jeans New</p>
          <p>Couple Boxers</p>
        </div>
        <div className="list_item">
          <div className="font-bold">Theme</div>
          <p>Travel</p>
        </div>
        <div>
          <img src="./hoverImg.jpg" alt="image" className="h-60" />
        </div>
      </div>
    </div>
  );
};

export default Hovercomp;
