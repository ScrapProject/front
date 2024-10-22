/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './root.sass';
import GridCardTrack from './components/GridCardTrack';
import BookmarkletLink from './bookmarklet/BookmarkletLink';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<BookmarkletLink />} />
        <Route path="/bookmarklet" element={<GridCardTrack />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
