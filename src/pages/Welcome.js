import React from "react";
import {auth} from "../auth";
import {Navigate, useLocation} from "react-router-dom";
import {Spotify} from "../components/icons/spotify";

const Welcome = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.hash);
  const valuesString = JSON.stringify([...params.values()])
  const arrValues = JSON.parse(valuesString)
  const token = arrValues[0]
  if (token){
    localStorage.setItem('token', token)
  }
  const RESPONSE_TYPE='token'
  const REDIRECT_URI='http://localhost:3000'
  const END_POINT='https://accounts.spotify.com/authorize'

  if (!auth()){
    return (
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Spotify />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your Spotify Account
            </h2>
          </div>
            <div>
              <a
                className="group relative w-full
                flex justify-center py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-green-600 hover:bg-indigo-700 focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                href={`${END_POINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
              >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                  </span>
                Sign in
              </a>
            </div>
        </div>
      </div>
    )
  }
  return <Navigate push to={{
     pathname: '/featured-playlist'
    }}/>

}
export default Welcome
