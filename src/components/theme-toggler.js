import React,{useState,useEffect} from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { Switch } from "@headlessui/react"

const CustomThemeToggler = () => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setEnabled(true);
    window._theme = "dark"
  },[])
  function onSwitchChange(isDark,toggleTheme) {
    toggleTheme(isDark ? "dark" : "light")
    setEnabled(isDark)
  }
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <>
          <Switch.Group>
            <div className="flex items-center">
              <Switch
                checked={enabled}
                
                onChange={(isDark) => onSwitchChange(isDark,toggleTheme)}
                className={`${
                  enabled ? "bg-gray-800" : "bg-gray-200"
                } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-black dark:bg-white rounded-full transition-transform`}
                />
              </Switch>
            </div>
          </Switch.Group>
        </>
      )}
    </ThemeToggler>
  )
}

export default CustomThemeToggler
