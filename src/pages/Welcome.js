import React from "react";
import {auth, extractToken} from "../auth";
import {Navigate, useLocation} from "react-router-dom";
import {Spotify} from "../components/icons/spotify";

const Welcome = () => {

  const location = useLocation();
  const RESPONSE_TYPE='token'
  const END_POINT='https://accounts.spotify.com/authorize'
  extractToken(location)

  if (!auth()){
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
              href={`${END_POINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}
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
