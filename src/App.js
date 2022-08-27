import { useState } from "react";
import SignIn from "./Pages/Auth/Signin/SignIn";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user && 
      <React.Fragment>
        <Header user={user}/>
        <SideBar />
      </React.Fragment>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn setUser={setUser} />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
