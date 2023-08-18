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
                <Link href={`${menu.link}`}>
                  <span> {menu.icon}</span>
                  <span>{menu.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        style={{ position: "fixed", top: "12vh", left: "5px", zIndex: "-1" }}
      >
        {!isOpen &&
          Menu.slice(0, 5).map((menu, index) => (
            <div key={index}>
              <Link href={`/${menu.link}`}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    fontSize: "12px",
                    marginBottom: "30px",
                  }}
                >
                  {menu.icon}
                  {menu.name}
                </span>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
