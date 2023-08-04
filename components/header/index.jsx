"use client";
import React from "react";
import Sidebar from "../sidebar";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "./styles.module.css";
import YoutubeInput from "../youtube-input";
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div>
        <YouTubeIcon sx={{ color: "red" }} />
        <span>
          YOUTUBE
          <sup style={{ fontSize: "small", fontWeight: "normal" }}>TR</sup>
        </span>
      </div>
      <YoutubeInput />
      <Sidebar />
    </div>
  );
}
