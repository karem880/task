import "./index.css"
import Home from "./pages/home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./component/navbar";

import { useState } from "react";
import Loader from "./component/loader/Loader";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 4000);


  return (
    <>
    {isLoading && <Loader />}
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="Navbar" element={<Navbar />} />



    </Routes>
    </Router>

   
    </>
  )
}

export default App
