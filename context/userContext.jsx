import React from "react";

const userContext = React.createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export default userContext;