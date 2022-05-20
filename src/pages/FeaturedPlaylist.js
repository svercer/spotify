import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import {auth} from "../auth";
import {getFeaturedPlaylist} from "../api/spotify";

const FeaturedPlaylist = () => {

  const [featuredPlaylist, setFeaturedPlaylist] = useState({})
  useEffect(() => {
    try {
      getFeaturedPlaylist().then(res => setFeaturedPlaylist(res))
    }catch (error) {
      console.log('error', error)
    }
  }, [])

  if (!featuredPlaylist){
    return (
      <div>No list</div>
    )
  }
  return (
    <Layout>
      Featured Playlist
      {
        featuredPlaylist.length > 0 && featuredPlaylist.map(list => (
          <div key={list.id}>
            <p>{list.name}</p>
            <p className='text-blue-500'>{list.description}</p>
          </div>
        ))
      }
    </Layout>
  )
}

export default FeaturedPlaylist
