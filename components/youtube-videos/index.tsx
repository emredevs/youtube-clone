"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Trend, TrendingGet } from "@/types/trending-video/type";

export default function YoutubeVideos() {
  const [playlistData, setPlaylistData] = useState<Trend[]>([]);

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
      .get<TrendingGet>(options.url, {
        params: options.params,
        headers: options.headers,
      })
      .then((res) => setPlaylistData(res.data.data.slice(0, 10)));
  }, []);

  console.log(playlistData);

  return (
    <div>
      {playlistData.map((playlistData, index) => (
        <div key={index}>
          <img src={playlistData.thumbnail[0].url} alt="" />
          <div>{playlistData.title}</div>
        </div>
      ))}
    </div>
  );
}
