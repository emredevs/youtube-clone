"use client";
import React, { useState } from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import { Menu } from "../../sidebarInfo";
import Link from "next/link";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebarContainer">
      <div>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? "Close Menu" : "Open Menu"}
        </button>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <ul className="menu">
            {Menu.map(
              (info: { name: string; icon: Element }, index: number) => {
                <li key={index}>
                  <Link href={"/"}>
                    {info.name}
                    {info.icon}
                  </Link>
                </li>;
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
