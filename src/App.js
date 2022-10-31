import './App.css';
import Banner from './components/Banner';
import BavBar from './components/NavBar';
import Skills from './components/Skills';


function App() {
  return (
    <div className='app'>
      <BavBar />
      <Banner />
      <Skills />
    </div>  
  );
}

export default App;
