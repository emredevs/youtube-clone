"use client";
import React, { useState } from "react";
import "./styles.css";
export default function RemarksComments({ videos }) {
  const [more, setMore] = useState(false);
  return (
    <>
      <div className="remarksBox">
        <div>{videos.description?.slice(0, 150)}</div>
        {more && <span>{videos.description?.slice(151)}</span>}
        <div>
          <button className="btn" onClick={() => setMore(!more)}>
            {more ? "  show less" : "...more"}
          </button>
        </div>
      </div>
      <div>yorum</div>
    </>
  );
}
