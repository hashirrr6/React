import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load components
const Hoc = lazy(() => import('./HOC'));
const Base = lazy(() => import('./BaseComponent'));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* Wrap lazy-loaded routes in Suspense */}
        <Suspense fallback={<h1>Loading.....</h1>}>
          <Routes>
            <Route path="/" element={<Hoc />} />
            <Route path="/base" element={<Base />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
