"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styles from "./styles.module.css";
export default function YoutubeInput() {
  const [search, setSearch] = useState("");

  return (
    <form className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <SearchIcon />
        </button>
        <KeyboardVoiceIcon />
      </div>
      <div>
        <MoreVertOutlinedIcon />
        <AccountCircleOutlinedIcon />
      </div>
    </form>
  );
}
