// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
// import Innovation from './Innovation/Innovation';
import Registration from './Registration/Registration';
import Page1 from '../src/Registration/Page1/Page1';
import Page2 from '../src/Registration/Page2/Page2';
import Page3 from '../src/Registration/Page3/Page3';
function App() {
  
  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/events" element={<Home />} />
            <Route path="/persona" element={<Persona />} />
            <Route path="/HOME" element={<Home />} />
            <Route path='/pixel-perfect' element={<PixelPerfect />} />
            {/* <Route path='/innovation' element={<Innovation />} /> */}
            <Route path='/registration' element={<Registration />} />
            <Route path='/page1' element={<Page1 />} />
            <Route path='/page2' element={<Page2 />} />
            <Route path='/page3' element={<Page3 />} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );

}

export default App;
