
import './App.css';
import Datalake from './pages/datalake/datalake';
import Projects from './pages/project/projects';
import UploadPage from './pages/upload/upload-page';
import Layout from './components/ui/common/layout';
import ImageAnnotation from './pages/annotate/annotate';
import Dataset from './pages/dataset/dataset';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/datalake' element={<Datalake />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='projects/:projectId' element={<Dataset />} />
          <Route path='/upload' element={<UploadPage />} />
          <Route path='/annotate/:imageId' element={<ImageAnnotation />} />
        {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
