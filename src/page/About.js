import React from "react"
import classes from "./About.module.css"

const About = () => {
  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.h1}>
          Hi, my name is <span className={classes.span}>Amanuel Tegegne</span>
          <br />
          Front End Developer
          <br />
          This is <span className={classes.span}>Yenetta</span>
          <span /> Bootcamp Challenge ,Thanks .
        </h1>
      </div>
    </div>
  )
}

export default About
