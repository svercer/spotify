import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import {getNewReleases} from "../api/spotify";
import NewReleasesList from '../components/lists/NewReleasesList'


const NewReleases = () => {
  const [newReleases, setNewReleases] = useState({})
  useEffect(() => {
    getNewReleases().then(res => setNewReleases(res))
  },[])

  return (
    <Layout title='New Releases'>
      <NewReleasesList newReleases={newReleases} />
    </Layout>
  )
}

export default NewReleases
