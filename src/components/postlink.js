import * as React from "react"
import "./base.css"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Tags from "./tags"
import Fade from "react-reveal/Fade"

function PostLink({ node }) {
  if (!node) {
    return <div></div>
  }

  const image = getImage(node.thumb)
  return (
    <Fade bottom duration={500} delay={200} distance="30px">
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "0.3rem",
          overflow: "hidden",
          margin: "0",
        }}
      >
        <Link to={"/post/" + node.contentful_id + "/"}>
          <div className="post-link" style={{ color: "black" }}>
            <GatsbyImage
              className="thumb"
              placeholder="blurred"
              image={image}
              style={{ borderBottom: "solid #aaa 1px" }}
              alt=""
            />
            <div
              style={{
                padding: "1rem",
              }}
            >
              <p style={{ fontSize: "75%" }}>{node.date}</p>
              <h3 style={{ fontWeight: "500" }}>{node.title}</h3>
              <div style={{ height: "10px" }}></div>
              <Tags tags={node.tag} />
            </div>
          </div>
        </Link>
      </div>
    </Fade>
  )
}

export default PostLink
