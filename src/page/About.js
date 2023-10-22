import React from "react"
import classes from "./About.module.css"

const About = () => {
  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.h1}>
          Hi, my name is <span className={classes.color}>Amanuel Tegegne</span>
          <br />
          Front End Developer
          <br />
          This is <span className={classes.color}>Yenetta</span>
          <span /> Bootcamp Challenge
        </h1>
      </div>
    </div>
  )
}

export default About
