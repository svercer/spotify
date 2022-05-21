import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { auth } from "../auth";
import { getFeaturedPlaylist } from "../api/spotify";
import FeaturedList from "../components/lists/FeaturesList";

const Featured = () => {
  const [featuredPlaylist, setFeaturedPlaylist] = useState({});
  useEffect(() => {
    try {
      getFeaturedPlaylist().then((res) => setFeaturedPlaylist(res));
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  if (!featuredPlaylist) {
    return <div>No list</div>;
  }
  return (
    <Layout title='Featured Playlist'>
      <FeaturedList featuredList={featuredPlaylist} />
    </Layout>
  );
};

export default Featured;
