import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <header>
        {data.site.siteMetadata.title}
      </header>
      <main>{children}</main>
      <footer>
        COPYRIGHT © {new Date().getFullYear()}, cwiselab.gise.ntnu.edu.tw
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
