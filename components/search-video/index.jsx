"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../youtube-videos/styles.module.css";
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
          <Link href={"/"}>
            <img src={searchVideo.thumbnail[0].url} alt="" />
            <div>{searchVideo.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
