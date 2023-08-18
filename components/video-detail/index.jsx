"use client";
import React, { useEffect, useState } from "react";
import DetailRightVideo from "./detail-right-video";
import RemarksComments from "./remarks-comments";
import axios from "axios";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReplyIcon from "@mui/icons-material/Reply";
import styles from "./styles.module.css";
export default function VideoDetail({ params }) {
  const [videos, setVideos] = useState({});
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/video",
      params: { id: `${params}` },
      headers: {
        "X-RapidAPI-Key": "818b51eaf4mshc94b50a69c2da29p1b28adjsn194ae56244ff",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };
    axios(options).then((res) => setVideos(res.data));
  }, [params]);
  console.log(videos);
  return (
    <div className={styles.videoDetail}>
      <div className={styles.video}>
        <iframe
          width="100%"
          height="548"
          src={`https://www.youtube.com/embed/${videos.id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h3>{videos.title}</h3>
        <div className={styles.chanelBtnsBox}>
          <div className={styles.chanelBtns}>
            <div>
              {videos?.thumbnail && (
                <img
                  style={{ borderRadius: "50%", width: "40px", height: "40px" }}
                  src={videos?.thumbnail[0].url}
                />
              )}
              <h3>{videos.channelTitle}</h3>
            </div>

            <div>
              <button>Katıl</button>
              <button>Abone ol</button>
            </div>
          </div>
          <div className={styles.userInteraction}>
            <button>
              <ThumbUpOffAltIcon />
            </button>
            <button>
              <ThumbDownOffAltIcon />
            </button>
            <button>
              <ReplyIcon
                sx={{ transform: "scaleX(-1)", transform: "scaleX(-1)" }}
              />
            </button>
            <button>
              <VerticalAlignBottomIcon />
            </button>
            <button>
              <MoreHorizIcon />
            </button>
          </div>
        </div>
        <div>
          <RemarksComments videos={videos} />
        </div>
      </div>
      <div className={styles.otherVideo}>
        <DetailRightVideo />
      </div>
    </div>
  );
}
