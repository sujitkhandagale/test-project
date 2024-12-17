import React from "react";
import Header from "@/components/layout/header/header";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
