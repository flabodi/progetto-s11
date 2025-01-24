import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Novita from "./components/Novita";
import Radio from "./components/Radio";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Player from "./components/Player";
import NuoveUscite from "./components/NuoveUscite";



function App() {
  return (
    <>
      <MyNavbar />
      <Novita />
      <Radio />
      <NuoveUscite/>
      <Section />
      <Footer />
      <Player/>
   
    </>
  );
}

export default App;
