import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";
import Counter from "./hooks/Counter";
import Timer from "./hooks/Timer"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/product" element={<Products />} />
        </Routes>
      </Router>


      {/* <Counter/>
      <Timer/> */}
    </>
  );
}

export default App;
