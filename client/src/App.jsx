import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experience';
import CursorFollower from './components/cursorFollower';

function App() {
  return (
    <>
      <div className="app-container">
        <div className="left-half">
          <Header />
          <Footer />
        </div>
        <div className="right-half">
          <About />
          <Experience />
          <Projects />
        </div>
        <CursorFollower />
      </div>
    </>
  );
}

export default App;
