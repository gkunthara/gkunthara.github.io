import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'
import twitterPic from '../images/Twitter_Logo_Blue.png'
import githubPic from '../images/GitHub-Mark-120px-plus.png'
import linkedInPic from '../images/In-2c-94px-TM.png'
import mailPic from '../images/Mail.png'
import mediumPic from '../images/Monogram.png'



class Footer extends React.Component {
  render() {

    let twitter = {
        width: rhythm(1.5),
        padding: "10px",
    };

    let github = {
        width: rhythm(1.5),
        padding: "10px",
        marginTop: rhythm(2)
    }

    return (
    
        <footer>
            <div style={{textAlign: "center"}}>
                <a style={{textDecoration: "none"}} href="https://twitter.com/gkunthara"><img style= {twitter} src={twitterPic} alt="twitter"/></a>
                <a  style={{textDecoration: "none"}} href="https://github.com/gkunthara"><img style={github} src={githubPic} alt="github"/></a>
                <a style={{textDecoration: "none"}} href="https://www.linkedin.com/in/george-kunthara-31831810b/"><img style={github} src={linkedInPic} alt="linkedIn"/></a>
                <a style={{textDecoration: "none"}} href="https://medium.com/@georgekunthara"><img style={github} src={mediumPic} alt="medium"/></a>
                <a style={{textDecoration: "none"}} href="mailto:gkunthara1@gmail.com"><img style={github} src={mailPic} alt="mail"/></a>
            </div>
        </footer>
    )
  }
}

export default Footer
