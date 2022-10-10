import { Route, Routes } from "react-router-dom";
import Episode from "./components/Episode";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";
import Header from "./components/Header";
import Specific from "./components/Specific";
import Home from "./components/Home";
import Character from "./components/Character";


function App() {
  return (
    <>
      <Header/>
<div className="py-5">

    <Routes>
    <Route path="/" element={<Home />} />

      <Route path="/characters" element={<Character/>} />
      <Route path="/specific" element={<Specific/>} />  
      <Route exact path="/locations" element={<Locations/>}/>
        <Route exact path="/episodes" element={<Episodes/>}/>
        <Route exact path="/episode" element={<Episode/>}></Route>


      </Routes>
      </div>
      </>
  );
}

export default App;
