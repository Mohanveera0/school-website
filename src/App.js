import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Academics from "./components/Academics";
import Footer from "./components/Footer";
import Admissions from "./components/Admissions";
import Faculty from "./components/Faculty";
import Students from "./components/Students";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/academics" element={<Academics/>} />
          <Route path="/admissions" element={<Admissions/>} />
          <Route path="/faculty" element={<Faculty/>} />
          <Route path="/students" element={<Students/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contactUs" element={<ContactUs/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
