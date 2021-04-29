
import React from 'react'
import headImg from "../../images/head-img.png"
import "./style.scss"
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom'


function Layout({ children }) {

    return (
        <div className="layout-container">
            <div className="header-block">
                <div className="header-block__left">
                    <Link to="/films"><img src={logo} alt="" className="logo" /></Link>
                </div>
                <img src={headImg} alt="img" className="header-block__img" />
                <div className="header-block__right"></div>
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Layout