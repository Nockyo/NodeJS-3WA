import React from "react";
import { 
  BrowserRouter as Router,
  Link,
  Routes,
  Route, 
} from "react-router-dom";
import { Pastries } from './routes/pastries';
import { Yams } from './routes/yams';
import { Home } from './routes/home';

function App() {

  return (
    <Router>
      <h1>Super Yams</h1>
      <p className="sousTitre">pas tout à fait fini, mais vachement bien quand même</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="pastries">Pastries</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="pastries" element={<Pastries />} />
        <Route path="yams" element={<Yams />} />
      </Routes>
    </Router>
  );
}

export default App;
