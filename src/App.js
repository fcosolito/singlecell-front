import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar';
import Heatmap from './components/plots/Heatmap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LowDimensional from './components/plots/LowDimensional';

function App() {
  return (
    <div className="App">
      <Navbar>
        <BrowserRouter>
          <Routes>
            <Route path='/plots/heatmap' element={<Heatmap apiPlotUrl={"http://localhost:8080/plots/heatmap"}/>} />
            <Route path='/plots/low_dimensional' element={<LowDimensional apiPlotUrl={"http://localhost:8080/plots/low_dimensional/by_resolution"} />}/>
          </Routes>
        </BrowserRouter>
      </Navbar>

    </div>
  );
}

export default App;
