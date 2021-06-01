import * as React from "react"
import PropTypes from "prop-types"
import { Transition } from "@headlessui/react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import CustomThemeToggler from "./theme-toggler"

const headerMenuNames = ["Skills", "Portfolio", "Blog", "About"]
const HeaderMenuItem = React.memo(({ headerMenuName }) => {
  const url = headerMenuName.toLowerCase()
  return (
    <Link
      activeClassName="bg-gray-700"
      to={`/${url}`}
      className="hover:bg-gray-700 text-black dark:text-white px-3 py-2 rounded-md text-lg font-lg font-bold focus:bg-gray-700 font-mono tracking-wide"
    >
      {headerMenuName}
    </Link>
  )
})

const HeaderMenuItemMobile = React.memo(({ headerMenuName }) => {
  const url = headerMenuName.toLowerCase()
  return (
    <Link
      activeClassName="bg-gray-700"
      to={`/${url}`}
      className=" text-white dark:text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-bold text-base font-mono tracking-wide"
    >
      {headerMenuName}
    </Link>
  )
})

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <header className="fixed top-0 left-0 z-20 w-full">
      <nav className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="cursor-pointer">
                  <StaticImage
                    className="h-8 w-8 rounded-full"
                    src="../images/self.jpg"
                    alt="profile pic"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {headerMenuNames.map((headerMenuName, i) => (
                    <HeaderMenuItem headerMenuName={headerMenuName} key={i} />
                  ))}
                </div>
              </div>
            </div>
            <CustomThemeToggler/>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden z-50 bg-gray-700 dark:bg-gray-300" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {headerMenuNames.map((headerMenuName, i) => (
                <HeaderMenuItemMobile headerMenuName={headerMenuName} key={i} />
              ))}
            </div>
          </div>
        </Transition>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
