import React from 'react'
import { Link, Outlet, Routes, Route } from 'react-router-dom'

import Styles from './index.module.sass'

// import Index from '../../index/index';
// import Home from './view/home/Home'
// import My from './view/my/my'




export default function index() {
  return (
    <div>
      <div>
        <Outlet/>


      </div>

      <div className={Styles['footer']}>
        <div className={Styles['footer-item']}>
          <Link to='/index/home'>首页</Link>
        </div>
        <div className={Styles['footer-item']}>123</div>
        <div className={Styles['footer-item']}>456</div>
        <div className={Styles['footer-item']}>
          <Link to='/index/my'>我的</Link>
        </div>
      </div>
    </div>
  )
}
