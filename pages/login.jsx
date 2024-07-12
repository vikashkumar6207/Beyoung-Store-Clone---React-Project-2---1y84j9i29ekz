
import React, { useState, useEffect } from "react";
import Logincomponent from "./_components_/login";
import Signupcomponent from "./_components_/signupcomponent";

const Login = () => {
  const [login, setLogin] = useState(false);
  useEffect(()=>{})
  return (
    <>
    <div className="flex justify-center flex-col items-center">
      {login ? <Logincomponent /> : <Signupcomponent />}
      <div>
        <button onClick={()=>setLogin(!login)}>
          {login
            ? (<div>Do't have account? <button className="text-blue-500">Sign up</button></div>)
            : (<div>Alreday have account? <button className="text-blue-500">Login</button></div>)}
        </button>
      </div>
      </div>
    </>
  );
};

export default Login;
