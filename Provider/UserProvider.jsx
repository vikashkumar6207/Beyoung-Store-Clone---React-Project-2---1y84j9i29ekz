"use client";
import React, { useEffect, useState } from "react";

export const UserContext = React.createContext({
  getName: "",
  getToken: "",
  getCategoey: "",
  nameHandler: () => {},
  tokenHandler: () => {},
  emailHandler: () => {},
  categoryHandler: () => {},
  logout: () => {},
  setSearchText: null,
  updateState: () => {},
});
// ---

// const [state, setState] = useState(initialState);

// ---
const UserProvider = ({ children }) => {
  const [getToken, setToken] = useState();
  const [getName, setName] = useState();
  const [getEmail, setEmail] = useState();
  const [getCategoey, setCategory] = useState();
  const [favList, setFavList] = useState();

  useEffect(() => {
    setToken(sessionStorage.getItem("token") || "");
    setName(sessionStorage.getItem("name") || "");
    setEmail(sessionStorage.getItem("email") || "");
    setCategory(sessionStorage.getItem("category") || "");
  }, []);
  const [searchText, setSearchText] = useState("");
  // const [favList, setFavList] = useState();

  const updateState = (favList) => {
    setFavList(favList);
  };

  // const [getCategoey, setCategory] = useState('');

  // console.log('USER PROVIDER LOGS gggggggg',searchText, favList,getName, getToken,getEmail );

  // const { children } = props;

  function tokenHandler(token) {
    console.log("providertoken", token);
    setToken(token);
    sessionStorage.setItem("token", token);
  }

  function nameHandler(name) {
    setName(name);
    sessionStorage.setItem("name", name);
  }
  function emailHandler(email) {
    setEmail(email);
    sessionStorage.setItem("email", email);
  }

  function categoryHandler(category) {
    setCategory(category);
    sessionStorage.setItem("category", category);
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
    updateState,
  };

  return (
    <>
      <UserContext.Provider value={valueObj}>{children}</UserContext.Provider>
    </>
  );
};

export default UserProvider;
