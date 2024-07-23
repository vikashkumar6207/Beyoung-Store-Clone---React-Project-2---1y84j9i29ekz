import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import  {useNavigate } from ''
const Signupcomponent = () => {
  const [Error, setError] = useState();
  const [success, setSuccess] = useState();

  const [userStatus, setUserStatus] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  async function signupFun() {
    const url = "https://academics.newtonschool.co/api/v1/user/signup";
    const myHeaders = new Headers();
    myHeaders.append("projectID", "zx5u429ht9oj");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: userStatus.name,
      email: userStatus.email,
      password: userStatus.password,
      appType: "ecommerce",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log("NEW USER DATA", data);
      console.log("USER DATA", data.message);
      setError(data.message);
      setSuccess("Register successful..");
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  }

  function formHandler(e, key) {
    const val = e.target.value;

    setUserStatus((old) => {
      return {
        ...old,
        [key]: val,
      };
    });
  }
  function submitLoginHandler(e) {
    e.preventDefault();

    if (
      userStatus.email === "" &&
      userStatus.password === "" &&
      userStatus.name === ""
    ) {
      setError("The email and password is required !");
    } else if (userStatus.email === "") {
      setError("The email is required !");
    } else if (userStatus.password === "") {
      setError("The password is required !");
    } else if (userStatus.name === "") {
      setError("The name is required !");
    } else {
      signupFun();
    }
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-inherit rounded">
        <div className="flex flex-col justify-center items-center relative">
          <p
            className="absolute top-1 right-4 cursor-pointer"
            onClick={() => router.push("/")}
          >
            X
          </p>
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
            <form onSubmit={submitLoginHandler} className="flex flex-col gap-5">
              {Error ? (
                <h1 className="text-red-500">{Error}</h1>
              ) : (
                <h1 className="text-green-500">{success}</h1>
              )}
              <input
                type="text"
                placeholder="Full Name*"
                // required
                className="pl-2 h-10 w-80 border rounded"
                onChange={(e) => {
                  formHandler(e, "name");
                  setError("");
                }}
              />
              <input
                type="email"
                placeholder="Email Address*"
                // required
                className="pl-2 h-10 w-80 border rounded"
                onChange={(e) => {
                  formHandler(e, "email");
                  setError("");
                }}
              />
              <input
                type="password"
                placeholder="password*"
                // required
                className=" pl-2 h-10 w-80 border rounded"
                onChange={(e) => {
                  formHandler(e, "password");
                  setError("");
                }}
              />
              <button
                type="submit"
                className="w-80 h-10 rounded font-bold"
                style={{ background: "#51cccc", color: "#fff" }}
              >
                Signup with Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signupcomponent;
