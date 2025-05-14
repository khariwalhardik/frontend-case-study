import './App.css';
import { ProfileProvider } from './context/ProfileContext';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import { useState } from 'react';

function App() {
  const [view, setView] = useState('home');

  return (
    <ProfileProvider>
      <div>
        <button onClick={() => setView('home')}>Home</button>
        <button onClick={() => setView('admin')}>Admin</button>
      </div>
      {view === 'home' ? <Home /> : <AdminDashboard />}
    </ProfileProvider>
  );
}

export default App;
