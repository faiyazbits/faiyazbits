/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import ParticlesBackground from "./particle-background"
import Footer from "./footer"
import Header from "./header"
// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  /* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */

  return (
    <>
      <div className="flex flex-col justify-center w-screen h-screen m-0 text-center items-center">
        <Header />
        {children}
        <Footer />
        <ParticlesBackground />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
