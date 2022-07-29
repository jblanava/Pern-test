import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



//components
import { Connections } from './pages/Connection';
import { Users } from './pages/User';


export const URL_BASE: string = 'http://' + 'localhost' + ':' + '3000';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/connections/:id" element={<Connections />} />
      </Routes>
    </Router>
  );
}

export interface UserInterface{
  id: number;
  name: string;
}

export default App;
