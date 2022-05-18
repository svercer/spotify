import NewReleases from "./pages/NewReleases";
import FeaturedPlaylist from "./pages/FeaturedPlaylist";
import CategoryPlaylist from "./pages/CategoryPlaylist";
import {Route, Link, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/new-releases' element={<NewReleases />}/>
      <Route path='/featured-playlist' element={<FeaturedPlaylist />}/>
      <Route path='/category-playlist' element={<CategoryPlaylist />}/>
    </Routes>
  );
}

export default App;
