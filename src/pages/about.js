import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutHero from "../components/about-hero"
import AboutContent from "../components/about-content"

const Styles = {
  container: {
    margin: "0px auto",
    zIndex: 10,
    overflow: "auto",
  },
}
const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <div style={Styles.container}>
        <AboutHero />
        <AboutContent />
      </div>
    </Layout>
  )
}

export default About
