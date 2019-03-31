import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Portfolio from "../components/portfolio"

export default () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Portfolio />
    </Layout>
  )
}
