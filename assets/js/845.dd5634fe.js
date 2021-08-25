(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[845],{6845:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=n(7462),o=n(7294),l=n(6742),a=n(6010),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(7410).Z,theme:s};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=u({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=u({},n,{backgroundColor:null}),o};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var g=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,l=u({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(l.style=a.plain),void 0!==o&&(l.style=void 0!==l.style?u({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return l[n[0]];var a=r?{display:"inline-block"}:{},s=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[a].concat(s))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,l=e.token,a=u({},m(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?u({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),i(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,l=this.getThemeDict(this.props),a=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],l=0,a=0,s=[],c=[s];a>-1;){for(;(l=r[a]++)<o[a];){var i=void 0,u=t[a],h=n[a][l];if("string"==typeof h?(u=a>0?u:["plain"],i=h):(u=d(u,h.type),h.alias&&(u=d(u,h.alias)),i=h.content),"string"==typeof i){var m=i.split(p),g=m.length;s.push({types:u,content:m[0]});for(var f=1;f<g;f++)y(s),c.push(s=[]),s.push({types:u,content:m[f]})}else a++,t.push(u),n.push(i),r.push(0),o.push(i.length)}a--,t.pop(),n.pop(),r.pop(),o.pop()}return y(s),c}(void 0!==a?this.tokenize(t,r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var f=n(7594),v=n.n(f),b={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},k=n(5350),j=n(3018),E=function(){var e=(0,j.LU)().prism,t=(0,k.Z)().isDarkTheme,n=e.theme||b,r=e.darkTheme||n;return t?r:n},N=n(4973),Z="codeBlockContainer_K1bP",x="codeBlockContent_hGly",T="codeBlockTitle_eoMF",C="codeBlock_23N8",B="copyButton_Ue-o",P="codeBlockLines_39YC",L=/{([\d,-]+)}/,O=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function D(e){var t=e.children,n=e.className,l=e.metastring,s=e.title,i=(0,j.LU)().prism,u=(0,o.useState)(!1),p=u[0],y=u[1],d=(0,o.useState)(!1),h=d[0],m=d[1];(0,o.useEffect)((function(){m(!0)}),[]);var f=(0,j.bc)(l)||s,b=(0,o.useRef)(null),k=[],D=E(),S=Array.isArray(t)?t.join(""):t;if(l&&L.test(l)){var _=l.match(L)[1];k=v()(_).filter((function(e){return e>0}))}var w=n&&n.replace(/language-/,"");!w&&i.defaultLanguage&&(w=i.defaultLanguage);var A=S.replace(/\n$/,"");if(0===k.length&&void 0!==w){for(var z,I="",R=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return O(["js","jsBlock"]);case"jsx":case"tsx":return O(["js","jsBlock","jsx"]);case"html":return O(["js","jsBlock","html"]);case"python":case"py":return O(["python"]);default:return O()}}(w),F=S.replace(/\n$/,"").split("\n"),$=0;$<F.length;){var V=$+1,U=F[$].match(R);if(null!==U){switch(U.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=V+",";break;case"highlight-start":z=V;break;case"highlight-end":I+=z+"-"+(V-1)+","}F.splice($,1)}else $+=1}k=v()(I),A=F.join("\n")}var G=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),l=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var a=document.getSelection(),s=!1;a.rangeCount>0&&(s=a.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(i){}o.remove(),s&&(a.removeAllRanges(),a.addRange(s)),l&&l.focus()}(A),y(!0),setTimeout((function(){return y(!1)}),2e3)};return o.createElement(g,(0,r.Z)({},c,{key:String(h),theme:D,code:A,language:w}),(function(e){var t=e.className,n=e.style,l=e.tokens,s=e.getLineProps,c=e.getTokenProps;return o.createElement("div",{className:Z},f&&o.createElement("div",{style:n,className:T},f),o.createElement("div",{className:(0,a.Z)(x,w)},o.createElement("pre",{tabIndex:0,className:(0,a.Z)(t,C,"thin-scrollbar"),style:n},o.createElement("code",{className:P},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return k.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return o.createElement("span",(0,r.Z)({key:t},c({token:e,key:t})))})))})))),o.createElement("button",{ref:b,type:"button","aria-label":(0,N.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(B,"clean-btn"),onClick:G},p?o.createElement(N.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(N.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var S=n(6159),_="details_1VDD";function w(e){var t=Object.assign({},e);return o.createElement(j.PO,(0,r.Z)({},t,{className:(0,a.Z)("alert alert--info",_,t.className)}))}var A={code:function(e){var t=e.children;return(0,o.isValidElement)(t)?t:t.includes("\n")?o.createElement(D,e):o.createElement("code",e)},a:function(e){return o.createElement(l.Z,e)},pre:function(e){var t,n=e.children;return(0,o.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:o.createElement(D,(0,o.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=o.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=o.createElement(o.Fragment,null,t.filter((function(e){return e!==n})));return o.createElement(w,(0,r.Z)({},e,{summary:n}),l)},h1:(0,S.Z)("h1"),h2:(0,S.Z)("h2"),h3:(0,S.Z)("h3"),h4:(0,S.Z)("h4"),h5:(0,S.Z)("h5"),h6:(0,S.Z)("h6")}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);