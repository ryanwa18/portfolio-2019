import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const purple = {
  color: '#8a3ab9'
}

const red = {
  color: '#e95950'
}

const yellow = {
  color: '#fccc63'
}

const white = {
  color: '#fff'
}

const blue = {
  color: '#0077B5'
}

const pink = {
  color: '#EA4C89'
}

const italicized = {
  fontStyle: 'italic'
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1><Link to="/programs" style={white}>programs</Link></h1>
    <h1><Link to ="/blog" style={white}>blog</Link></h1>
    <div style={{textAlign: 'right'}}>
      <h2 style={italicized}>find out more</h2>
      <h2><a href="https://github.com/ryanwa18" style={white}>github</a></h2>
      <h2><a href="https://dribbble.com/rwtech" style={pink}>dribbble</a></h2>
      <h2><a href="https://www.linkedin.com/in/ryan-a-ward/" style={blue}>linkedin</a></h2>
      <h2><a href="https://www.instagram.com/ryanwardphotos/"><span style={purple}>ins</span><span style={red}>ta</span><span style={yellow}>gram</span></a></h2>
    </div>
  </Layout>
)

export default IndexPage
