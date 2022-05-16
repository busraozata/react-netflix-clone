import React from 'react'
import style from "./Header.module.scss"
import { Routes, Route, Link } from "react-router-dom";
import Search from '@mui/icons-material/Search';
import Notification from '@mui/icons-material/Notifications';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }
  return (
    <header className={isScrolled ? `${style.header} ${style.sticky}` : `${style.header}`}>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center'>
            <Link to="/">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158" className='img-fluid' alt="" />
            </Link>
            <ul className='d-flex align-items-center justify-content-center'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/series">Series</Link></li>
              <li><Link to="/movies">Movies</Link></li>
              <li><Link to="/new-and-popular">New and Popular</Link></li>
              <li><Link to="/myList">My List</Link></li>
            </ul>
          </div>
          <div className='d-flex align-items-center'>
            <Search className={style.icon} />
            <span>KID</span>
            <Notification className={style.icon} />
            <div className={`d-flex flex-column align-items-center ${style.profile}`}>
              <ArrowDropDown className={style.icon} />
              <div className={style.options}>
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header