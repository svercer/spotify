import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import {getBrowseGenres} from "../api/spotify";
import {auth} from "../auth";



const CategoryPlaylist = () => {
  const [genres, setGenres] = useState({})
  const [searchGenre, setSearchGenre] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMessage('')
    setGenres({})
    getBrowseGenres(searchGenre).then(res => {
      if (res){
        setGenres(res)
      }
      if (res.status === 404){
        setErrorMessage('No Categories found')
      }
    })
  }

  const handleChange = (e) => {
    e.preventDefault()
    setSearchGenre(e.target.value)
  }
  if (!genres){
    return (
      <div>

      </div>
    )
  }
  return (
    <Layout>
      <br/>
      <input type="text"
             name='searchGenre'
             value={searchGenre}
             onChange={(e) => handleChange(e)}/>
      <button onClick={(e) => handleSubmit(e)}>Search</button>
      Category Playlist
      {
        errorMessage && <div className='text-green-600'>{errorMessage}</div>
      }
      {
        (genres && genres.length > 0) && genres.map(genre => (
          <div key={genre.id}>
            <p>{genre.name}</p>
            <img className='circle' style={{width: '100px', height: '100px'}} src={genre.images[0].url} alt=""/>
          </div>
        ))
      }
    </Layout>
  )
}

export default CategoryPlaylist
