import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import { Connection } from "./pages/Connection/Connection";
import { User } from "./pages/User/User";


export const URL_BASE: string =
  "http://" +
  process.env.REACT_APP_SERVER_HOST +
  ":" +
  process.env.REACT_APP_SERVER_PORT;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/connections" element={<Connection />} />
        <Route path="/connections/:id" element={<Connection />} />
      </Routes>
    </Router>
  );
}

export interface UserInterface {
  id: number;
  name: string;
}

export default App;
