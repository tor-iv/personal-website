import React, {useState} from 'react'
import './header.styles.css'
import {link} from 'react-router-dom'

const Header = () => {
    return (
        <div classsName="header">
            <div className="logo">
                <Link className="link" to="/">
                    <p> VSC IV</p>
                </Link>
            </div>

        </div>
    )
}

export default Header