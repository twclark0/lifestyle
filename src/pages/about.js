import React from 'react'
import '../assets/css/about.css'
import Footer from '../components/Footer'
import { Link } from 'gatsby'

export default class About extends React.Component {
  render() {
    return (
      <div className="about--container">
        <aside className="about--aside">
          <Link className="aside-logo" to="/">
            AL
          </Link>
          <Footer />
        </aside>
        <div className="about--main">
          <h2> My Story</h2>
          <p>
            Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
            nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae
            lobortis tortor primis integer massa adipiscing id nisi accumsan
            pellentesque commodo blandit enim arcu non at amet id arcu magna.
            Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate
            lorem neque cubilia.
          </p>
          <a href="#" className="button">
            My posts
          </a>
        </div>
      </div>
    )
  }
}
