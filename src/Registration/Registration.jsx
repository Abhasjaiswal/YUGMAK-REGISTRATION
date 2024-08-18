import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';

function App() {
  
  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>
            <Route path='/page1' element={<Page1 />} />
            <Route path='/page2' element={<Page2 />} />
            <Route path='/page3' element={<Page3 />} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );

}

export default App;
