import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'
import Footer from '../components/Footer';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  fontFamily: 'Avenir Next, sans-serif',
                  fontWeight: "600"
                }}
              >
                <Link style={{ boxShadow: 'none', color: "#009FFF" }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small
              style={{
                fontFamily: 'Avenir Next, sans-serif',
                fontWeight: "300",
                color: "#333"
              }}>
              {node.frontmatter.date}</small>
              <p style={{
                fontFamily: 'Avenir Next, sans-serif',
                fontWeight: "400",
                color: "#333"
              }} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
        <Footer/>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
