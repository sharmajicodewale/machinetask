
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './screen/Register';
import Login from './screen/Login';
import Profile from './screen/Profile';
import NumberPage from './screen/NumberPage';
import { useState } from "react";

// import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div >
     <Router>
      <Routes>
        <Route element={<Register />} path="/" />
        <Route
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
          path="/login"
        />
        {isLoggedIn ? (
          <>
            <Route element={<Profile />} path="/profile" />
            <Route element={<NumberPage />} path="/page" />
          </>
        ) : null}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
