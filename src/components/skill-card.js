import React from "react"
import SkillLevels from "../../content/skill-levels.json"
import { COLOR_MAP } from "./skill-level-card"

function findSkillLevelColor(skill) {
  return SkillLevels.find(s => s.type === skill.level).color
}

function getColorName(color){
  switch(color){
    case 'green':
      return COLOR_MAP.GREEN_DARK
    case 'yellow':
      return COLOR_MAP.YELLOW_DARK
    case 'blue':
      return COLOR_MAP.BLUE_DARK
    default:
      return COLOR_MAP.GREEN_DARK      
  }
}

const SkillCard = ({ skill }) => {
  const src = `https://faiyazbits-images.s3.us-east-2.amazonaws.com/${skill.name.toLowerCase()}.svg`
  const color = findSkillLevelColor(skill);
  const colorClass =  getColorName(color)
  const levelClassName = `px-4 py-4 ${colorClass}`
  return (
    <div className="overflow-hidden my-4 mr-4 bg-white rounded-lg shadow-lg">
      <div className={levelClassName}></div>

      <img className="object-contain w-48 h-48" src={src} alt={skill.name} />

      <div className="flex items-center justify-center px-4 py-2 bg-white dark:bg-gray-900">
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">
          {" "}
          {skill.name}
        </h1>
      </div>
    </div>
  )
}

export default SkillCard
