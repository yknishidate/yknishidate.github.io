import * as React from "react"
import "./base.css"
import PropTypes from "prop-types"

function SocialLinks({ color, marginLeft, fontWeight }) {
  let aStyle = {
    marginLeft: marginLeft,
    padding: "1rem 0",
    color: color,
    fontWeight: fontWeight,
  }
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <a
        href="https://twitter.com/yknsdt"
        target="_blank"
        rel="noopener noreferrer"
        style={aStyle}
      >
        Twitter
      </a>
      <a
        href="https://github.com/nishidate-yuki"
        target="_blank"
        rel="noopener noreferrer"
        style={aStyle}
      >
        GitHub
      </a>
      <a
        href="https://zenn.dev/nishiki"
        target="_blank"
        rel="noopener noreferrer"
        style={aStyle}
      >
        Zenn
      </a>
    </div>
  )
}

SocialLinks.propTypes = {
  color: PropTypes.string,
  marginLeft: PropTypes.string,
}

export default SocialLinks
