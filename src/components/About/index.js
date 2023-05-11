// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="main-bg">
    <Header />
    <div className="about">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png "
        alt="about"
        className="about-mobile"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about-desktop"
      />
    </div>
  </div>
)

export default About
