(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{438:function(t,e,r){"use strict";var o=r(8),c=r(44),n=r(45),l=r(137),d=r(94),f=r(16),v=r(68).f,h=r(69).f,_=r(23).f,m=r(441).trim,C="Number",y=o.Number,S=y,w=y.prototype,O=n(r(95)(w))==C,I="trim"in String.prototype,N=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,o,c,n=(e=I?e.trim():m(e,3)).charCodeAt(0);if(43===n||45===n){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:o=2,c=49;break;case 79:case 111:o=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,o)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(O?f((function(){w.valueOf.call(r)})):n(r)!=C)?l(new S(N(e)),r,y):N(e)};for(var k,x=r(14)?v(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;x.length>E;E++)c(S,k=x[E])&&!c(y,k)&&_(y,k,h(S,k));y.prototype=w,w.constructor=y,r(26)(o,C,y)}},441:function(t,e,r){var o=r(5),c=r(49),n=r(16),l=r(442),d="["+l+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),h=function(t,e,r){var c={},d=n((function(){return!!l[t]()||"​"!="​"[t]()})),f=c[t]=d?e(_):l[t];r&&(c[r]=f),o(o.P+o.F*d,"String",c)},_=h.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=h},442:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},454:function(t,e,r){"use strict";r(438);var o={name:"CheckCircleIcon",props:{title:{type:String,default:"Check Circle icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},c=r(37),component=Object(c.a)(o,(function(t,e){var r=e._c;return r("span",e._g(e._b({staticClass:"material-design-icon check-circle-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"}},[e.props.decorative?e._e():r("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null);e.a=component.exports},464:function(t,e,r){var content=r(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(93).default)("60af4e2b",content,!0,{sourceMap:!1})},495:function(t,e,r){"use strict";r(464)},496:function(t,e,r){var o=r(92)(!1);o.push([t.i,".Scoreboard table .place{padding-right:1rem;width:6rem;text-align:right}.Scoreboard .team{max-width:18rem;text-overflow:ellipsis;overflow:hidden}.Scoreboard .team-flag{display:inline-block;width:27px;height:18px;background-size:contain;background-position:50%;background-repeat:no-repeat}.Scoreboard .team-name>*{vertical-align:middle}.Scoreboard .authed{margin-left:.2em;color:#c31b1b}.Scoreboard tr.active{background:rgba(255,0,0,.3)}",""]),t.exports=o},521:function(t,e,r){"use strict";r.r(e);r(15),r(9),r(12),r(21),r(22);var o=r(4),c=r(29),n=r(454);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{IsoLink:r(136).a,CheckCircle:n.a},head:function(){return{title:"Scoreboard - TSG CTF"}},computed:d(d({},Object(c.b)({scoreboard:"scoreboard/getScoreboard"})),Object(c.c)({isStatic:"isStatic",myTeam:"team"})),mounted:function(){var t=this;this.isStatic||(this.$store.dispatch("scoreboard/update",{$axios:this.$axios}),this.interval=setInterval((function(){t.$store.dispatch("scoreboard/update",{$axios:t.$axios})}),6e4))},destroyed:function(){clearInterval(this.interval)},methods:{getFlagStyle:function(t){return null===t||""===t?{backgroundColor:"transparent"}:{backgroundImage:"url(https://cdn.jsdelivr.net/gh/behdad/region-flags@gh-pages/svg/".concat(t.toUpperCase(),".svg)")}}}},v=(r(495),r(37)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"Scoreboard"},[t._m(0),t._v(" "),r("div",{staticClass:"table-wrap"},[r("table",{staticClass:"scoreboard"},[t._m(1),t._v(" "),r("tbody",t._l(t.scoreboard,(function(e){return r("tr",{key:e.id,class:{active:e.account_id===t.myTeam.id}},[r("th",{staticClass:"place",attrs:{scope:"row"}},[t._v(t._s(e.pos))]),t._v(" "),r("td",{staticClass:"team"},[r("div",{staticClass:"team-flag",style:t.getFlagStyle(e.country)}),t._v(" "),r("iso-link",{staticClass:"team-name",attrs:{to:"/teams/"+e.account_id}},[r("span",[t._v(t._s(e.name))]),t._v(" "),e.oauth_id?r("check-circle",{staticClass:"authed",attrs:{title:"Verified with CTFTime",size:16}}):t._e()],1)],1),t._v(" "),r("td",[t._v(t._s(e.score))])])})),0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{staticClass:"title"},[r("span",[t._v("Score"),r("wbr"),t._v("board")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("td",{staticClass:"place",attrs:{scope:"col"}},[r("b",[t._v("Place")])]),t._v(" "),r("td",{attrs:{scope:"col"}},[r("b",[t._v("Team")])]),t._v(" "),r("td",{attrs:{scope:"col"}},[r("b",[t._v("Score")])])])])}],!1,null,null,null);e.default=component.exports}}]);