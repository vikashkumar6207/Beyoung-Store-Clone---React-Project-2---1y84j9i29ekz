import React, { useState } from "react";

const CreateAccount = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-inherit m-2">
      <div className="flex flex-col justify-center items-center border relative">
        <p className="absolute top-1 right-4">X</p>
        <div>
          <img
            src="./login-and-signup-image.jpg"
            alt=""
            className="login_Img"
          />
        </div>
        <div>
          <div>
            <div className="flex gap-2 items-center">
              <h1 className="text-2xl">Login</h1>
              <p>or</p>
              <h1 className="text-2xl">Signup</h1>
            </div>
            <p>Get Exciting Offers & Track Order</p>
          </div>
          <form
           onSubmit={(e) => {
            e.preventDefault();
            submitForm();
            console.log("preventDefault", loginstate);
          }}
            className="flex flex-col gap-5"
          >
            {Error ? (
            <h1 className="text-red-600">{Error}</h1>
          ) : (
            <h1 className="text-green-700">{success}</h1>
          )}
            <input
              type="text"
              placeholder="Full Name*"
              required
              className="pl-2 h-10 w-80 border rounded"
              onChange={(e) => formHandler(e, "name")}
            />
            <input
              type="email"
              placeholder="Email Address*"
              required
              className="pl-2 h-10 w-80 border rounded"
              onChange={(e) => formHandler(e, "email")}
            />
            <input
              type="password"
              placeholder="password*"
              required
              className=" pl-2 h-10 w-80 border rounded"
              onChange={(e) => formHandler(e, "password")}
            />
            <button
              type="submit"
              className="w-80 h-10 rounded font-bold"
              style={{ background: "#51cccc", color: "#fff" }}
            >
              Signup with Email
            </button>
          </form>
          <p>Already have account? Login</p>
          <p>Forgot password?</p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
