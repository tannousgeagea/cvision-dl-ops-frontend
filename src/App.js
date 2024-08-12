import logo from './logo.svg';
import './App.css';
import Navbar from './components/ui/navbar';
import Home from './pages/home';
import Dataset from './pages/dataset';
import Layout from './components/ui/layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dataset" element={<Dataset />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
