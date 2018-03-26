import React, { Component } from "react";
import Logo from "./Logo";
import Link from "gatsby-link";

class Navbar extends Component {
  render() {
    return (
      <div>
        <header id="header" className={(this.props.alt) ? 'alt' : ''}>
          <a className="logo" href="/"><Logo /></a>
          <nav>
            <ul>
              <li>
                <a href="#menu">Menu</a>
              </li>
            </ul>
          </nav>
        </header>

        <nav id="menu">
          <ul className="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-daybreak-studio">About Us</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
