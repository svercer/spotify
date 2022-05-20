import Axios from "axios";

Axios.defaults.baseURL = 'https://api.spotify.com/v1/browse';
Axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export const getNewReleases = async (inputLimit = null) => {
  try {
    const res = await Axios.get('/new-releases', {
      params: {
        country: 'ES',
        limit: inputLimit ?? 10
      }, headers: {
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    })
    return res.data.albums.items
  } catch (e) {
    console.log(e)
  }
}

export const getFeaturedPlaylist = async (inputLimit = null) => {
  let date = new Date()
  try {
    const res = await Axios.get('/featured-playlists', {
      params: {
        country: 'SE',
        locale: 'SE',
        limit: 10,
        timestamp: date.toISOString()
      },
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    return res.data.playlists.items
  } catch (e) {
    console.log(e)
  }
}

export const getBrowseGenres = async (category_id, inputLimit) => {
  //default category_id = rock
  try {
    const res = await Axios.get(`/categories/${category_id}/playlists`, {
      params: {
        country: 'ES',
        limit: inputLimit ?? 10
      }
    })
    return res.data.playlists.items
  } catch (error) {
    console.log(error.response)
    return error.response
  }
}
