import about from "./components/about";
import contact from "./components/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import pageNotFound from "./components/pageNotFound";
import nav from "./components/nav";


function App(){
  console.log("parent");
  
  return(<>
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={about}  />
      <Route path="/contact" Component={contact}  />
      <Route path="/" Component={pageNotFound}  />

      </Routes>
      </BrowserRouter>
  </>)

}


export default App