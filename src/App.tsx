import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Navigate,
} from "react-router-dom";
import Index from './view/index/index';
import Login from './view/login/login';
import Home from './view/home/Home'
import My from './view/my/my'
function App() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <BrowserRouter>

        <Routes>
          {/* 路由重定向 */}
          <Route path="/" element={< Navigate to='Login' />} />
          <Route path="/login" element={<Login />} />
          <Route path="/index" element={<Index />}>
            <Route path='home' element={< Home />}></Route>
            <Route path='my' element={< My />}></Route>
          </Route>

          {/* <Route path="/home" element={<Home/>}/> */}
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
