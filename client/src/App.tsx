import './App.css';
import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

//components

import InputUser from './components/Users/InputUser';
import ListUsers from './components/Users/ListUsers';

import ListEspecificConnections from './components/Connections/ListEspecificConnections';
import { Connections } from './pages/Connection';
import { EspecificConnections } from './pages/EspecificConnection';
import { Users } from './pages/User';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/connections/:id" element={<EspecificConnections />} />
      </Routes>
    </Router>
  );
}

export interface UserInterface{
  id: number;
  name: string;
}

export default App;
