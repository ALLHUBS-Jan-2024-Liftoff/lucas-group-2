import React from "react";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import Profile from "./pages/Profile";
import NavBar from './pages/NavBar'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./pages/LoginRegister/components/UserContext";

import { SearchBar } from "./components/SearchBar";
function App() {
  return (

    <div className="App">
      <div className="search-bar-container">
        <SearchBar />
        <div>SearchResults</div>
      </div>

     <UserProvider>
      <Router>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login-register" element={<LoginRegister />} />
          <Route path={"/profile/:username"} element={<Profile />} />
        </Routes>
      </Router>  
    </UserProvider>
  </div>

  )
}

export default App;

/*<Route path="/transaction" component={Transaction} />
<Route path="/friends" component={Friends} />*/