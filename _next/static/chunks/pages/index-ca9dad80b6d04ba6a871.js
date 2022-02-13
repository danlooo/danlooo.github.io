(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4722:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return B},default:function(){return F}});var n=r(6503),o=r.n(n),s=(r(5675),r(4036)),i=r.n(s),a=/-(.)/g;var u=r(7294),c=r(5893);const l=u.createContext({prefixes:{}}),{Consumer:f,Provider:p}=l;function d(e,t){const{prefixes:r}=(0,u.useContext)(l);return e||r[t]||t}const y=e=>{return e[0].toUpperCase()+(t=e,t.replace(a,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function h(e,{displayName:t=y(e),Component:r,defaultProps:n}={}){const o=u.forwardRef((({className:t,bsPrefix:n,as:o=r||"div",...s},a)=>{const u=d(n,e);return(0,c.jsx)(o,{ref:a,className:i()(t,u),...s})}));return o.defaultProps=n,o.displayName=t,o}var m=h("card-group"),x=e=>u.forwardRef(((t,r)=>(0,c.jsx)("div",{...t,ref:r,className:i()(t.className,e)})));const v=u.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...o},s)=>{const a=d(e,"card-img");return(0,c.jsx)(n,{ref:s,className:i()(r?`${a}-${r}`:a,t),...o})}));v.displayName="CardImg";var b=v;const j=u.createContext(null);j.displayName="CardHeaderContext";var g=j;const _=u.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},o)=>{const s=d(e,"card-header"),a=(0,u.useMemo)((()=>({cardHeaderBsPrefix:s})),[s]);return(0,c.jsx)(g.Provider,{value:a,children:(0,c.jsx)(r,{ref:o,...n,className:i()(t,s)})})}));_.displayName="CardHeader";var w=_;const O=x("h5"),S=x("h6"),T=h("card-body"),N=h("card-title",{Component:O}),P=h("card-subtitle",{Component:S}),k=h("card-link",{Component:"a"}),R=h("card-text",{Component:"p"}),C=h("card-footer"),E=h("card-img-overlay"),$=u.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:o,body:s,children:a,as:u="div",...l},f)=>{const p=d(e,"card");return(0,c.jsx)(u,{ref:f,...l,className:i()(t,p,r&&`bg-${r}`,n&&`text-${n}`,o&&`border-${o}`),children:s?(0,c.jsx)(T,{children:a}):a})}));$.displayName="Card",$.defaultProps={body:!1};var I=Object.assign($,{Img:b,Title:N,Subtitle:P,Body:T,Link:k,Text:R,Header:w,Footer:C,ImgOverlay:E});const M=["xxl","xl","lg","md","sm","xs"],A=u.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},o)=>{const s=d(e,"row"),a=`${s}-cols`,u=[];return M.forEach((e=>{const t=n[e];let r;delete n[e],null!=t&&"object"===typeof t?({cols:r}=t):r=t;const o="xs"!==e?`-${e}`:"";null!=r&&u.push(`${a}${o}-${r}`)})),(0,c.jsx)(r,{ref:o,...n,className:i()(t,s,...u)})}));A.displayName="Row";var D=A;const U=["xxl","xl","lg","md","sm","xs"];const q=u.forwardRef(((e,t)=>{const[{className:r,...n},{as:o="div",bsPrefix:s,spans:a}]=function({as:e,bsPrefix:t,className:r,...n}){t=d(t,"col");const o=[],s=[];return U.forEach((e=>{const r=n[e];let i,a,u;delete n[e],"object"===typeof r&&null!=r?({span:i,offset:a,order:u}=r):i=r;const c="xs"!==e?`-${e}`:"";i&&o.push(!0===i?`${t}${c}`:`${t}${c}-${i}`),null!=u&&s.push(`order${c}-${u}`),null!=a&&s.push(`offset${c}-${a}`)})),[{...n,className:i()(r,...o,...s)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,c.jsx)(o,{...n,ref:t,className:i()(r,!a.length&&s)})}));q.displayName="Col";var L=q,B=!0,F=function(e){var t,r,n,s,i="https://orcid.org/0000-0002-4024-4443",a="https://github.com/danlooo";return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"my-5 text-center",children:(0,c.jsxs)("div",{className:"display-6",children:[(0,c.jsx)("p",{className:"m-0",children:"Hello, I'm "}),(0,c.jsx)("p",{className:"m-0",children:"Daniel Loos"}),(0,c.jsx)("div",{className:"m-0 ",children:(0,c.jsx)(o(),{staticText:"I am a",text:["data scientist","bioinformatician","software engineer"],eraseSpeed:"400ms"})})]})}),(0,c.jsxs)(m,{className:"rowwise",children:[(0,c.jsx)(I,{children:(0,c.jsx)("a",{href:"https://stackoverflow.com/users/16853114/danlooo",children:(0,c.jsxs)(D,{children:[(0,c.jsx)(L,{xs:12,sm:4,md:2,lg:2,children:(0,c.jsx)(I.Img,{src:"stackoverflow.svg"})}),(0,c.jsx)(L,{children:(0,c.jsxs)(I.Body,{children:[(0,c.jsx)(I.Title,{children:"Stack overflow contributor"}),(0,c.jsxs)(I.Text,{children:[(0,c.jsxs)("p",{className:"card-text d-flex justify-content-between",children:[(0,c.jsxs)("div",{children:[null===(t=e.user)||void 0===t?void 0:t.reputation," reputation"]}),(0,c.jsxs)("div",{children:[e.answers," answers"]})]}),(0,c.jsxs)("p",{className:"card-text d-flex justify-content-around ",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{className:"gold ",children:"\u25cf "})," ",null===(r=e.user.badge_counts)||void 0===r?void 0:r.gold]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{className:"silver ",children:"\u25cf "})," ",null===(n=e.user.badge_counts)||void 0===n?void 0:n.silver]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{className:"bronze",children:"\u25cf "})," ",null===(s=e.user.badge_counts)||void 0===s?void 0:s.bronze]})]})]})]})})]})})}),(0,c.jsx)(I,{children:(0,c.jsxs)(D,{children:[(0,c.jsx)(L,{xs:12,sm:4,md:2,lg:2,children:(0,c.jsx)(I.Img,{src:"lab.png"})}),(0,c.jsx)(L,{children:(0,c.jsxs)(I.Body,{children:[(0,c.jsx)("a",{href:i,children:(0,c.jsx)(I.Title,{children:"Scientist"})}),"                ",(0,c.jsxs)(I.Text,{children:[(0,c.jsxs)("p",{className:"card-text d-flex justify-content-between",children:[(0,c.jsx)("a",{href:i,children:"3 publications"}),(0,c.jsx)("a",{href:i,children:"NA citations"})]}),(0,c.jsx)("p",{children:(0,c.jsx)("a",{href:"https://www.uni-jena.de/en/msc-bioinformatics",children:"M.Sc. Bioinformatics, University of Jena"})}),(0,c.jsx)("p",{children:(0,c.jsx)("a",{href:"https://www.uni-luebeck.de/en/university-education/degree-programmes/molecular-life-science.html",children:"B.Sc. Molecular Life Science, University of L\xfcbeck"})})]})]})})]})}),(0,c.jsx)(I,{children:(0,c.jsxs)(D,{children:[(0,c.jsx)(L,{xs:12,sm:4,md:2,lg:2,children:(0,c.jsx)(I.Img,{src:"github.svg"})}),(0,c.jsx)(L,{children:(0,c.jsxs)(I.Body,{children:[(0,c.jsx)("a",{href:a,children:(0,c.jsx)(I.Title,{children:"Software engineer"})}),(0,c.jsxs)(I.Text,{children:[(0,c.jsxs)("p",{className:"card-text d-flex justify-content-between",children:[(0,c.jsx)("a",{href:a,children:"NA repositories"}),(0,c.jsx)("a",{href:a,children:"NA  filed issues"})]}),(0,c.jsx)("p",{children:"Languages: R, Bash, "}),(0,c.jsx)("p",{children:"Frameworks: R shiny, Nextflow"})]})]})})]})})]}),(0,c.jsxs)("p",{className:"mt-5",children:["Last update: ",e.date," "]})]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4722)}])},4036:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},6503:function(e){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=2)}([function(e,t,r){"use strict";e.exports=r(3)},function(e,t,r){e.exports=r(5)()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(0),s=u(o),i=u(r(1)),a=u(r(7));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={index:0,displayText:""},r.getRawText=r.getRawText.bind(r),r.type=r.type.bind(r),r.erase=r.erase.bind(r),r.startTyping=r.startTyping.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n(t,[{key:"componentDidMount",value:function(){this.startTyping()}},{key:"componentWillUnmount",value:function(){this._timeout&&clearTimeout(this._timeout)}},{key:"startTyping",value:function(){var e=this;this._timeout=setTimeout((function(){e.type()}),this.props.typingDelay)}},{key:"getRawText",value:function(){var e=this.props.text;return"string"==typeof e?[e]:[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e))}},{key:"type",value:function(){var e=this,t=this.state,r=t.index,n=t.displayText,o=this.getRawText()[r];o.length>n.length?(n=o.substr(0,n.length+1),this.setState({displayText:n},(function(){e._timeout=setTimeout((function(){e.type()}),e.props.speed)}))):this._timeout=setTimeout((function(){e.erase()}),this.props.eraseDelay)}},{key:"erase",value:function(){var e=this,t=this.state,r=t.index,n=t.displayText;0===n.length?(r=r+1===this.getRawText().length?0:r+1,this.setState({index:r},(function(){e.startTyping()}))):(n=n.substr(-n.length,n.length-1),this.setState({displayText:n},(function(){e._timeout=setTimeout((function(){e.erase()}),e.props.eraseSpeed)})))}},{key:"render",value:function(){var e=this.props,t=(e.speed,e.eraseSpeed,e.typingDelay,e.eraseDelay,e.staticText),r=(e.text,e.cursor),n=e.displayTextRenderer,o=e.cursorClassName,i=e.cursorRenderer,u=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["speed","eraseSpeed","typingDelay","eraseDelay","staticText","text","cursor","displayTextRenderer","cursorClassName","cursorRenderer"]),c=this.state,l=c.displayText,f=c.index;return s.default.createElement("span",u,t?s.default.createElement("span",null,t,"\xa0"):null,s.default.createElement("div",{style:{display:"inline-block"}},n?n(l,f):l),s.default.createElement(a.default,{cursor:r,cursorRenderer:i,className:o}))}}]),t}();t.default=c,c.defaultProps={speed:200,eraseSpeed:200,eraseDelay:5e3,typingDelay:2500},c.propTypes={speed:i.default.number.isRequired,eraseSpeed:i.default.number.isRequired,typingDelay:i.default.number.isRequired,eraseDelay:i.default.number.isRequired,staticText:i.default.string,text:i.default.oneOfType([i.default.arrayOf(i.default.string),i.default.string]).isRequired,cursor:i.default.string,cursorClassName:i.default.string,displayTextRenderer:i.default.func,cursorRenderer:i.default.func}},function(e,t,r){"use strict";var n=r(4),o="function"==typeof Symbol&&Symbol.for,s=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function j(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||v}function g(){}function _(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(x(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=j.prototype;var w=_.prototype=new g;w.constructor=_,n(w,j.prototype),w.isPureReactComponent=!0;var O={current:null},S=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var n,o={},i=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,n)&&!T.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:s,type:e,key:i,ref:a,props:o,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var k=/\/+/g,R=[];function C(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function E(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function $(e,t,r){return null==e?0:function e(t,r,n,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var u=!1;if(null===t)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case s:case i:u=!0}}if(u)return n(o,t,""===r?"."+I(t,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(t))for(var c=0;c<t.length;c++){var l=r+I(a=t[c],c);u+=e(a,l,n,o)}else if("function"==typeof(l=null===t||"object"!=typeof t?null:"function"==typeof(l=m&&t[m]||t["@@iterator"])?l:null))for(t=l.call(t),c=0;!(a=t.next()).done;)u+=e(a=a.value,l=r+I(a,c++),n,o);else if("object"===a)throw n=""+t,Error(x(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return u}(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(k,"$&/")+"/")+r)),n.push(e))}function D(e,t,r,n,o){var s="";null!=r&&(s=(""+r).replace(k,"$&/")+"/"),$(e,A,t=C(t,s,n,o)),E(t)}var U={current:null};function q(){var e=U.current;if(null===e)throw Error(x(321));return e}var L={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return D(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;$(e,M,t=C(null,null,t,r)),E(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(x(143));return e}},t.Component=j,t.Fragment=a,t.Profiler=c,t.PureComponent=_,t.StrictMode=u,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null==e)throw Error(x(267,e));var o=n({},e.props),i=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=O.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)S.call(t,l)&&!T.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var f=0;f<l;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:s,type:e.type,key:i,ref:a,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return q().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,r){return q().useReducer(e,t,r)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1"},function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in r=Object(arguments[u]))o.call(r,c)&&(a[c]=r[c]);if(n){i=n(r);for(var l=0;l<i.length;l++)s.call(r,i[l])&&(a[i[l]]=r[i[l]])}}return a}},function(e,t,r){"use strict";var n=r(6);function o(){}e.exports=function(){function e(e,t,r,o,s,i){if(i!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=o,r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(0),s=a(o),i=a(r(1));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={display:!0},r.animateCursor=r.animateCursor.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n(t,[{key:"componentDidMount",value:function(){this.animateCursor()}},{key:"componentWillUnmount",value:function(){this._interval&&clearInterval(this._interval)}},{key:"animateCursor",value:function(){var e=this;this._interval=setInterval((function(){e.setState({display:!e.state.display})}),500)}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.cursor,n=e.cursorRenderer,o=this.state.display,i=r||"|";return s.default.createElement("span",{className:t,style:c(o)},n?n(i):i)}}]),t}();t.default=u;var c=function(){return{display:"inline-block",MsTransition:"opacity 0.5s",WebkitTransition:"opacity 0.5s",MozTransition:"opacity 0.5s",transition:"opacity 0.5s",opacity:arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?0:1}};u.propTypes={cursor:i.default.string,className:i.default.string,cursorRenderer:i.default.func}}])}},function(e){e.O(0,[675,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);