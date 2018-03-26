import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import config from "../../data/SiteConfig";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import Home from "../components/Home/Home";
import BlogListing from "../components/BlogListing"

class Index extends React.Component {
  componentDidMount() {
    const scripts = [
      "assets/js/jquery.min.js",
      "assets/js/jquery.scrolly.min.js",
      "assets/js/jquery.scrollex.min.js",
      "assets/js/skel.min.js",
      "assets/js/util.js",
      "assets/js/main.js"
    ]

    scripts.forEach(script => {
      let s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = false;
      s.src = script;
      document.body.appendChild(s);
    })

    document.body.classList.add('is-loading');

    window.setTimeout(function() {
      document.body.classList.remove('is-loading');
    }, 100);
  }


  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />

        <section id="banner">
  				<div className="inner">
  					<h1>People-centric,<br />
              data-driven,<br />
              agile results</h1>
  					<p>Daybreak Studio helps organizations reach people through better use of technology. The world of marketing, advertising and customer service technology is vast and daunting, but the goal behind it all is simply to scale your team’s ability to find the right people and communicate the most relevant message. Daybreak Studio helps organizations navigate this challenge through workshops, design and development services, and ongoing data driven insights and recommendations.</p>
  					<ul className="actions">
  						<li><a href="#one" className="button big wide scrolly-middle">Get started</a></li>
  					</ul>
  				</div>
  			</section>

        <article id="one" className="spotlight odd accent1">
  				<div className="inner">
  					<div className="image" data-position="top right">
  						<img src="images/pic01.jpg" alt="" />
  					</div>
  					<h2>Customer <br />Journey <br />Workshops</h2>
  					<div className="content">
  						<h3>Customer Journey Research and Mapping</h3>
  						<p>If you have a sense that your marketing efforts are less effective than they could be, it likely comes down to an intuitive sense that you should be doing more to speak to individual customers better based on their context.</p>
  						<ul className="actions">
  							<li><Link to="/customer-journey-workshops" className="button special accent1">Start mapping</Link></li>
  						</ul>
  					</div>
  				</div>
  			</article>

  			<article id="two" className="spotlight even accent2">
  				<div className="inner">
  					<div className="image" data-position="top left">
  						<img src="images/pic02.jpg" alt="" />
  					</div>
  					<h2>Marketing <br />Technology <br />Audit</h2>
  					<div className="content">
  						<h3>Pragmatic Advice and Quick Wins</h3>
  						<p>A technology audit helps to rationalize how your technology is used today and how it affects your customer experience, in order to find both short and long term room for improvement.</p>
  						<ul className="actions">
  							<li><Link to="/marketing-technology-audit" className="button special accent2">Find the right tools</Link></li>
  						</ul>
  					</div>
  				</div>
  			</article>

  			<article id="three" className="spotlight odd accent3">
  				<div className="inner">
  					<div className="image" data-position="center right">
  						<img src="images/pic03.jpg" alt="" />
  					</div>
  					<h2>Analytics and<br />
  					Optimization<br />
          Services</h2>
  					<div className="content">
  						<h3>Ongoing support to keep moving forward</h3>
  						<p>Technology is great, but it's just half of the equation. Analytics, journey mapping, big data and the like only help when applied well, monitored and used consistently. We can help.</p>
  						<ul className="actions">
  							<li><Link to="/analytics-and-optimization" className="button special accent3">Get full benefit from your tools</Link></li>
  						</ul>
  					</div>
  				</div>
  			</article>

        <article id="four" className="spotlight even accent4">
  				<div className="inner">
  					<div className="image" data-position="top left">
  						<img src="images/pic04.jpg" alt="" />
  					</div>
  					<h2>Design and<br />
  					Development<br />
          Services</h2>
  					<div className="content">
  						<h3>Simple, Modern, Agile, Effective</h3>
  						<p>Nobody wants enormous multi-year development projects. Simplicity is our aim using modern technology and techniques to drive for quick results.</p>
  						<ul className="actions">
  							<li><a href="/design-and-development" className="button special accent4">Learn more</a></li>
  						</ul>
  					</div>
  				</div>
  			</article>

  			{/*<BlogListing />*/}

  			{/*<Signup />*/}

      </div>
    );
  }
}

export default Index;
