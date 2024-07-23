import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "@/Provider/UserProvider";
import useUser from "@/customHooks/useUser";
const Logincomponent = () => {
  const router = useRouter();
  const ContextData = useContext(UserContext);
  // const context = useUser();
  const { tokenHandler, nameHandler, emailHandler } = ContextData;
  console.log("ContextData", ContextData);
  console.log(ContextData);

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
      // console.log("LOGIN DATA", data);

      const token = data?.token;
      const name = data?.data?.user?.name;
      const email = data?.data?.user?.email;

      console.log("LOGIN", name, email, token);
      if (token && name) {
        tokenHandler(token);
        // tokenfun(token);
        nameHandler(name);
        emailHandler(email);

        setSuccess("Login successful...");
        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        setError(data.message || "Login faild!");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error:", error);
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

  function submitLoginHandler(e) {
    e.preventDefault();

    if (
      loginstate.email === "" &&
      loginstate.password === "" &&
      loginstate.name === ""
    ) {
      setError("The email and password is required !");
    } else if (loginstate.email === "") {
      setError("The email is required !");
    } else if (loginstate.password === "") {
      setError("The password is required !");
    } else if (loginstate.name === "") {
      setError("The name is required !");
    } else {
      submitForm();
    }
  }

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-inherit">
        <div className="flex flex-col justify-center items-center relative">
          <p
            className="absolute top-1 right-4 cursor-pointer text-white"
            onClick={() => router.push("/")}
          >
            X
          </p>
          <div>
            <img src="./assets/pic.webp" alt="" className="login_Img" />
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
                <h1 className="text-red-600">{Error}</h1>
              ) : (
                <h1 className="text-green-700">{success}</h1>
              )}
              <input
                type="text"
                placeholder="Full name*"
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
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logincomponent;
