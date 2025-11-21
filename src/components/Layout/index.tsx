import { Sidebar } from "../Sidebar/Sidebar";
import React from "react";

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default Layout;
