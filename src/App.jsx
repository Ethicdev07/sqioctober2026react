import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";






function App(){
  return (
    <>
      <Router>
          <Routes>

              <Route path="/" element={<LandingPage/>}/>

              <Route path="/product" element={<Products/>}/>


          </Routes>




      </Router>
    
    </>
  )
}

export default App