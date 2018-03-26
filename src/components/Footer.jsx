import React, { Component } from "react";
import Logo from "./Logo";
import Link from "gatsby-link";

class Navbar extends Component {
  render() {
    return (
      <footer id="footer">
        <div itemScope itemType="http://schema.org/LocalBusiness">
          <ul className="contact-icons">
            <li className="icon fa-map-marker">Charleston, SC</li>
            <li className="icon fa-phone"><span itemProp="telephone"><a href="tel:+18436080756">(843) 608-0756</a></span></li>
            <li className="icon fa-envelope"><a href="mailto:dave@daybreak.studio">dave@daybreak.studio</a></li>
          </ul>
        </div>
        <div className="copyright">
          &copy; 2018 Daybreak Studio. All rights reserved.
        </div>
      </footer>
    );
  }
}

export default Navbar;
