import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Help from '../src/pages/help/Help';
import { UserProvider } from '../src/context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="bg-[#1a1a1a] min-h-screen text-white">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
