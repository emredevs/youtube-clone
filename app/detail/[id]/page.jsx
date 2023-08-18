import React from "react";
import VideoDetail from "../../../components/video-detail";
import page from "./page.module.css";
export default function DetailVideoPage({ params }) {
  return (
    <div className={page.videoDetail}>
      <VideoDetail params={params.id} />
    </div>
  );
}
