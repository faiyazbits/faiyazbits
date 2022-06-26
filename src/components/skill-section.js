import React from "react"
import SkillCard from "./skill-card"

const SkillSection = ({ skills, category }) => {
  return (
    <div className="my-4 p-6">
      <div className="flex items-center justify-start">
        <span className="bg-gray-900 dark:bg-white px-4 py-2  text-left text-white dark:text-gray-900 font-mono font-semibold text-lg w-full">
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
