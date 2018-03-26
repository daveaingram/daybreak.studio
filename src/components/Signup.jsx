import React, { Component } from "react";
import Link from "gatsby-link";

class Signup extends Component {
  render() {
    return (
      <section id="six" className="wrapper style1">
        <div className="inner">
          <header className="major">
            <h2>Tempus amet</h2>
            <p>Sed egestas, ante et vulputate lorem ipsum dolor sit amet nullam pede semper est, vitae luctus metus libero eu augue. Morbi purus sed libero, faucibus adipiscing, commodo quis, gravida lorem ipsum.</p>
          </header>
          <form method="post" action="#" className="combined">
            <input type="email" name="email" id="email" placeholder="Your email address" className="alt accent4" />
            <input type="submit" className="button special accent4" value="Subscribe" />
          </form>
        </div>
      </section>
    );
  }
}

export default Signup;
