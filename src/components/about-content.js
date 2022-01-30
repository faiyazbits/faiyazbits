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
          <div className="text-left text-2xl">
            <p className="mb-2">
              {" "}
                I am a  full-stack developer
              (front-end focused). I have worked for clients all around the
              world in many different industries. I have delivered solutions for
              solo founders, startups, digital agencies . I create fast, clean, and maintainable web applications,
              ready to scale from few users to thousands. I can help you deliver
              a seamless and engaging experience to your users. 
            </p>
            <p className="mb-2">
              I have over 7 years of experience in delivering web applications
              and I like making life better through technology.
            </p>
          </div>
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
