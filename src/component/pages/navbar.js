import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
export const Navbar = () => {
  return (
    <>
      <ul className={style.ul}>
        <li><Link className={style.menu_item} to="/">dashbord</Link></li>
        <li><Link className={style.menu_item} to="/login">login</Link></li>
      </ul>
    </>

  )
}
