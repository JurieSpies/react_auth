import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Reset from './pages/Reset/Reset';
import Dashboard from './pages/Dashboard/Dashboard';
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;


const MainContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Router>
    <MainContainer >
      <NavContainer >
        <a href='/'>Home</a>
        <a href='/login'>Login</a>
        <a href='/reset'>Reset</a>
        <a href='/dashboard'>Dashboard</a>
      </NavContainer>
        <img src={logo} className="App-logo" alt="logo" />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </MainContainer>
    </Router>
  );
}

export default App;
