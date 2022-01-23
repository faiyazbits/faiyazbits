import React from "react"
import SkillCard from "./skill-card"


const SkillSection = ({ skills,category }) => {

  return (
    <div className="p-8 mt-4">
      <div className="flex felx-col items-center justify-center">
        <span className="rounded-full bg-indigo-500 px-4 py-3 text-gray-900 dark:text-white font-mono font-semibold text-lg">
          {category}
        </span>
      </div>

      <div className="flex flex-wrap mt-4">
        {skills.map((s, i) => (
          <SkillCard skill={s} key={i} />
        ))}
      </div>
    </div>
  )
}

export default SkillSection
