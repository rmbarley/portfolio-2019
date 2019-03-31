import React from "react"
import "./layout.scss"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const layout = ({ children }) => (
  <React.Fragment>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </React.Fragment>
)

export default layout
