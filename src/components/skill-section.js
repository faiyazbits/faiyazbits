import React from "react"
import SkillCard from "./skill-card"


const SkillSection = ({ skills,category }) => {

  return (
    <div className="my-4 p-6">
      <div className="flex items-center justify-start">
        <span className="bg-indigo-500 px-4 py-2 text-gray-900 dark:text-white font-mono font-semibold text-lg">
          {category}
        </span>
      </div>

      <div className="flex flex-wrap mt-1">
        {skills.map((s, i) => (
          <SkillCard skill={s} key={i} />
        ))}
      </div>
    </div>
  )
}

export default SkillSection
