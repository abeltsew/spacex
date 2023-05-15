import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profiles from './components/Profiles';
import Rocket from './components/Rocket';
import Mission from './components/Mission';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/rockets" element={<Rocket />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
    </div>
  );
};

export default App;
