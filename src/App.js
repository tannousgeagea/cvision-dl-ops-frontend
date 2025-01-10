
import './App.css';
import Datalake from './pages/datalake/datalake';
import Projects from './pages/project/projects';
import UploadPage from './pages/upload/upload-page';
import Layout from './components/ui/common/layout';
import ImageAnnotation from './pages/annotate/annotate';
import Dataset from './pages/dataset/dataset';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/ui/common/sidebar';
import ProjectLayout from './components/ui/common/project-layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/datalake' element={<Datalake />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/upload' element={<UploadPage />} />
          {/* <Route path='/annotate/:imageId' element={<ImageAnnotation />} /> */}
          <Route path='projects/:projectId' element={<ProjectLayout />}>
            <Route path='dataset' element={<Dataset />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
