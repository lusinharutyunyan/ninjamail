import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import "./components/Header.css";
import Info from "./components/Info";
import Navbar from "./components/Navbar";

import Video from "./components/Video";

function App() {
  return (
    <Container
      fluid
      className='app'
    >
      <header>
        <Navbar />
      </header>
      <div className='main'>
        <Header />
        <Video />
        <Info />
      </div>
      <footer></footer>
    </Container>
  );
}

export default App;
