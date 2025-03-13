import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './screen/Navbar/Navbar';
import Home from './screen/Home/Home';
import Dashboard from './screen/Dashboard/Dashboard';
import Settings from './screen/Settings/Settings';
import Profile from './screen/Profile/Profile';

function App() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;