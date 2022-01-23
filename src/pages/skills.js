import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SkillLevelCard from "../components/skill-level-card"
import skillLevels from "../../content/skill-levels.json"

const skillsStyles = {
  container: {
    margin: "0px auto",
    zIndex:10
  },
}

const Skills = () => {
  return (

    <Layout>
    <Seo title="Skills" />
    <div style={skillsStyles.container}>
      <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
        {skillLevels.map(({level,color},i) => <SkillLevelCard level={level} color={color} key={i}/> )}
      </div>
    </div>
  </Layout>
    
  )
}

export default Skills
