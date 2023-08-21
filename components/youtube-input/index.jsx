"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./styles.module.css";
export default function YoutubeInput() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const formSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    router.push(`/${search}`);
  };

  return (
    <>
      <form onSubmit={formSubmit} className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
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
          <div className={styles.responsiveInput}>
            {open && (
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            )}
            {!open && (
              <SearchIcon
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(true)}
              />
            )}
            {open && (
              <CloseIcon
                style={{
                  position: "absolute",
                  top: "3.5vh",
                  right: "7vh",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(false)}
              />
            )}
          </div>
          <MoreVertOutlinedIcon />
          <AccountCircleOutlinedIcon />
        </div>
      </form>
    </>
  );
}
