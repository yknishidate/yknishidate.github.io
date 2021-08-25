import * as React from "react"
import "./base.css"

function ContentWrapper(props) {
  return (
    <div
      style={Object.assign(
        {
          margin: "0 10%",
        },
        props.style
      )}
    >
      {props.children}
    </div>
  )
}

export default ContentWrapper
