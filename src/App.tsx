import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/assets" element={<div>Assets</div>} />
        <Route path="/assets/:id" element={<div>Asset details</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
