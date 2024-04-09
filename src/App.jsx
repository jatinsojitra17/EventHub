import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { getUser } from './utilities/users-service.js';
// import LandingPage from './pages/LandingPage/LandingPage.jsx';
// import DashboardPage from './pages/DashboardPage/DashboardPage.jsx';
// import CreateEventPage from './pages/CreateEventPage/CreateEventPage.jsx';
// import EventShowPage from './pages/EventShowPage/EventShowPage.jsx';
// import EditEventPage from './pages/EditEventPage/EditEventPage.jsx';
// import ManageEventsPage from './pages/ManageEventsPage/ManageEventsPage.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
// import LoginForm from './components/LoginForm/LoginForm.jsx';
import './App.css';

export default function App() {
  // const [user, setUser] = useState(getUser());

  return (
    <div className='App'>
      {
        <>
          <Header />
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='*' element={<Navigate to='/' replace />}></Route>
          </Routes>
          <Footer />
        </>
      }
    </div>
  );
}