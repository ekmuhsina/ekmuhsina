import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import "./header.css";
import Search from "./Search";
import NavBar from "./NavBar";

function Header() {
  return (
    <nav className="navbar navbar-expand bg-primary position-fixed w-100 top-0 z-2">
      <div className="container-fluid row ">
        <Link href={"/"} className={"navbar-brand col-2 "}>
          <Image src={logo} alt="logo" width={150} />
        </Link>
        <div className="col-6">
          <Search />
        </div>
        <div className="col-4">
          <NavBar />
        </div>
      </div>
    </nav>
  );
}

export default Header;
