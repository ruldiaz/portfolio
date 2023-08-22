import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experience';

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
      </div>
    </>
  );
}

export default App;
