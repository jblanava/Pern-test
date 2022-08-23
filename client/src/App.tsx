import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import { Connection } from "./pages/Connection/Connection";
import { User } from "./pages/User/User";

const lngList = [
  { id: "gb", nativeName: "English" },
  { id: "es", nativeName: "Español" },
  { id: "fr", nativeName: "François" },
  { id: "de", nativeName: "Deutsch" },
];

export const URL_BASE: string =
  "http://" +
  process.env.REACT_APP_SERVER_HOST +
  ":" +
  process.env.REACT_APP_SERVER_PORT;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User lngs={lngList} />} />
        <Route path="/connections" element={<Connection lngs={lngList} />} />
        <Route
          path="/connections/:id"
          element={<Connection lngs={lngList} />}
        />
      </Routes>
    </Router>
  );
}

export interface UserInterface {
  id: number;
  name: string;
}

export default App;
