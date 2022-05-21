import Axios from "axios";

export const auth = () => {
  const token = localStorage.getItem('token')
  if (!token) return false
  let user = {}
  getProfile(token).then(res => {
    user = res
  })
  if (user.emptied) {
    return false
  }
  return user
}

export const getProfile = async (token) => {
  try {
    const res = await Axios.get(`https://api.spotify.com/v1/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    localStorage.setItem('display_name', res.data.display_name)
    localStorage.setItem('profile_image', res.data.images[0].url)
    return res.data
  }catch (error) {
    if (error.response.status === 401){
      localStorage.removeItem('token')
    }
  }
}

export const extractToken = (location) => {
  const params = new URLSearchParams(location.hash);
  const valuesString = JSON.stringify([...params.values()])
  const arrValues = JSON.parse(valuesString)
  const token = arrValues[0]
  if (token){
    localStorage.setItem('token', token)
  }
}
