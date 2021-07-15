import * as React from "react"
import bg from "../images/background2.svg"
import SocialLinks from "./sociallinks"
import "./base.css"
import Fade from "react-reveal/Fade"
import { useMediaQuery } from "react-responsive"
import ContentWrapper from "./contentwrapper"

function BackImage() {
  return (
    <Fade delay={750} duration={750}>
      <img
        src={bg}
        alt=""
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
        }}
      ></img>
    </Fade>
  )
}

function Hero(props) {
  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        height: "100vh",
        textAlign: "bottom",
        verticalAlign: "bottom",

        display: "flex",
        alignItems: "center",
        zIndex: "-1",
        backgroundColor: "#1F2937",
      }}
    >
      <BackImage />
      <ContentWrapper>
        <Resume />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "5%",
          }}
        >
          <SocialLinks marginLeft={"1rem"} color={"white"} />
        </div>
      </ContentWrapper>
    </div>
  )
}

function Resume(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" })
  return (
    <Fade cascade right duration={750} delay={750} distance="30px">
      <div style={{ color: "white" }}>
        <div
          style={{
            display: "flex",
            verticalAlign: "0",
            alignItems: "flex-end",
            marginBottom: "1.45rem",
            flexWrap: "wrap",
            columnGap: "1rem",
          }}
        >
          <h1 style={{}}>西舘祐樹</h1>
          <h2 style={{ color: "#486082" }}>Yuki Nishidate</h2>
        </div>
        <p>コンピュータグラフィックスが好きな大学生です。</p>
        {!isMobile && (
          <div>
            <br></br>
            <h3>学歴</h3>
            <p>
              ・ <span className="spacing">慶應義塾湘南藤沢高等部 卒業</span>
            </p>
            <p>
              ・{" "}
              <span className="spacing">
                慶應義塾大学 理工学部 情報工学科 在学中
              </span>
            </p>
            <br></br>
            <h3>職歴</h3>
            <p>
              ・ <span className="spacing">家具広告制作会社</span>で3Dデザイナー
            </p>
            <p>・ デジタル・フロンティアでR&Dエンジニア</p>
          </div>
        )}
      </div>
    </Fade>
  )
}

export default Hero
