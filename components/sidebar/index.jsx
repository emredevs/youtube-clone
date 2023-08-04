"use client";
import React, { useState } from "react";
import "./Sidebar.css";
import Link from "next/link";
import { Menu } from "../../sidebar";
import MenuIcon from "@mui/icons-material/Menu";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebarContainer">
      <div>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? <MenuIcon /> : <MenuIcon />}
        </button>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <ul className="menu">
            {Menu.map((menu, index) => (
              <li key={index}>
                <Link href={"/"}>
                  <span> {menu.icon}</span>
                  <span>{menu.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
