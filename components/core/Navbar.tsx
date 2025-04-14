import { headers } from "next/headers";
import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = async () => {
  const reqHeaders = await headers();
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(
    reqHeaders.get("user-agent") || ""
  );

  if (isMobile) {
    return <MobileNavbar />;
  } else {
    return <DesktopNavbar />;
  }
};

export default Navbar;
