_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"1ccW":function(e,t){function i(){return e.exports=i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},i.apply(this,arguments)}e.exports=i},"3niX":function(e,t,i){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var r,n=i("q1tI");var s=new(((r=i("SevZ"))&&r.__esModule?r:{default:r}).default),o=function(e){var t,i;function r(t){var i;return(i=e.call(this,t)||this).prevProps={},i}i=e,(t=r).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i,r.dynamic=function(e){return e.map((function(e){var t=e[0],i=e[1];return s.computeId(t,i)})).join(" ")};var n=r.prototype;return n.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},n.componentWillUnmount=function(){s.remove(this.props)},n.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},r}(n.Component);t.default=o},"8oxB":function(e,t){var i,r,n=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(i===setTimeout)return setTimeout(e,0);if((i===s||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"===typeof setTimeout?setTimeout:s}catch(e){i=s}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,u=[],l=!1,d=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&f())}function f(){if(!l){var e=a(h);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];u.push(new p(e,t)),1!==u.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=m,n.addListener=m,n.once=m,n.off=m,n.removeListener=m,n.removeAllListeners=m,n.emit=m,n.prependListener=m,n.prependOnceListener=m,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},"98FW":function(e,t){e.exports=function(e,t){if(null==e)return{};var i,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}},"9kyW":function(e,t,i){"use strict";e.exports=function(e){for(var t=5381,i=e.length;i;)t=33*t^e.charCodeAt(--i);return t>>>0}},Aiso:function(e,t,i){e.exports=i("dQHF")},MX0m:function(e,t,i){e.exports=i("3niX")},RNiq:function(e,t,i){"use strict";i.r(t);var r=i("nKUr"),n=i("MX0m"),s=i.n(n),o=(i("q1tI"),i("Zukk")),a=i("Aiso"),c=i.n(a);t.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(o.a,{keywords:"main page",children:[Object(r.jsx)("div",{style:{position:"relative",margin:"0 50% 0 50%",borderRadius:"60%",overflow:"hidden",backgroundColor:"GrayText",width:"200px",height:"200px"},className:"jsx-1207653977",children:Object(r.jsx)(c.a,{src:"/samer1.jpg",alt:"Picture of the author",layout:"fill"})}),Object(r.jsx)("section",{className:"jsx-1207653977 section",children:Object(r.jsxs)("div",{className:"jsx-1207653977 qualifications",children:[Object(r.jsx)("h2",{className:"jsx-1207653977",children:"Cover Letter"}),Object(r.jsx)("br",{className:"jsx-1207653977"}),Object(r.jsx)("br",{className:"jsx-1207653977"}),Object(r.jsxs)("p",{className:"jsx-1207653977",children:["I would like to introduce myself as a candidate for the Front End Developer position within your company",Object(r.jsx)("br",{className:"jsx-1207653977"}),"and be an excellent addition to your organization. In addition to my knowledge base, ",Object(r.jsx)("br",{className:"jsx-1207653977"}),"I actively seek out new technologies and stay up-to-date on industry trends and advancement.",Object(r.jsx)("br",{className:"jsx-1207653977"}),"I was able to develop my skills in the field of web development Especially a libraries of react.js and redux Next.js.",Object(r.jsx)("br",{className:"jsx-1207653977"}),"I like this field and I know with the help of those libraries I can't create good websites, so it is my target ",Object(r.jsx)("br",{className:"jsx-1207653977"}),"to be a very good specialty Front-End developer with React JS.",Object(r.jsx)("br",{className:"jsx-1207653977"}),"Tech skills: React, Redux,Next, HTML5/CSS5, SCSS,Material-ui, responsive and multi device ",Object(r.jsx)("br",{className:"jsx-1207653977"}),"layouts, BEM, Javascript (ES6+), Webpack, Babel, ESLint, REST API, Figma, Github, Trello,Elma",Object(r.jsx)("br",{className:"jsx-1207653977"}),Object(r.jsx)("br",{className:"jsx-1207653977"}),"I can be reached anytime via my cell phone,+380730674311 or by email at samerukr@gmail.com.",Object(r.jsx)("br",{className:"jsx-1207653977"}),"you can visit my Repository in GitHub and see all my Rep:",Object(r.jsx)("br",{className:"jsx-1207653977"}),"https://github.com/samerlagha?tab=repositories",Object(r.jsx)("br",{className:"jsx-1207653977"}),"Thank you for your time and consideration. I look forward to speaking with you about this opportunity. ",Object(r.jsx)("br",{className:"jsx-1207653977"}),"Best regards,",Object(r.jsx)("br",{className:"jsx-1207653977"}),"Samer Lagha",Object(r.jsx)("br",{className:"jsx-1207653977"})]})]})})]}),Object(r.jsx)(s.a,{id:"1207653977",children:[".images.jsx-1207653977{border-radius:50%;width:200px;height:200px;}"]})]})}},SevZ:function(e,t,i){"use strict";t.__esModule=!0,t.default=void 0;var r=s(i("9kyW")),n=s(i("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,i=t.styleSheet,r=void 0===i?null:i,s=t.optimizeForSpeed,o=void 0!==s&&s,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new n.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var i=this.getIdAndRules(e),r=i.styleId,n=i.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var s=n.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=s,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,i=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(i in this._instancesCounts,"styleId: `"+i+"` not found"),this._instancesCounts[i]-=1,this._instancesCounts[i]<1){var r=this._fromServer&&this._fromServer[i];r?(r.parentNode.removeChild(r),delete this._fromServer[i]):(this._indices[i].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[i]),delete this._instancesCounts[i]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],i=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return i[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,i){if(!i)return"jsx-"+t;var n=String(i),s=t+n;return e[s]||(e[s]="jsx-"+(0,r.default)(t+"-"+n)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(i,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var n=i+r;return t[n]||(t[n]=r.replace(e,i)),t[n]}},t.getIdAndRules=function(e){var t=this,i=e.children,r=e.dynamic,n=e.id;if(r){var s=this.computeId(n,r);return{styleId:s,rules:Array.isArray(i)?i.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,i)]}}return{styleId:this.computeId(n),rules:Array.isArray(i)?i:[i]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},UWYU:function(e,t,i){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},bVZc:function(e,t,i){"use strict";(function(e){function i(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,n=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,i=t.name,s=void 0===i?"stylesheet":i,a=t.optimizeForSpeed,c=void 0===a?r:a,u=t.isBrowser,l=void 0===u?"undefined"!==typeof window:u;o(n(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,s,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,i){return"number"===typeof i?e._serverSheet.cssRules[i]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),i},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(n(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var i=this.getSheet();"number"!==typeof t&&(t=i.cssRules.length);try{i.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var i=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!i.cssRules[e])return e;i.deleteRule(e);try{i.insertRule(t,e)}catch(s){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),i.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];o(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,i){return i?t=t.concat(Array.prototype.map.call(e.getSheetForTag(i).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,i){t&&o(n(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return i?s.insertBefore(r,i):s.appendChild(r),r},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&i(t.prototype,s),a&&i(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,i("8oxB"))},dEHY:function(e,t,i){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,i){"use strict";var r=i("zoAU"),n=i("mPvQ"),s=i("AroE");t.__esModule=!0,t.default=function(e){var t=e.src,i=e.sizes,s=e.unoptimized,a=void 0!==s&&s,d=e.priority,f=void 0!==d&&d,p=e.loading,v=e.className,y=e.quality,_=e.width,j=e.height,w=e.objectFit,x=e.objectPosition,z=e.loader,A=void 0===z?S:z,R=(0,o.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),k=i?"responsive":"intrinsic",O=!1;"unsized"in R?(O=Boolean(R.unsized),delete R.unsized):"layout"in R&&(R.layout&&(k=R.layout),delete R.layout);0;var F=!f&&("lazy"===p||"undefined"===typeof p);t&&t.startsWith("data:")&&(a=!0,F=!1);var N,C,E,T=(0,h.useIntersection)({rootMargin:"200px",disabled:!F}),I=r(T,2),B=I[0],q=I[1],P=!F||q,M=b(_),L=b(j),W=b(y),D={visibility:P?"inherit":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:w,objectPosition:x};if("undefined"!==typeof M&&"undefined"!==typeof L&&"fill"!==k){var U=L/M,H=isNaN(U)?"100%":"".concat(100*U,"%");"responsive"===k?(N={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},C={display:"block",boxSizing:"border-box",paddingTop:H}):"intrinsic"===k?(N={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},C={boxSizing:"border-box",display:"block",maxWidth:"100%"},E='<svg width="'.concat(M,'" height="').concat(L,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===k&&(N={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:M,height:L})}else"undefined"===typeof M&&"undefined"===typeof L&&"fill"===k&&(N={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var V={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};P&&(V=function(e){var t=e.src,i=e.unoptimized,r=e.layout,s=e.width,o=e.quality,a=e.sizes,c=e.loader;if(i)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,i){if(i&&("fill"===t||"responsive"===t)){var r=n(i.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(e){return parseInt(e[2])}));if(r.length){var s=.01*Math.min.apply(Math,n(r));return{widths:g.filter((function(e){return e>=m[0]*s})),kind:"w"}}return{widths:g,kind:"w"}}if("number"!==typeof e||"fill"===t||"responsive"===t)return{widths:m,kind:"w"};return{widths:n(new Set([e,2*e].map((function(e){return g.find((function(t){return t>=e}))||g[g.length-1]})))),kind:"x"}}(s,r,a),l=u.widths,d=u.kind,h=l.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:l.map((function(e,i){return"".concat(c({src:t,quality:o,width:e})," ").concat("w"===d?e:i+1).concat(d)})).join(", "),src:c({src:t,quality:o,width:l[h]})}}({src:t,unoptimized:a,layout:k,width:M,quality:W,sizes:i,loader:A}));O&&(N=void 0,C=void 0,D=void 0);return c.default.createElement("div",{style:N},C?c.default.createElement("div",{style:C},E?c.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(E))}):null):null,c.default.createElement("img",Object.assign({},R,V,{decoding:"async",className:v,ref:B,style:D})),f?c.default.createElement(u.default,null,c.default.createElement("link",{key:"__nimg-"+V.src+V.srcSet+V.sizes,rel:"preload",as:"image",href:V.srcSet?void 0:V.src,imagesrcset:V.srcSet,imagesizes:V.sizes})):null)};var o=s(i("98FW")),a=s(i("1ccW")),c=s(i("q1tI")),u=s(i("8Kt/")),l=i("dEHY"),d=i("UWYU"),h=i("vNVm");var f=new Map([["imgix",function(e){var t=e.root,i=e.src,r=e.width,n=e.quality,s=["auto=format","fit=max","w="+r],o="";n&&s.push("q="+n);s.length&&(o="?"+s.join("&"));return"".concat(t).concat(j(i)).concat(o)}],["cloudinary",function(e){var t=e.root,i=e.src,r=e.width,n=e.quality,s=["f_auto","c_limit","w_"+r,"q_"+(n||"auto")].join(",")+"/";return"".concat(t).concat(s).concat(j(i))}],["akamai",function(e){var t=e.root,i=e.src,r=e.width;return"".concat(t).concat(j(i),"?imwidth=").concat(r)}],["default",function(e){var t=e.root,i=e.src,r=e.width,n=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(i),"&w=").concat(r,"&q=").concat(n||75)}]]),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||d.imageConfigDefault,m=p.deviceSizes,v=p.imageSizes,y=p.loader,_=p.path,g=(p.domains,[].concat(n(m),n(v)));function b(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t=f.get(y);if(t)return t((0,a.default)({root:_},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(y))}function j(e){return"/"===e[0]?e.slice(1):e}m.sort((function(e,t){return e-t})),g.sort((function(e,t){return e-t}))},vlRD:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("RNiq")}])}},[["vlRD",0,1,2,3]]]);