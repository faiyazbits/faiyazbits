import React from "react"

const Styles = {
  hero: {
    margin: "0 60px",
    height: "calc(100vh - 76px)",
    maxHeight: "800px",
  },
  content: {
    zIndex: 2,
    width: "70%",
  },
  preHeader: {
    fontSize: "19px",
    lineHeight: 1.2,
    marginBottom: "24px",
  },
  mainHeader: {
    fontWeight: 500,
    lineHeight: 1.15,
    marginBottom: "24px",
  },
  picture: {
    height: "95%",
    zIndex: 2,
    width:"30%"
  },
  img: {
    borderRadius: "50%",
  },
  findOut: {
    fontSize: "14px",
    lineHeight: 1.5,
    padding: 10,
    outline:"none"
  },
}

function AboutHero() {
  function onFindClick() {
    var elmnt = document.getElementById("about")
    elmnt.scrollIntoView()
  }
  return (
    <div className="p-0 mx-0 my-auto max-w-screen-xl">
      <div style={Styles.hero} className="relative flex justify-center items-center">
        <div
          style={Styles.content}
          className="relative flex items-start justify-center flex-col flex-shrink-0 sm:w-full"
        >
          <span
            style={Styles.preHeader}
            className="text-2xl lg:text-4xl text-gray-900 dark:text-white"
          >
            Hi, my name is <span className="bg-indigo-500 p-1">Faiyaz</span>
          </span>
          <h1
            style={Styles.mainHeader}
            className="text-2xl lg:text-4xl text-gray-900 dark:text-white text-left"
          >
            I’m a full stack developer, specialized in development of web
            applications using React,Angular, Node.js &amp; more
          </h1>
          <button
            onClick={onFindClick}
            style={Styles.findOut}
            className="bg-indigo-500 p-1 text-gray-900 dark:text-white"
          >
            FIND OUT MORE
          </button>
        </div>
        <picture style={Styles.picture} className="absolute right-0 bottom-0 sm:w-full ">
          <img
            style={Styles.img}
            src="https://faiyazbits-images.s3.us-east-2.amazonaws.com/hero-self.png"
            alt="Full Stack Web App Developer | Faiyaz"
            title="Full Stack Web App Developer | Faiyaz"
          />
        </picture>
      </div>
    </div>
  )
}

export default AboutHero
