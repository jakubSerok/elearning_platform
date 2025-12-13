"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import Header from "./_components/Header";
import { UserDetailContext } from "@/context/UserDetailContext";
function Provider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState();
  useEffect(() => {
    user && createNewUser();
  }, [user]);

  const createNewUser = async () => {
    const result = await axios.post("/api/user", {});
    setUserDetail(result?.data);
  };
  return (
    <NextThemesProvider {...props}>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        <div className="flex flex-col items-center">
          <Header />
        </div>{" "}
        {children}
      </UserDetailContext.Provider>
    </NextThemesProvider>
  );
}

export default Provider;
