(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{2177:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(7294),a=n.p+"static/background2-8cf0e70e87f623772d13d77c67c3efb6.svg",l=n(6841),o=n(8093),c=n(4360);function i(){return r.createElement("img",{src:a,alt:"",style:{width:"100%",height:"100vh",objectFit:"cover",position:"absolute",pointerEvents:"none",zIndex:"-1"}})}function u(e){var t=(0,o.useMediaQuery)({query:"(max-width: 480px)"});return r.createElement("div",{style:{color:"white",zIndex:"1"}},r.createElement("div",{style:{display:"flex",verticalAlign:"0",alignItems:"flex-end",marginBottom:"1.45rem",flexWrap:"wrap",columnGap:"1rem"}},r.createElement("h1",null,"西舘祐樹"),r.createElement("h2",{style:{color:"#475D80"}},"Yuki Nishidate")),r.createElement("p",null,"コンピュータグラフィックスが好きな大学生です。"),!t&&r.createElement("div",null,r.createElement("br",null),r.createElement("h3",null,"学歴"),r.createElement("p",null,"・ ",r.createElement("span",{className:"spacing"},"慶應義塾湘南藤沢高等部 卒業")),r.createElement("p",null,"・"," ",r.createElement("span",{className:"spacing"},"慶應義塾大学 理工学部 情報工学科 在学中")),r.createElement("br",null),r.createElement("h3",null,"職歴"),r.createElement("p",null,"・ ",r.createElement("span",{className:"spacing"},"家具広告制作会社"),"で3Dデザイナー"),r.createElement("p",null,"・ デジタル・フロンティアでR&Dエンジニア")))}var s=function(e){return r.createElement("div",{style:{margin:"0",padding:"0",height:"100vh",textAlign:"bottom",verticalAlign:"bottom",display:"flex",alignItems:"center"}},r.createElement(i,null),r.createElement(c.Z,null,r.createElement(u,null),r.createElement("div",{style:{position:"absolute",bottom:"5%",right:"10%"}},r.createElement(l.Z,{marginLeft:"1rem",color:"white"}))))},m=n(5610),g=n(5444),p=n(9490),f=n(18);var d=function(e){var t=e.nodes,n=e.toggleTags,a=e.tagMap;console.log("Render TagList");var l=function(e){var t=new Map;return e.forEach((function(e){e.tag&&e.tag.forEach((function(e){t.has(e)?t.set(e,t.get(e)+1):t.set(e,1)}))})),t}(t);l=new Map((0,f.Z)(l.entries()).sort((function(e,t){return t[1]-e[1]})));var o={backgroundColor:"#444",border:"solid #444 1px",color:"white",padding:"0.2rem 0.4rem",borderRadius:"0.2rem",fontWeight:"500",cursor:"pointer"},c={border:"solid #666 1px",padding:"0.2rem 0.4rem",borderRadius:"0.2rem",fontWeight:"500",cursor:"pointer"};return r.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3rem",fontSize:"75%"}},Array.from(l.keys()).map((function(e){return r.createElement("button",{onClick:function(){return n(e)}},r.createElement("p",{style:a[e]?o:c},e+" : "+l.get(e)))})))};var E=function(e){var t=(0,g.useStaticQuery)("2929438010"),n={};t.posts.nodes.forEach((function(e){e.tag&&e.tag.forEach((function(e){n[e]=!1}))}));var a=(0,r.useState)(n),l=a[0],o=a[1];function i(e){return!function(){for(var e in l)if(l[e])return!0;return!1}()||function(e){var t=!1;return e.tag&&e.tag.forEach((function(e){l[e]&&(t=!0)})),t}(e)}return r.createElement(c.Z,{style:{marginTop:"5rem"}},r.createElement("div",{style:{margin:"0 auto",maxWidth:800}},r.createElement(d,{nodes:t.posts.nodes,toggleTags:function(e){console.log("toggleTags:",e);var t=Object.assign({},n);t[e]=!l[e],o(t),console.log("Object.is :",Object.is(l,t))},tagMap:l}),r.createElement("div",{style:{height:"20px"}}),r.createElement("main",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gridColumnGap:"20px",gridRowGap:"20px"}},t.posts.nodes.map((function(e){return i(e)?r.createElement(p.Z,{node:e}):r.createElement(r.Fragment,null)})),function(){var e=0;t.posts.nodes.forEach((function(t){i(t)&&e++})),console.log("postCount : "+e);for(var n=[],r=0;r<3-e;r++)n.push(0);return n}().map((function(e){return r.createElement(p.Z,null)})))))},h=function(){return r.createElement(r.Fragment,null,r.createElement(s,null),r.createElement(E,null),r.createElement(m.Z,null))}},7704:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(2177),l=n(3751);t.default=function(){return r.createElement(r.Fragment,null,r.createElement(l.Z,{title:"Home"}),r.createElement(a.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-25e350145b7a5abef036.js.map