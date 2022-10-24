import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Monsterlist from "./Monsterlist.js";
 import MaterialList from "./ML.js";
import Weaponlist from "./WeaponList.js";
import Newbie from "./Newbie.js";
import Error  from "./Error.js";
import Contact from "./contactus.js";
import Dlc from "./dlc.js";
import MonsterDetail from "./MonsterDetail.js"
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Monsterlist />} />
        <Route path="/Contactus" element={<Contact/>} />
        <Route path="/Dlc" element={<Dlc />} />
        <Route path="/MaterialList" element={<MaterialList />} />
        <Route path="/WeaponList" element={<Weaponlist />} />
        <Route path="/Newbie" element={<Newbie />} />
       
        <Route path="/MonsterDetail" element={<MonsterDetail />}>
        <Route path = ":id"element={<MonsterDetail/>} />
        
      </Route>
       
       <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
