import Link from "next/link";
import React from "react";

const Layout: React.FC = ({ children }) => (
  <div className="page">
    <Link href="/">
      <a className="logo">
        <img src="/logo.png" alt="logo" />
      </a>
    </Link>
    {children}
  </div>
);

export default Layout;
