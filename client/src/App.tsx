import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

//components
import { Connections } from './pages/Connection';
import { Users } from './pages/User';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/connections/:id" element={<Connections />} />
        {/* <Route path="/connections/:id" element={<EspecificConnections />} /> */}
      </Routes>
    </Router>
  );
}

export interface UserInterface{
  id: number;
  name: string;
}

export default App;
