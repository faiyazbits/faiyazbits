import React from "react"

const Styles = {
  sectionContainer: {
    zIndex: 2,
  },
  about: {
    padding: "100px 0",
    fontSize: "19px",
    lineHeight: "34px",
  },
}
function AboutContent() {
  return (
    <div style={Styles.sectionContainer} className="mx-0 my-auto">
      <div className="mx-0 my-auto max-w-screen-xl px-0 py-3 text-gray-900 dark:text-white relative flex justify-center items-center" id="about">
        <div  styles={Styles.about} className="max-w-screen-md mx-0 my-auto text-center ">

          <h3 className="mt-3 text-left text-3xl mb-2">Who is a full stack developer ?</h3>
          <div className="text-left text-2xl">
            A full stack developer has the functional knowledge and ability to
            take a concept and turn it into a finished product. A full stack
            developer should have knowledge in front end and back end
            development. Front end developers build the visible parts of
            applications that users see and interact with. Back end developers
            on the other hand, are responsible for building the parts the user
            does not see, which include core computational logic, server and
            database.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
