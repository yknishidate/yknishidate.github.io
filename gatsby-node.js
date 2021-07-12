const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allContentfulPost(sort: { order: DESC, fields: date }) {
          nodes {
            id
            contentful_id
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { nodes } = result.data.allContentfulPost

  nodes.forEach((node, index) => {
    const prevPostId = index === 0 ? null : nodes[index - 1].contentful_id
    const nextPostId =
      index === nodes.length - 1 ? null : nodes[index + 1].contentful_id

    createPage({
      path: `/post/${node.contentful_id}/`,
      component: path.resolve("./src/pages/post.js"),
      context: { contentful_id: node.contentful_id, prevPostId, nextPostId },
    })
  })
}
