import React, { useState } from "react"
import "./base.css"
import { useStaticQuery, graphql } from "gatsby"
import PostLink from "./postlink"
import TagList from "./taglist"
import { useMediaQuery } from "react-responsive"

function Posts(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" })
  const data = useStaticQuery(
    graphql`
      query {
        posts: allContentfulPost(sort: { fields: date, order: DESC }) {
          nodes {
            id
            contentful_id
            images {
              gatsbyImageData(width: 1000)
            }
            videos {
              file {
                url
              }
            }
            title
            date(formatString: "yyyy / M")
            description {
              description
            }
            url
            thumb {
              id
              gatsbyImageData(width: 500, height: 300)
            }
            tag
          }
        }
      }
    `
  )

  var tagMap = {}
  data.posts.nodes.forEach(node => {
    node.tag &&
      node.tag.forEach(tag => {
        tagMap[tag] = false
      })
  })

  const [alltags, setTags] = useState(tagMap)

  function toggleTags(tag) {
    console.log("toggleTags:", tag)
    let newTagMap = { ...tagMap }
    newTagMap[tag] = !alltags[tag]
    setTags(newTagMap)
    console.log("Object.is :", Object.is(alltags, newTagMap))
  }

  function isFiltered() {
    for (var key in alltags) {
      if (alltags[key]) {
        return true
      }
    }
    return false
  }

  function isMatch(node) {
    var match = false
    if (node.tag) {
      node.tag.forEach(tag => {
        if (alltags[tag]) {
          // tag is enabled
          match = true
        }
      })
    }
    return match
  }

  function shouldShow(node) {
    if (!isFiltered()) {
      return true
    }
    return isMatch(node)
  }

  function dummyPosts() {
    let postCount = 0
    data.posts.nodes.forEach(node => {
      if (shouldShow(node)) {
        postCount++
      }
    })
    console.log("postCount : " + postCount)
    let dummys = []
    for (let i = 0; i < 3 - postCount; i++) {
      dummys.push(0)
    }
    return dummys
  }

  return (
    <div
      style={{
        margin: isMobile ? "0 5%" : "0 10%",
        marginTop: "5rem",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 800,
        }}
      >
        <TagList
          nodes={data.posts.nodes}
          toggleTags={toggleTags}
          tagMap={alltags}
        />

        <div style={{ height: "20px" }}></div>

        <main
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gridColumnGap: "20px",
            gridRowGap: "20px",
          }}
        >
          {data.posts.nodes.map(node => {
            if (shouldShow(node)) {
              return <PostLink node={node} />
            } else {
              return <></>
            }
          })}
          {dummyPosts().map(n => {
            return <PostLink />
          })}
        </main>
      </div>
    </div>
  )
}

export default Posts
