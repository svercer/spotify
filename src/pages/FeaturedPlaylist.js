import React from "react";
import Layout from "../components/Layout";
import {auth} from "../auth";

const FeaturedPlaylist = () => {
  return (
    <Layout auth={auth()}>
      Featured Playlist
    </Layout>
  )
}

export default FeaturedPlaylist
