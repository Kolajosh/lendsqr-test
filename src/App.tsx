import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";

import PagesRoutes from "./routes/Routes";

function App() {
  const route = document.location.pathname;
  const [openSidebar, setOpenSidebar] = useState(false);  

  const toggleSidebar = () => {
    // e.preventDefault();
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <Router>
        {route !== "/" && (
          <Navbar toggleSidebar={toggleSidebar} openSidebar={openSidebar} />
        )}
        {route !== "/" && <Sidebar route={route} openSidebar={openSidebar} />}
        <PagesRoutes />
      </Router>
    </>
  );
}

export default App;
