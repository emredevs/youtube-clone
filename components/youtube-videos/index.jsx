"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Link from "next/link";
export default function YoutubeVideos() {
  const [playlistData, setPlaylistData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/trending",
      params: {
        id: "PLMC9KNkIncKseYxDN2niH6glGRWKsLtde",
      },
      headers: {
        "X-RapidAPI-Key": "818b51eaf4mshc94b50a69c2da29p1b28adjsn194ae56244ff",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };
    axios
      .get(options.url, {
        params: options.params,
        headers: options.headers,
      })
      .then((res) => setPlaylistData(res.data.data.slice(0, 10)));
  }, []);

  console.log(playlistData);

  return (
    <div className={styles.videoContainer}>
      {playlistData.map((playlistData, index) => (
        <div className={styles.videoBox} key={index}>
          <Link href={`/detail/${playlistData.videoId}`}>
            <img src={playlistData.thumbnail[0].url} alt="" />
            <div className={styles.timeInfo}>{playlistData.lengthText}</div>
            <div className={styles.chanelInfo}>
              <img src={playlistData.channelThumbnail[0]?.url} alt="" />
              <div>
                <div>
                  <b>{playlistData.title}</b>
                </div>
                <div>{playlistData.channelTitle}</div>
                <span>{playlistData.viewCount.slice(0, 3)}M views</span>{" "}
                <span>{playlistData.publishedText}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
