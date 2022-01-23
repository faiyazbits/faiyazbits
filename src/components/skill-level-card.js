import React from "react"

export const COLOR_MAP = {
  GREEN_LIGHT: 'bg-green-400',
  YELLOW_LIGHT: 'bg-yellow-400',
  BLUE_LIGHT: 'bg-blue-400',
  BLUE_DARK: 'bg-blue-400',
  GREEN_DARK: 'bg-green-400',
  YELLOW_DARK: 'bg-yellow-400',
  HOVER_GREEN: 'hover:bg-green-500',
  HOVER_YELLOW: 'hover:bg-yellow-500',
  HOVER_BLUE: 'hover:bg-blue-500',
  BORDER_GREEN: 'border-green-500',
  BORDER_BLUE: 'border-blue-500',
  BORDER_YELLOW: 'border-yellow-500',
}

export function getColorNameCombo(color){
  switch(color){
    case 'green':
      return [COLOR_MAP.GREEN_LIGHT,COLOR_MAP.HOVER_GREEN,COLOR_MAP.BORDER_GREEN]
    case 'yellow':
      return [COLOR_MAP.YELLOW_LIGHT,COLOR_MAP.HOVER_YELLOW,COLOR_MAP.BORDER_YELLOW]
    case 'blue':
      return [COLOR_MAP.BLUE_LIGHT,COLOR_MAP.HOVER_BLUE,COLOR_MAP.BORDER_BLUE]
    default:
      return [COLOR_MAP.GREEN_LIGHT,COLOR_MAP.HOVER_GREEN,COLOR_MAP.BORDER_GREEN]  
  }
}

const SkillLevelCard = ({ level, color }) => {
  const [light,hover,border] = getColorNameCombo(color)
  const className = `shadow-lg ${light} border-l-8 ${hover} ${border} mb-2 p-1 md:w-1/3 mx-4`
  return (
    <div className={className}>
      <div className="p-2 flex flex-col">
        <span className=" font-mono font-semibold no-underline text-gray-900 dark:text-white text-lg ">
          {level}
        </span>
      </div>
    </div>
  )
}

export default SkillLevelCard
