import logo from './logo.svg';
import './App.css';
import { Homepage, First, Second, Third, Fourth } from './pages/Homepage';

function App() {
  return (
  
 <Router>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pg1" element={<First />} />
      <Route path="/pg2" element={<Second />} />
      <Route path="/pg3" element={<Third />} />
      <Route path="/pg4" element={<Fourth />} />
      </Routes>
      </Router>
  );
}

export default App;
