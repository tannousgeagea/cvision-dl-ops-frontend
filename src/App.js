
import './App.css';
import Home from './pages/home';
import Dataset from './pages/dataset';
import UploadPage from './pages/upload-page';
import Layout from './components/ui/layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dataset" element={<Dataset />} />
          <Route path='/upload' element={<UploadPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
