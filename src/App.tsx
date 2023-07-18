import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Main from "./pages/Main";

function App() {
  throw Error("THIS IS A SAMPLE, PLEASE COPY THE PROJECT AND DELETE THIS LINE");
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
