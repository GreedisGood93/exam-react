import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBook from './components/AddBook';
import Books from './components/Books';
import ViewBook from './components/ViewBook';

function App() {

  return (
    <div>
      <Routes>
        <Route
        path='/'
        element={<Books/>}
        />
        <Route
        path='viewbook/:id'
        element={<ViewBook/>}
        />
      </Routes>
    </div>
  );
}

export default App;
