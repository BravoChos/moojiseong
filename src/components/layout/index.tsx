import React, { ReactNode } from "react";
import Header from "../header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-start md:px-20">
        <div className="min-h-screen w-full md:w-2/3 max-w-full text-center">{children}</div>
      </div>
    </>
  );
};

export default Layout;
