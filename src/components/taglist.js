import React from "react"

function getTagCount(nodes) {
  var tagMap = new Map()
  nodes.forEach(node => {
    node.tag &&
      node.tag.forEach(tag => {
        if (tagMap.has(tag)) {
          tagMap.set(tag, tagMap.get(tag) + 1)
        } else {
          tagMap.set(tag, 1)
        }
      })
  })
  return tagMap
}

const TagList = ({ nodes, toggleTags, tagMap }) => {
  console.log("Render TagList")
  var tagCount = getTagCount(nodes)
  tagCount = new Map([...tagCount.entries()].sort((a, b) => b[1] - a[1]))

  const enableStyle = {
    backgroundColor: "#444",
    border: "solid #444 1px",
    color: "white",
    padding: "0.2rem 0.4rem",
    borderRadius: "0.2rem",
    fontWeight: "500",
    cursor: "pointer",
  }
  const disableStyle = {
    border: "solid #666 1px",
    padding: "0.2rem 0.4rem",
    borderRadius: "0.2rem",
    fontWeight: "500",
    cursor: "pointer",
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.3rem",
        fontSize: "75%",
      }}
    >
      {Array.from(tagCount.keys()).map(tag => {
        return (
          <button onClick={() => toggleTags(tag)}>
            <p style={tagMap[tag] ? enableStyle : disableStyle}>
              {tag + " : " + tagCount.get(tag)}
            </p>
          </button>
        )
      })}
    </div>
  )
}

export default TagList
