import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "@/Provider/UserProvider";
const Logincomponent = () => {
 const router = useRouter();
  const ContextData = useContext(UserContext);
  const { tokenHandler, nameHandler, emailHandler } = ContextData;

  const [success, setSuccess] = useState("");
  const [Error, setError] = useState();

  const [loginstate, setLoginstate] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function submitForm() {
    const url = "https://academics.newtonschool.co/api/v1/user/login";
    const myHeaders = new Headers();
    myHeaders.append("projectID", "zx5u429ht9oj");
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      email: loginstate.email,
      password: loginstate.password,
      appType: "ecommerce"
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
  const response = await fetch(url, requestOptions)
    const data = await response.json();
    console.log('data',data);
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log(data, "LOGIN DATA");
      // setErrorHandler(data.message);
      const token = data?.token;
      const name = data?.data?.user?.name;
      const email = data?.data?.user?.email;

      // setIsLoggedIn(true);

      if (token && name) {
        tokenHandler(token);
        nameHandler(name);
        emailHandler(email);

        setSuccess("Login successful...");
        setTimeout(() => {
          router.push('/');
        }, 3000);
      } else {
        setError(data.message || "Login faild!");
      }
    } catch (error) {
      setError(error);
    }
  }

  function formHandler(e, key) {
    const val = e.target.value;

    setLoginstate((old) => {
      return {
        ...old,
        [key]: val,
      };
    });
  }

  return (
    <>
      
      <div className="flex flex-col justify-center items-center bg-inherit">
      <div className="flex flex-col justify-center items-center relative">
        <p className="absolute top-1 right-4 cursor-pointer" onClick={()=>router.push('/')}>X</p>
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
         
        </div>
      </div>
    </div>
    </>
  );
};

export default Logincomponent;
