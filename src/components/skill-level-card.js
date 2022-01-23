import React from "react"

const SkillLevelCard = ({ level, color }) => {
  const className = `shadow-lg bg-${color}-400 border-l-8 hover:bg-${color}-500 border-${color}-500 mb-2 p-1 md:w-1/3 mx-4`
  return (
    <div className={className}>
      <div className="p-4 flex flex-col">
        <span className="no-underline text-gray-900 dark:text-white text-lg ">
          {level}
        </span>
      </div>
    </div>
  )
}

export default SkillLevelCard
