import React from "react";

const Signupcomponent = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <form className="flex flex-col gap-3 border m-2 p-2" >
          <h1 className="font-bold">Sign Up</h1>
          <div className="gap-4">
            <label>Name:</label>
            <input type="text" className="border"/>
          </div>
          <div>
            <label>Email:</label>
            <input type="email"  className="border"/>
          </div>
          <div>
            <label>Password:</label>
            <input type="password"  className="border"/>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signupcomponent;
