import * as React from "react"
import Typed from "react-typed"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const indexStyles = {
  container: {
    margin: "0px auto"
  },
  subtext: {
    maxWidth: "700px",
    margin: "0.5rem 0", 
    textAlign:"initial"
  },
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section
      className="flex justify-center flex-col z-10 p-5"
    >
      <div style={indexStyles.container}>
        <h1 className="m-0 text-l md:text-3xl lg:text-3xl text-gray-900 dark:text-white  font-mono">
          <Typed
            loop
            typeSpeed={80}
            backSpeed={20}
            strings={[
              "I'm <span class='accent'>Faiyaz</span>.",
              "I'm a <span class='accent'>Full stack developer</span>.",
              "I'm a <span class='accent'>Passionate trainer</span>.",
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
        <p style={indexStyles.subtext} className="text-gray-900 dark:text-white  text-base md:text-xl lg:text-2xl  font-mono leading-loose sm:leading-relaxed">
          As a senior full stack developer and trainer with 7 years of experience, I create
          amazing web apps to make the internet a better place.{"    "}
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
