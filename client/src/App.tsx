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

import InputConnection from './components/Connections/InputConnection';
import ListConnections from './components/Connections/ListConnections';

import ListEspecificConnections from './components/Connections/ListEspecificConnections';

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

const Users = () => {
  return (
    <Fragment>
      <h1>Prueba en Typescript feature</h1>
      <div className='container'>
        <button className="btn btn-primary mt-3" onClick={() => window.location.href = "/connections"}>
          Connections
        </button>
        <InputUser />
        <ListUsers />
      </div>
    </Fragment>
  );
};

const Connections = () => {
  return (
    <Fragment>
      <div className='container'>
        <button className="btn btn-primary mt-3" onClick={() => window.location.href = "/"}>
          Users
        </button>
        <InputConnection />
        <ListConnections />
      </div>
    </Fragment>
  );
};

const EspecificConnections = () => {
  return (
    <Fragment>
      <div className='container'>
        <button className="btn btn-primary mt-3" onClick={() => window.location.href = "/"}>
          Users
        </button>
        <ListEspecificConnections />
      </div>
    </Fragment>
  );
};

export interface ConnectionInterface{
  user1_id: number; 
  user2_id: number; 
}

export interface UserInterface{
  id: number;
  name: string;
}

export default App;
