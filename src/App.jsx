import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Spline from '@splinetool/react-spline';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  );
}

export default App;
