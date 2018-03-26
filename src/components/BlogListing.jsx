import React, { Component } from "react";
import Link from "gatsby-link";

class BlogListing extends Component {
  render() {
    return (
      <section id="five" className="wrapper">
        <div className="inner">
          <header className="major">
            <h2>From the Blog</h2>
          </header>
          <div className="posts">
            <article>
              <a href="#" className="image"><img src="images/pic07.jpg" alt="" /></a>
              <div className="content">
                <h3><a href="#">Sed faucibus</a></h3>
                <p>Sed egestas, ante et vulputate lorem ipsum sed dolor sit amet Morbi purus sed libero, faucibus adipiscing, commodo quis. Lorem ipsum dolor sit amet nullam sed adipiscing.</p>
                <ul className="actions">
                  <li><a href="#" className="button special accent1">Learn more</a></li>
                </ul>
              </div>
            </article>
            <article>
              <a href="#" className="image"><img src="images/pic08.jpg" alt="" /></a>
              <div className="content">
                <h3><a href="#">Morbi commodo</a></h3>
                <p>Sed egestas, ante et vulputate lorem ipsum sed dolor sit amet Morbi purus sed libero, faucibus adipiscing, commodo quis. Lorem ipsum dolor sit amet nullam sed adipiscing.</p>
                <ul className="actions">
                  <li><a href="#" className="button special accent2">Learn more</a></li>
                </ul>
              </div>
            </article>
            <article>
              <a href="#" className="image"><img src="images/pic09.jpg" alt="" /></a>
              <div className="content">
                <h3><a href="#">Tempus lorem</a></h3>
                <p>Sed egestas, ante et vulputate lorem ipsum sed dolor sit amet Morbi purus sed libero, faucibus adipiscing, commodo quis. Lorem ipsum dolor sit amet nullam sed adipiscing.</p>
                <ul className="actions">
                  <li><a href="#" className="button special accent3">Learn more</a></li>
                </ul>
              </div>
            </article>
            <article>
              <a href="#" className="image"><img src="images/pic10.jpg" alt="" /></a>
              <div className="content">
                <h3><a href="#">Libero adipiscing</a></h3>
                <p>Sed egestas, ante et vulputate lorem ipsum sed dolor sit amet Morbi purus sed libero, faucibus adipiscing, commodo quis. Lorem ipsum dolor sit amet nullam sed adipiscing.</p>
                <ul className="actions">
                  <li><a href="#" className="button special accent4">Learn more</a></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

export default BlogListing;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
