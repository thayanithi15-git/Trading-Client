import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Home from './Pages/Home/Home';
import Support from './Pages/Support/Support';
import Analysis from './Pages/Analysis/Analysis';
import Book from './Pages/Book/Book';
import Update from './Pages/Update/Update';

function App() {
  return (
    <div style={{height: "100vh", width: "100vw", backgroundColor: "black", color: "white"}}>
      <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/support' element={<Support />}/>
            <Route path='/analysis' element={<Analysis />}/>
            <Route path='/book-a-call' element={<Book />}/>
            <Route path='/update' element={<Update />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
