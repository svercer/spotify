import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import {getNewReleases} from "../api/spotify";
import {auth} from "../auth";


const NewReleases = () => {
  const [newReleases, setNewReleases] = useState({})
  useEffect(() => {
    getNewReleases().then(res => setNewReleases(res))
  },[])

  console.log('releases', newReleases)
  return (
    <Layout>
      <h1 className='text-blue-500'>
        New Releases
        {
          newReleases.length > 0 && newReleases.map(release => (
            <div key={release.id}>
              <p>{release.name}</p>
            </div>
          ))
        }
      </h1>
    </Layout>
  )
}

export default NewReleases
