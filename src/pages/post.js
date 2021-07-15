import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../components/base.css"
import SocialLinks from "../components/sociallinks"
import Tags from "../components/tags"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Footer from "../components/footer"
import PostLink from "../components/postlink"
import Seo from "../components/seo"
import { useMediaQuery } from "react-responsive"
import ContentWrapper from "../components/contentwrapper"

function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" })
  return (
    <header
      style={{
        width: "100%",
        height: "4rem",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1",
        backgroundColor: "#e8ebf0",
        boxShadow: "0 0 2px #888",
      }}
    >
      <ContentWrapper
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <h2
            style={{
              fontFamily: "Sigmar One",
              fontStyle: "italic",
              color: "#1F2937",
            }}
          >
            N
          </h2>
        </Link>
        <SocialLinks
          color={"black"}
          marginLeft={isMobile ? "1rem" : "4rem"}
          fontWeight={"500"}
        />
      </ContentWrapper>
    </header>
  )
}

function ProjectLink({ url }) {
  return (
    <div>
      {url && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={url}
          style={{
            color: "#1C2635",
            textDecoration: "underline",
            fontWeight: "500",
          }}
        >
          Project Link
        </a>
      )}
    </div>
  )
}

function PostContent({ node }) {
  const { title, images, description, date, videos, url, tag } = node

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "0.3rem",
        padding: "2rem",
      }}
    >
      <p>{date}</p>
      <h2>{title}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginBottom: "1rem",
        }}
      >
        <ProjectLink url={url} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Tags tags={tag} />
      </div>

      <div style={{ height: "1rem" }}></div>
      <p className="description">{description.description}</p>
      <div style={{ height: "1rem" }}></div>

      {images &&
        images.map(image => {
          return (
            <GatsbyImage
              className="thumb"
              placeholder="blurred"
              image={getImage(image)}
              style={{
                borderBottom: "solid #aaa 1px",
                marginBottom: "1rem",
              }}
              alt=""
            />
          )
        })}

      {videos != null &&
        videos.map(video => {
          return (
            <div style={{ width: "100%", textAlign: "center" }}>
              <video
                src={video.file.url}
                controls
                autoplay
                loop
                muted
                playsinline
                style={{
                  width: "100%",
                }}
              ></video>
            </div>
          )
        })}
    </div>
  )
}

function Nav({ nodes, prevPostId, nextPostId }) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" })
  const prevNode = nodes.find(n => n.contentful_id === prevPostId)
  const nextNode = nodes.find(n => n.contentful_id === nextPostId)

  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        listStyle: "none",
        padding: "1rem",
        textDecoration: "underline",
      }}
    >
      <li>
        {!isMobile && prevPostId && (
          <Link to={"/post/" + prevPostId + "/"} rel="prev">
            ← {prevNode.title}
          </Link>
        )}
      </li>
      <li>
        {nextPostId && (
          <Link to={"/post/" + nextPostId + "/"} rel="next">
            {nextNode.title} →
          </Link>
        )}
      </li>
    </ul>
  )
}

function isRelated(thisTags, targetTags) {
  let related = false
  thisTags.forEach(thisTag => {
    targetTags.forEach(targetTag => {
      if (thisTag === targetTag) {
        related = true
      }
    })
  })
  return related
}

function RelatedPosts({ nodes, node }) {
  const thisTags = node.tag

  return (
    <div>
      <h2>Related posts</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gridColumnGap: "20px",
          gridRowGap: "20px",
        }}
      >
        {nodes.map(targetNode => {
          const targetTags = targetNode.tag
          return (
            targetNode.contentful_id !== node.contentful_id &&
            isRelated(thisTags, targetTags) && <PostLink node={targetNode} />
          )
        })}
      </div>
    </div>
  )
}

function Post(props) {
  const postId = props.pageContext.contentful_id
  const prevPostId = props.pageContext.prevPostId
  const nextPostId = props.pageContext.nextPostId

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
              file {
                url
              }
            }
            tag
          }
        }
      }
    `
  )

  const node = data.posts.nodes.find(n => n.contentful_id === postId)
  if (!node) return null

  return (
    <>
      <Seo
        title={node.title}
        card={`summary_large_image`}
        image={`https:` + node.thumb.file.url}
      />
      <ContentWrapper>
        <Header />
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              marginTop: "6rem",
              position: "relative",
            }}
          >
            <PostContent node={node} />
            <Nav
              nodes={data.posts.nodes}
              prevPostId={prevPostId}
              nextPostId={nextPostId}
            />
            <div style={{ height: "4rem" }}></div>

            <RelatedPosts nodes={data.posts.nodes} node={node} />
          </div>
        </div>
        <Footer />
      </ContentWrapper>
    </>
  )
}

export default Post
