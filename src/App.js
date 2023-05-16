import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profiles from './components/Profiles';
import RocketList from './components/RocketList';
import Mission from './components/Mission';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<RocketList />} />
      <Route path="/rockets" element={<RocketList />} />
      <Route path="/missions" element={<Mission />} />
      <Route path="/profiles" element={<Profiles />} />
    </Routes>
  </div>
);

export default App;
