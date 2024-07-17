import React, { useState, useEffect } from "react";
import Logincomponent from "@/pages/Authentication/login";
import Signupcomponent from "@/pages/Authentication/signupcomponent";
// import useUser from "@/customHooks/useUser";
import { useRouter } from "next/router";
import Myaccount from "./myaccount";

const Login = () => {

  const [istoken, setIstoken] = useState(false);

  const router = useRouter()
  const [login, setLogin] = useState(false);

  useEffect(() => {
   if(sessionStorage.getItem("istoken")){
    setIstoken(true);
    console.log('setIstoken', istoken);
   }
  },[istoken]);

  return (
    <>
     { istoken ? <Myaccount /> : <div className="flex justify-center flex-col items-center border-black ">
        <div className="flex flex-col justify-center items-center border rounded-xl m-2 overflow-hidden">
        {login ? <Logincomponent /> : <Signupcomponent /> }
        <div>
          <button onClick={() => setLogin(!login)}>
            {login ? (
              <div>
                Do't have account? <span className="text-blue-400">Sign up</span>
              </div>
            ) : (
              <div>
                Alreday have account? <span className="text-blue-400"> login</span>
              </div>
            )}
          </button>
        </div>
        </div>
      </div>
     } 
    </>
  );
};

export default Login;
