
import './App.css';
import Home from './pages/home/home';
import Datalake from './pages/datalake/datalake';
import Projects from './pages/project/projects';
import UploadPage from './pages/upload/upload-page';
import Layout from './components/ui/common/layout';
import ImageAnnotation from './pages/annotate/annotate';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/datalake' element={<Datalake />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/upload' element={<UploadPage />} />
          <Route path='/annotate/:imageId' element={<ImageAnnotation />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
