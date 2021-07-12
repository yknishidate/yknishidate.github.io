import * as React from "react"
import "./base.css"

const Tags = ({ tags }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "0.3rem",
      fontSize: "75%",
    }}
  >
    {tags &&
      tags.map(tag => {
        return (
          <p
            style={{
              border: "solid #666 1px",
              padding: "0.2rem 0.4rem",
              borderRadius: "0.2rem",
              fontWeight: "500",
            }}
          >
            {tag}
          </p>
        )
      })}
  </div>
)

export default Tags
