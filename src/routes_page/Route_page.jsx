import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../home/Home';
import Header from '../components/Header';
import Social_medial from '../components/fixed_social_media/social_medial';

export default function Route_page() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                {/* <Route path='/' element={}/> */}
                {/* <Route path='/' element={}/> */}
            </Routes>
            <Social_medial/>
        </Router>
    </div>
  )
}
