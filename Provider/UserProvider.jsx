"use client"
import React, { useEffect, useState } from "react";

export const UserContext = React.createContext({
  getName: "",
  getToken: "",
  getCategoey: "",
  nameHandler: () => {},
  tokenHandler: () => {},
  emailHandler: () => {},
  categoryHandler: () => {},
  logout: ()=>{},
  setSearchText: null,
  favList: 0,
  setFavList: ()=>{},

});

const UserProvider = (props) => {
  const [getToken, setToken] = useState();
  const [getName, setName] = useState();
  const [getEmail, setEmail] = useState();
  const [getCategoey, setCategory] = useState();
 

  useEffect(()=>{
    setToken(sessionStorage.getItem("token") || "");
    setName(sessionStorage.getItem("name") || "");
    setEmail(sessionStorage.getItem("email") || "");
    setCategory(sessionStorage.getItem("category") || "");
    
  },[])
  const [searchText, setSearchText] = useState('');
  const [favList, setFavList] = useState();



  // const [getCategoey, setCategory] = useState('');

  console.log('USER PROVIDER LOGS gggggggg',searchText, favList,getName, getToken,getEmail );

  const { children } = props;

 

  function tokenHandler(token) {
    console.log('providertoken',token);
      setToken(token);
      sessionStorage.setItem("token", token);
}


  function nameHandler(name) {

        setName(name);
        sessionStorage.setItem("name", name);
  }
  function emailHandler(email){
    setEmail(email);
    sessionStorage.setItem("email",email);
  }

  function categoryHandler(category){
    setCategory(category);
    sessionStorage.setItem('category', category);
  }
  const logout = () => {
    setName("");
    setToken("");
    sessionStorage.clear();
  };

  const valueObj = {
    getName,
    getToken,
   
    tokenHandler,
    nameHandler,
    emailHandler,
    searchText,
    setSearchText,

    getCategoey,
    categoryHandler,
    logout,

    favList,
    setFavList,
  };

  return (
    <>
      <UserContext.Provider value={valueObj}>{props.children}</UserContext.Provider>
    </>
  );
};

export default UserProvider;

