import * as React from "react"
import Typed from "react-typed"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const indexStyles = {
  section: {
    minHeight: "96vh",
  },
  container: {
    maxWidth: "94%",
    width: "1140px",
    margin: "0px auto"
  },
  subtext: {
    fontSize: "1.5rem",
    maxWidth: "700px",
    margin: "0.5rem 0", 
  },
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section
      style={indexStyles.section}
      className="flex justify-center flex-col"
    >
      <div style={indexStyles.container}>
        <h1 className="m-0  text-5xl sm:text-3xl text-gray-900 dark:text-white  font-mono">
          <Typed
            loop
            typeSpeed={80}
            backSpeed={20}
            strings={[
              "I'm <span class='accent'>Faiyaz</span>.",
              "I'm a <span class='accent'>Full stack developer</span>.",
              "I love anything <span class='accent'>Javascript</span>.",
            ]}
            smartBackspace
            backDelay={1000}
            loopCount={0}
            showCursor
            cursorChar="|"
            className="typed"
          />
        </h1>
        <p style={indexStyles.subtext} className="text-gray-900 dark:text-white leading-loose text-lg font-mono">
          As a senior full stack developer with 7 years of experience, I create
          amazing web apps to make the internet a better place.{" "}
          <strong>
            <Link to="/about/">Get in touch</Link>
          </strong>{" "}
          to discuss how we can work together.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
