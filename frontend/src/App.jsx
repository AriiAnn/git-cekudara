import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import SignUp from "./components/signup";
import Profile from "./components/profile";
import { RequireToken } from "./components/Auth.js";

function App() {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/profile"
            element={
              <RequireToken>
                <Profile />
              </RequireToken>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
