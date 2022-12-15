import './App.css';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Index from './pages/Index';
import Expensive from './pages/Expensive';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
        <Routes>
        <Route exact path='/' element={<Index/>}/>
        <Route path='/exp' element={<Expensive />}/>
        <Route path='/about' element={<About/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
