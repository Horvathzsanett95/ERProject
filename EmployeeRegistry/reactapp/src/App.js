import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Employees from './components/Employees';
import OrganizationalUnits from './components/OrganizationalUnits';
import NavMenu from './components/NavMenu';

function App() {
    return (
        <Router>
            <NavMenu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/organizationalunits" element={<OrganizationalUnits />} />
      </Routes>
    </Router>
    )
}

export default App;