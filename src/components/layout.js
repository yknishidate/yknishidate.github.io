/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Hero from "./hero"
import Footer from "./footer"
import Posts from "./posts"
import "./base.css"

const Layout = () => {
  return (
    <>
      <Hero />
      <Posts />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
