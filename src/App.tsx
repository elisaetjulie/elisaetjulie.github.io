import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BaseLayout from "./components/BaseLayout/BaseLayout";
import NavBar from "./components/NavBar/NavBar";
import { routing } from "./config/routing";

function App() {
  return (
    <Router>
      <BaseLayout>
        <NavBar />
        <Routes>
          {routing.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;
