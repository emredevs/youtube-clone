"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
export default function SearchVideos({ params }) {
  const [searchVideo, setSearchVideo] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/search",
      params: {
        query: `${params}`,
        geo: "US",
        lang: "en",
      },
      headers: {
        "X-RapidAPI-Key": "818b51eaf4mshc94b50a69c2da29p1b28adjsn194ae56244ff",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };
    axios(options).then((res) => setSearchVideo(res.data.data.slice(0, 10)));
  }, [params]);

  console.log(searchVideo);
  return (
    <div className={styles.videoContainer}>
      {searchVideo.map((searchVideo, index) => (
        <div className={styles.videoBox} key={index}>
          <Link href={`/detail/${searchVideo.videoId}`}>
            <img src={searchVideo.thumbnail[0].url} alt="" />
            <div>
              <h3>{searchVideo.title}</h3>
              <div
                style={{ fontSize: "small", color: "grey", marginTop: "10px" }}
              >
                {searchVideo?.viewCount && (
                  <span>{searchVideo.viewCount.slice(0, 3)}M views</span>
                )}
              </div>
              <div className={styles.channelInfo}>
                {searchVideo?.channelThumbnail?.[0]?.url && (
                  <img src={searchVideo.channelThumbnail[0]?.url} alt="" />
                )}
                <div>{searchVideo.channelTitle}</div>
              </div>

              <p
                style={{ fontSize: "small", color: "grey", marginTop: "10px" }}
              >
                {searchVideo.description}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
