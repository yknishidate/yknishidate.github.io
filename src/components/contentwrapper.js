import * as React from "react"
import "./base.css"
import { useMediaQuery } from "react-responsive"

function ContentWrapper(props) {
  return (
    <div
      style={Object.assign(
        {
          margin: "0 5%",
        },
        props.style
      )}
    >
      {props.children}
    </div>
  )
}

export default ContentWrapper
