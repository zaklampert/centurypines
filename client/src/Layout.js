import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {routes } from './App';

export default withRouter(({ children, title, bannerImg, match }) => {
    return (
        <div id="main">
        <header>
    
          <div id="banner" style={{
            backgroundImage: 'url("' + bannerImg + '")'
    
          }}>
          <div id="logo"><img alt="logo" src="/images/logo-white.png"/></div>
            <div id="banner-content">
    
              <h1>{ title }</h1>
    
            </div>
          </div>
          <nav>
            {routes.map(link=>{
              const active = (link.path === match.path) ? 'active' : '';
              return (
                <Link to={link.path} key={link.path}>
                  <div className={`nav-item ${active}`}>
                    {link.label}
                  </div>
                </Link>
              )
            })}
          </nav>
        </header>
        <div id="content">
        {children}
        </div>
    
        <div id="footer">
          &copy; {new Date().getFullYear()} Century Pines with communities at Hopedale Cottage and The Cottage at Century Pines
          <div id="footer-menu">
          {routes.map(link=>{
            const active = (link.path === match.path) ? 'active' : '';
            return (
              <Link to={link.path} key={link.path}>
                <span className={`footer-item ${active}`}>
                  {link.label}
                </span>
              </Link>
            )
          })}
          </div>
          <div>
            Call Jim Edwards, Owner/Administrator, at 417-581-7278 for a tour.
          </div>
        </div>
        <style jsx>{`
      #main {
        font-family: 'Slabo 27px', serif!important;
        background-color: #f7f7f7;
        box-sizing: border-box;
        font-size: 24px;
        image-rendering: -moz-crisp-edges;         /* Firefox */
        image-rendering:   -o-crisp-edges;         /* Opera */
        image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
        image-rendering: crisp-edges;
        -ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */

      }
      h1 {
        font-family: 'Dancing Script', cursive;
        color: white;
        font-size: 50px;
        text-shadow: 2px 2px 4px black;
        margin: 0;
      }
      #banner-content {
        position: absolute;
        transform: translate(-50%, -20%);
        width: 100%;
        text-align: center;
        top: 50%;
        left: 50%;
      }
      #logo {
        position: absolute;
        // z-index: 99;
        // color: gold;
        // padding: 15px;
        top: 0;
        left: 10px;
        width: 250px;
        height: auto;
        // margin: 0 auto;
        // transform: translateX(-50%);
      }
      #logo img {
        max-width: 100%;
      }
      #banner {
        // max-width: 1920px;
        margin: 0 auto;
        background-size: cover;
        background-repeat: no-repeat;
        background-position:center center;
        // padding-bottom: 20%;
        height: 430px;
        position: relative;
      }
      #call {
        background: gold;
        color: #;
        padding: 15px;
        margin-top: 20px;
        display: inline-block;
        font-weight: bold;
        // position: absolute;
        // z-index: 99;
        // top: 10px;
        // right: 10px;
      }
      .nav-item {
        display: inline-block;
        width:14.285%;
        padding: 12px 0;
        font-size: 16px;
        cursor: pointer;
        background: #53573c;
        color: gold;
        text-align: center;

      }
      .nav-item:hover {
        background: grey;
      }
      @media (max-width: 670px) {
        #main {
          font-size: 20px;
        }
        #banner {
          height: 260px;
        }

        .nav-item {
          width: 100%;
          font-size: 18px;
          padding: 10px 0;
        }
        h1 {
          font-size: 30px;
        }
        #call {
          font-size: 15px;
        }
        #logo {
          width: 180px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .nav-item.active {
        background: #f7f7f7;
        color: #53573c;
      }
      #content {
        max-width: 970px;
        margin: 0 auto;
        padding: 25px;
      }
      #footer {
        background:#53573c;
        color: white;
        padding: 25px;
        text-align: center;
        font-size: 18px;
      }
      #footer-menu {
        display: block;
      }
      .footer-item {
        display: inline-block;
        padding: 6px;
        cursor: pointer;
      }
      .footer-item.active {
        color: gold;
      }
    `}</style>
        </div>
    )
});
