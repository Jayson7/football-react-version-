import React, { Component } from "react";
import "./nav.css";
export class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#"> HOME </a>
              </li>
              <li>
                <a href="#"> LIVE </a>
              </li>
              <li>
                <a href="#"> RESULTS </a>
              </li>
              <li>
                <a href="#"> STREAM </a>
              </li>
              <li>
                <a href="#"> LOGIN </a>
              </li>
              <li>
                <a href="#"> SIGN UP </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
