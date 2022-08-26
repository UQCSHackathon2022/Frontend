import { useState } from "react";
import SignIn from "./Pages/Auth/Signin/SignIn";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
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
