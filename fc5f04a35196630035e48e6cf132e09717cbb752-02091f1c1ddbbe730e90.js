(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+3Ox":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("7vrA");t.a=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),i.a.createElement("header",null,i.a.createElement(n.a,null,i.a.createElement("a",{href:"https://twitter.com/asta18425",target:"_blank",rel:"noopener noreferrer"},"Twitter"),i.a.createElement("a",{href:"https://github.com/nishidate-yuki",target:"_blank",rel:"noopener noreferrer"},"GitHub"),i.a.createElement("a",{href:"https://zenn.dev/nishiki",target:"_blank",rel:"noopener noreferrer"},"Zenn")))}},"0g4d":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r);t.a=function(e){var t=e.title;return i.a.createElement("h2",{className:"section-title"},t)}},"3ell":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("9eSz"),s=a.n(n),d=a("0g4d"),l=a("z1px"),o=a.n(l);t.a=function(e){var t=e.node,a=e.isDesktop,r=e.close,n=t.title,l=t.images,u=t.description,c=t.date,f=t.videos,g=t.url;return i.a.createElement("div",{className:"post-detail-content"},a&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{onClick:r,style:{position:"absolute",top:"10px",right:"10px"}},i.a.createElement("img",{width:40,src:o.a}))),i.a.createElement("div",{className:"post-detail-header"},i.a.createElement(d.a,{title:n}),i.a.createElement("p",{className:"post-date"},c)),i.a.createElement("p",{className:"description"},u.description,i.a.createElement("br",null),g&&i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn color-text link-text",href:g},"[Link]")),l&&l.map((function(e){return i.a.createElement(s.a,{className:"post-image",fluid:e.fluid})})),null!=f&&f.map((function(e){return i.a.createElement("div",{className:"video-wrapper"},i.a.createElement("video",{className:"post-video",src:e.file.url,controls:!0}))})))}},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),d=r(a("8OQS")),l=r(a("pVnL")),o=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(w&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(w&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=c(e),a=g(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,w="undefined"!=typeof window,S=w&&window.IntersectionObserver,y=new WeakMap;function L(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function M(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var C=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+o+s+d+a+r+t+n+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=o.default.createElement(A,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?o.default.createElement("picture",null,i(r),d):d})),A=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,l.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));A.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=w&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&S&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||w&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:w}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=g(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,w=e.durationFadeIn,S=e.Tag,y=e.itemProp,v=e.loading,I=e.draggable,C=m||h;if(!C)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:k?1:0,transition:j?"opacity "+w+"ms":"none"},d),D="boolean"==typeof b?"lightgray":b,N={transitionDelay:w+"ms"},R=(0,l.default)({opacity:this.state.imgLoaded?0:1},j&&N,d,f),T={title:t,alt:this.state.isVisible?"":a,style:R,className:g,itemProp:y},H=this.state.isHydrated?p(C):C[0];if(m)return o.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},o.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),D&&o.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:D,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&N)}),H.base64&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:T,imageVariants:C,generateSources:M}),H.tracedSVG&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:T,imageVariants:C,generateSources:E}),this.state.isVisible&&o.default.createElement("picture",null,L(C),o.default.createElement(A,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:I})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:v},H,{imageVariants:C}))}}));if(h){var P=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},n);return"inherit"===n.display&&delete P.display,o.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},D&&o.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:D,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},j&&N)}),H.base64&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:T,imageVariants:C,generateSources:M}),H.tracedSVG&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:T,imageVariants:C,generateSources:E}),this.state.isVisible&&o.default.createElement("picture",null,L(C),o.default.createElement(A,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:I})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:v},H,{imageVariants:C}))}}))}return null},t}(o.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),O=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function D(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}k.propTypes={resolutions:j,sizes:O,fixed:D(u.default.oneOfType([j,u.default.arrayOf(j)])),fluid:D(u.default.oneOfType([O,u.default.arrayOf(O)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=k;t.default=N},I204:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("qhky");t.a=function(e){e.url,e.image;return i.a.createElement(n.a,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Yuki Nishidate | 西舘祐樹"),i.a.createElement("html",{lang:"ja"}),i.a.createElement("meta",{name:"description",content:""}))}},z1px:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiNkZGQiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPg0KICAgIDxnPg0KICAgICAgICA8cGF0aCBkPSJNMCwwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz4NCiAgICA8L2c+DQogICAgPGc+DQogICAgICAgIDxnPg0KICAgICAgICAgICAgPHBhdGggZD0iTTE4LjMsNS43MUwxOC4zLDUuNzFjLTAuMzktMC4zOS0xLjAyLTAuMzktMS40MSwwTDEyLDEwLjU5TDcuMTEsNS43Yy0wLjM5LTAuMzktMS4wMi0wLjM5LTEuNDEsMGwwLDAgYy0wLjM5LDAuMzktMC4zOSwxLjAyLDAsMS40MUwxMC41OSwxMkw1LjcsMTYuODljLTAuMzksMC4zOS0wLjM5LDEuMDIsMCwxLjQxbDAsMGMwLjM5LDAuMzksMS4wMiwwLjM5LDEuNDEsMEwxMiwxMy40MWw0Ljg5LDQuODkgYzAuMzksMC4zOSwxLjAyLDAuMzksMS40MSwwbDAsMGMwLjM5LTAuMzksMC4zOS0xLjAyLDAtMS40MUwxMy40MSwxMmw0Ljg5LTQuODlDMTguNjgsNi43MywxOC42OCw2LjA5LDE4LjMsNS43MXoiLz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="}}]);
//# sourceMappingURL=fc5f04a35196630035e48e6cf132e09717cbb752-02091f1c1ddbbe730e90.js.map