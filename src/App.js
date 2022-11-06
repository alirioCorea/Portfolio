import './App.css';
import Banner from './components/Banner';
import BavBar from './components/NavBar';
import Projetcs from './components/Projetcs';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className='app'>
      <BavBar />
      <Banner />
      <Skills />
      <Projetcs />
      <Contact />
    </div>  
  );
}

export default App;
