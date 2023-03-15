import Registration from './screen/Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './screen/Register';
import Login from './screen/Login';
import Profile from './screen/Profile';
import NumberPage from './screen/NumberPage';

// import './App.css';

function App() {
  return (
    <div >
      <Router>
        <Routes>
        <Route element={<Register />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<NumberPage />} path="/page" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
