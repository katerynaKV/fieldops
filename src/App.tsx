import { Route, Routes } from 'react-router';
import Sidebar from './api/components/Sidebar/Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/assets" element={<div>Assets</div>} />
        <Route path="/assets/:id" element={<div>Asset details</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
