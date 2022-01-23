import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SkillLevelCard from "../components/skill-level-card"
import SkillSection from "../components/skill-section"
import skillLevels from "../../content/skill-levels.json"
import skills from "../../content/skills.json"

const skillsStyles = {
  container: {
    margin: "0px auto",
    zIndex: 10,
    overflow: "auto",
  },
}

const Skills = () => {
  return (
    <Layout>
      <Seo title="Skills" />
      <div style={skillsStyles.container}>
        <div className="flex flex-1 flex-col md:flex-row lg:flex-row p-6">
          {skillLevels.map(({ level, color }, i) => (
            <SkillLevelCard level={level} color={color} key={i} />
          ))}
        </div>
        {skills.map((s, i) => (
          <SkillSection skills={s.skills} category={s.category} key={i} />
        ))}
      </div>
    </Layout>
  )
}

export default Skills
