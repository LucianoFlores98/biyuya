import { Sidebar } from "../Sidebar/Sidebar";
import React from "react";

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="ml-[30%] min-h-screen overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
