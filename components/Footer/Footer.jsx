import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white">
        <div className="flex justify-around p-2 leading-8">
          <div>
            <h1 className="font-bold text-yellow-400">NEED HELP</h1>
            <p>Contact Us </p>
            <p>Track Order</p>
            <p>Returns & Refunds</p>
            <p>FAQ's Career</p>
          </div>
          <div>
            <h1 className="font-bold text-yellow-400">COMPANY</h1>
            <p>About Us</p>
            <p>Beyoung Blog</p>
            <p>Beyoungistan</p>
            <p>Collaboration</p>
            <p>Media</p>
          </div>
          <div>
            <h1 className="font-bold text-yellow-400"> MORE INFO</h1>
            <p>Term and Conditions</p>
            <p>Privacy Policy</p>
            <p>Shipping Policy</p>
            <p>Sitemap</p>
          </div>
          <div>
            <div>
              <h1 className="font-bold text-yellow-400">LOCATION</h1>
              <p>support@beyoung.in</p>
              <p>Eklingpura Chouraha, Ahmedabad Main Road <br/>
                (NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
            </div>
            <div>
                <h1 className="font-bold text-yellow-400">DOWNLOAD THE APP</h1>
                <div className="flex gap-2">
                <img src="./assets/11Play-Store-footer.png" alt="image" style={{height: 'auto', width: '14.5vw'}} />
                <img src="./assets/12App-store-footer.png" alt="image" style={{height: 'auto', width: '14.5vw'}}/>
                </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Footer;
