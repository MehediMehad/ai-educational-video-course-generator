"use client";

import { UserDetailContext } from "@/context/UserDetailContext";
import axios from "axios";
import React, { useEffect } from "react";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<any>(null);
  useEffect(() => {
    CreateNewUser();
  }, []);

  const CreateNewUser = async () => {
    // user API endpoint call to create new user
    const result = await axios.post("/api/user", {});
    console.log("Response", result.data);
    setUser(result.data);
  };

  return (
    <>
      <UserDetailContext.Provider value={{ user, setUser }}>
        {children}
      </UserDetailContext.Provider>
    </>
  );
};

export default AppProvider;
