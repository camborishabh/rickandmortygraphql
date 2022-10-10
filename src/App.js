import { Route, Routes } from "react-router-dom";
import Episode from "./components/Episode";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="App">
      {/* <Locations/> */}
      
      {/* <Episode/> */}
      <Routes>
        <Route exact path="/" element={<Locations/>}/>
        {/* <Route exact path="/" element={<Episodes/>}/> */}
        {/* <Route exact path="/episode" element={<Episode/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
