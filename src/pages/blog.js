import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = () => {
  return (
    <Layout>
      <Seo title="Blog" />
      <div className="flex flex-col justify-center items-center  z-10">
        <p className="text-3xl text-black dark:text-white font-medium mb-3">
          Under construction
        </p>
        <StaticImage
          src="../images/under_construction.svg"
          layout="fixed"
          width={400}
          height={400}
          alt="Under construction"
        />
      </div>
    </Layout>
  )
}

export default Blog
