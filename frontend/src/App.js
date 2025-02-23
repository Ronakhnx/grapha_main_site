// import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Form from './components/Form';
import Home from './components/Home';
import HowItIsWork from './components/HowItIsWork';
import New_How_It_Work from './components/New_How_It_Work';
import NewOurWork from './components/NewOurWork';
import OurWork from './components/OurWork';
import Technolgy from './components/Technolgy';
import Terms_Condition from './components/Terms_Condition';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/terms_condition" element={<Terms_Condition/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/how_it_is_work" element={<New_How_It_Work/>} />
        <Route path="/contact" element={<Form/>} />
        <Route path="/our_work" element={<OurWork/>} />
        <Route path="/NewOurWork" element={<NewOurWork />} />
        <Route path="/technology" element={<Technolgy/>} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
