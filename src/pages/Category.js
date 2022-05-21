import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getBrowseGenres } from "../api/spotify";
import CategoryPlaylist from "../components/lists/CategoryPlaylist";

const Category = () => {
  const [genres, setGenres] = useState({});
  const [searchGenre, setSearchGenre] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setGenres({});
    getBrowseGenres(searchGenre).then((res) => {
      if (res) {
        setGenres(res);
      }
      if (res.status === 404) {
        setErrorMessage("No Genres found");
      }
    });
  };

  useEffect(() => {
    setErrorMessage('No Genres found')
  },[])

  const handleChange = (e) => {
    e.preventDefault();
    setSearchGenre(e.target.value);
  };
  if (!genres) {
    return <div></div>;
  }
  return (
    <Layout title="Categories Playlist">
      <div className="relative mt-5">
        <input
          type="text"
          name="searchGenre"
          value={searchGenre}
          className="flex-1 appearance-none border w-60 border-gray-300 py-2 px-4 rounded-lg bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Enter your search genre"
          onChange={(e) => handleChange(e)}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
          onClick={(e) => handleSubmit(e)}
        >
          Search
        </button>
      </div>
      <br />
      Category Playlist
      {errorMessage && <div className="text-green-600">{errorMessage}</div>}
      {genres && genres.length > 0 && (
        <CategoryPlaylist categoryPlaylist={genres} />
      )}
    </Layout>
  );
};

export default Category;
