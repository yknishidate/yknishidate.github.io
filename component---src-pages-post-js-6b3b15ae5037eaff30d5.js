(self.webpackChunkmarkdown_blog=self.webpackChunkmarkdown_blog||[]).push([[998],{3164:function(e,t,r){"use strict";r.d(t,{Td:function(){return x},Tr:function(){return d},iA:function(){return p},p3:function(){return m}});var n=r(8409),o=r(559),u=r(7294);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var l=["className"],s=["placement"],i=["isNumeric"],p=(0,n.Gp)((function(e,t){var r=(0,n.jC)("Table",e),s=(0,n.Lr)(e),i=s.className,p=a(s,l);return u.createElement(n.Fo,{value:r},u.createElement(n.m$.table,c({role:"table",ref:t,__css:r.table,className:(0,o.cx)("chakra-table",i)},p)))}));o.Ts&&(p.displayName="Table");var f=(0,n.Gp)((function(e,t){var r=e.placement,o=void 0===r?"bottom":r,l=a(e,s),i=(0,n.yK)();return u.createElement(n.m$.caption,c({},l,{ref:t,__css:c({},i.caption,{captionSide:o})}))}));o.Ts&&(f.displayName="TableCaption");var m=(0,n.Gp)((function(e,t){var r=(0,n.yK)();return u.createElement(n.m$.tbody,c({},e,{ref:t,__css:r.tbody}))})),d=(0,n.Gp)((function(e,t){var r=(0,n.yK)();return u.createElement(n.m$.tr,c({role:"row"},e,{ref:t,__css:r.tr}))})),x=(0,n.Gp)((function(e,t){var r=e.isNumeric,o=a(e,i),l=(0,n.yK)();return u.createElement(n.m$.td,c({role:"gridcell"},o,{ref:t,__css:l.td,"data-is-numeric":r}))}))},1955:function(e,t,r){var n=r(7927);e.exports={MDXRenderer:n}},7927:function(e,t,r){var n=r(861),o=r(3515),u=r(8416),c=r(7071),a=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),p=r(4983).mdx,f=r(2174).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,u=c(e,a),l=f(t),m=i.useMemo((function(){if(!r)return null;var e=s({React:i,mdx:p},l),t=Object.keys(e),u=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(u)))}),[r,t]);return i.createElement(m,s({},u))}},2061:function(e,t,r){"use strict";var n=r(7294),o=r(6724);t.Z=function(e){var t=e.children,r=e.href;return n.createElement(o.rU,{href:r,isExternal:!0,fontWeight:"bold",textDecoration:"underline",_focus:{_focus:"none"},textUnderlineOffset:"0.15em"},t)}},9373:function(e,t,r){"use strict";var n=r(7294),o=r(6724);t.Z=function(e){var t=e.children;return n.createElement(o.Ct,{mr:2,my:1,bg:"gray.700",color:"gray.200",textTransform:"none",px:1.5,py:.5},t)}},1846:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(6724),u=r(3164),c=r(1955),a=r(1977),l=r(2061),s=r(4983),i=r(262),p=r(9373);t.default=function(e){var t=e.pageContext.product;return t?n.createElement(a.Z,null,n.createElement(i.Z,null),n.createElement(o.xu,{mb:8},n.createElement(o.xv,null,t.frontmatter.date),n.createElement(o.X6,{as:"h1",py:2,size:"lg",fontWeight:"normal"},t.frontmatter.title),n.createElement(o.xu,null,t.frontmatter.tags.map((function(e){return n.createElement(p.Z,null,e)})))),n.createElement(s.MDXProvider,{components:{h1:function(e){return n.createElement(o.X6,Object.assign({},e,{as:"h1",pt:8,pb:2,size:"lg",fontWeight:"normal"}))},h2:function(e){return n.createElement(o.X6,Object.assign({},e,{as:"h2",pt:6,pb:2,size:"md",fontWeight:"normal"}))},h3:function(e){return n.createElement(o.X6,Object.assign({},e,{as:"h3",pt:4,pb:2,size:"md",fontWeight:"normal"}))},p:function(e){return n.createElement(o.xv,Object.assign({},e,{py:1}))},pre:function(e){return n.createElement(o.EK,Object.assign({},e,{display:"block",whiteSpace:"pre",p:4}))},table:u.iA,tr:u.Tr,td:u.Td,ul:function(e){return n.createElement(o.xv,Object.assign({},e,{pl:2}))},a:function(e){return n.createElement(l.Z,e)}}},n.createElement(c.MDXRenderer,null,t.body))):n.createElement("div",null)}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var n=r(6015),o=r(9617);function u(t,r,c){return o()?(e.exports=u=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,r){var o=[null];o.push.apply(o,t);var u=new(Function.bind.apply(e,o));return r&&n(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e,t,r){var n=r(4062);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),o=r(9498),u=r(6116),c=r(2281);e.exports=function(e){return n(e)||o(e)||u(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var n=r(8698).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var n=r(8698).default,o=r(5036);e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var n=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-post-js-6b3b15ae5037eaff30d5.js.map