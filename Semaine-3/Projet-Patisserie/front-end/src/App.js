import React from "react";
import { 
  BrowserRouter as Router,
  Link,
  Routes,
  Route, 
} from "react-router-dom";
import { Pastries } from './routes/pastries';
import { Home } from './routes/home';

function App() {

  return (
    <Router>
      <h1>Je suis un titre</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="pastries">Pastries</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="pastries" element={<Pastries />} />
      </Routes>
    </Router>
  );
}

export default App;
