import React from 'react'
import Axios from "axios";

Axios.defaults.baseURL = 'https://api.spotify.com/v1/browse';
Axios.defaults.headers.common['Authorization'] = `Authorization ${localStorage.getItem('token')}`;

export const getNewReleases = async (inputLimit = null) => {
  try {
    const res = await Axios.get('/new-releases', {
      params: {
        country: 'ES',
        limit: inputLimit ?? 10
      }
    })
    return res.albums.items
  } catch (e) {
    console.log(e)
  }
}

export const featuredPlaylist = async (inputLimit = null) => {
  let date = new Date()
  try {
    const res = await Axios.get('/featured-playlists', {
      params: {
        country: 'SE',
        locale: 'SE',
        limit: inputLimit ?? 10,
        timestamp: date.toISOString()
      }
    })
    return res.playlists.items
  } catch (e) {
    console.log(e)
  }
}

export const browseGenres = async (category_id, inputLimit) => {
  //default category_id = rock
  try {
    const res = await Axios.get(`/categories/${category_id}/playlists`, {
      params: {
        country: 'ES',
        limit: inputLimit ?? 10
      }
    })
    return res.playlists.items
  } catch (e) {
    console.log(e)
  }
}
