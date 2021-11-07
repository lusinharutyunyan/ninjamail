import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Getstarted from "./components/GetStarted";
import Header from "./components/Header";
import "./components/Header.css";
import Info from "./components/Info";
import Members from "./components/Members";
import Navbar from "./components/Navbar";
import Video from "./components/Video";

function App() {
  return (
    <Container fluid className='app'>
      <header>
        <Navbar />
      </header>
      <div className='main'>
        <Header />
        <Video />
        <Info />
        {/* <Members />
        <Brands />
        <Getstarted />
        <Footer /> */}
      </div>
    </Container>
  );
}

export default App;
