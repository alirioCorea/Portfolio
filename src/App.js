import './App.css';
import Banner from './components/Banner';
import BavBar from './components/NavBar';
import Projetcs from './components/Projetcs';
import Skills from './components/Skills';


function App() {
  return (
    <div className='app'>
      <BavBar />
      <Banner />
      <Skills />
      <Projetcs />
    </div>  
  );
}

export default App;
