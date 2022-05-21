import NewReleases from "./pages/NewReleases";
import FeaturedPlaylist from "./pages/Featured";
import Category from "./pages/Category";
import {Route, Link, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />}/>
      <Route path='/new-releases' element={<NewReleases />}/>
      <Route path='/featured-playlist' element={<FeaturedPlaylist />}/>
      <Route path='/category-playlist' element={<Category />}/>
    </Routes>
  );
}

export default App;
