import { Link } from 'react-router-dom'
import { useState } from 'react';

import { Squash as Hamburger } from 'hamburger-react'
import githubIco from "../assets/img/github.png"
import linkedinIco from "../assets/img/linkedin.png"

export const Nav = () => {

    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const closeMenu = () => {
        if (hamburgerMenu === true) {
            setHamburgerMenu(false);
        }
    }
    return (
        <div >
            <link
                rel="stylesheet"
                href="https://pro.fontawesome.com/releases/v5.14.0/css/all.css"
            />

            <Link onClick={closeMenu} to="/" id='navName' style={{ marginLeft: "10px", fontSize: "180%", position: "relative", zIndex: "20" }} >
                Berk Kırtay
            </Link>
            <div style={{ float: "right" }}>
                <ul className="nav">
                    <li className="nav" onClick={closeMenu} style={{ float: "right" }}><Link to="/contact">Contact me</Link>
                    </li>
                    <li className="nav" onClick={closeMenu} style={{ float: "right" }}><Link to="/blog">My Blog</Link>
                    </li>
                    <li className="nav" onClick={closeMenu} style={{ float: "right" }}>
                        <a href="https://github.com/berkkirtay" target="_blank" rel="noopener noreferrer">My GitHub <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li className="nav" style={{ float: "right" }}>
                        <a href="https://github.com/berkkirtay" target="_blank" rel="noopener noreferrer">My Linkedin <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>
                </ul>
            </div>
            <div className="hamburgerMenu"
                onClick={() => setHamburgerMenu(!hamburgerMenu)}>
                <Hamburger
                    toggled={hamburgerMenu}
                    toggle={setHamburgerMenu} />
            </div>

            <style jsx>{`
                @media screen and (orientation: portrait) {
                    li.nav {
                        color: white;
                        float:none;
                        justify-content: center;
                        list-style: none;
                        height: 80px;
                        display: flex;
                        align-items:center;
                    }
                    ul.nav {
                        display:  ${hamburgerMenu ? 'flex' : 'none'};
                        flex-direction: column;
                        background-color:#101820ff;
                        flex-wrap: wrap;
                        position: absolute;
                        z-index:3;
                        right: 0;
                        top: 0;
                        height:500px;
                        width: 800px;
                        justify-content: center;
                        transition-duration: 800ms;
                        transition-property: margin-bottom;
                    }
                    .nav a {
                        font-size: 130%;
                    }
                }
            `}</style>
        </div >
    )
}