import * as React from "react"
import "./base.css"

const Footer = () => (
  <footer
    style={{
      margin: `2rem`,
      display: "flex",
      justifyContent: "center",
      color: "#aaa",
    }}
  >
    © {new Date().getFullYear()} - Yuki Nishidate
  </footer>
)

export default Footer
