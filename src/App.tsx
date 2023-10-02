import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BaseLayout from "./components/BaseLayout/BaseLayout";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";
import NavBar from "./components/NavBar/NavBar";
import { routing } from "./config/routing";
import useMediaQuery from "./hooks/useMediaQuery";
import { theme } from "./style/theme";

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Router>
      <BaseLayout>
        {!isMobile && <NavBar />}
        <Routes>
          {routing.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
        {isMobile && <MobileNavBar />}
      </BaseLayout>
    </Router>
  );
}

export default App;
