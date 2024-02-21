import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Otzivy from "./Components/pages/Otzivy/Otzivy";
import About from "./Components/pages/About/About";
import Doctors from "./Components/pages/Doctors/Doctors";

function App() {
  return (
    <div className="wrapper font-roboto-regular">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/otzivy' element={<Otzivy />}></Route>
        <Route path='/doctors' element={<Doctors />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
