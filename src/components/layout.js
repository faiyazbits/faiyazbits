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

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="absolute layout flex flex-col justify-center m-0 text-center items-center w-screen">
        {children}
      </div>
      <Footer />
      <ParticlesBackground />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
