import React from "react";
import SearchVideos from "../../components/search-video";

export default function SearchPage({ params }) {
  console.log(params.id);
  return (
    <div>
      <SearchVideos params={params.id} />
    </div>
  );
}
