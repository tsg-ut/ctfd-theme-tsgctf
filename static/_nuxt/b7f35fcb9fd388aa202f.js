(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{403:function(e,t,r){var content=r(405);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(72).default)("500caa6b",content,!0,{sourceMap:!1})},404:function(e,t,r){"use strict";var n=r(403);r.n(n).a},405:function(e,t,r){(e.exports=r(71)(!1)).push([e.i,"@-webkit-keyframes v-pulseStretchDelay{0%,80%{-webkit-transform:scale(1);transform:scale(1);-webkit-opacity:1;opacity:1}45%{-webkit-transform:scale(.1);transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{-webkit-transform:scale(1);transform:scale(1);-webkit-opacity:1;opacity:1}45%{-webkit-transform:scale(.1);transform:scale(.1);-webkit-opacity:.7;opacity:.7}}",""])},406:function(e,t,r){"use strict";var n={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},o=(r(404),r(30)),component=Object(o.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"v-spinner"},[t("div",{staticClass:"v-pulse v-pulse1",style:[this.spinnerStyle,this.spinnerDelay1]}),t("div",{staticClass:"v-pulse v-pulse2",style:[this.spinnerStyle,this.spinnerDelay2]}),t("div",{staticClass:"v-pulse v-pulse3",style:[this.spinnerStyle,this.spinnerDelay3]})])},[],!1,null,null,null);t.a=component.exports},420:function(e,t,r){var content=r(457);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(72).default)("5ec269cc",content,!0,{sourceMap:!1})},454:function(e,t,r){"use strict";var n=r(23),o=r(7),l=r(39),c=r(173),m=r(174),d=r(22),f=r(455),h=r(175);o(o.S+o.F*!r(110)(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,o,v,y=l(e),_="function"==typeof this?this:Array,w=arguments.length,x=w>1?arguments[1]:void 0,T=void 0!==x,k=0,S=h(y);if(T&&(x=n(x,w>2?arguments[2]:void 0,2)),null==S||_==Array&&m(S))for(r=new _(t=d(y.length));t>k;k++)f(r,k,T?x(y[k],k):y[k]);else for(v=S.call(y),r=new _;!(o=v.next()).done;k++)f(r,k,T?c(v,x,[o.value,k],!0):o.value);return r.length=k,r}})},455:function(e,t,r){"use strict";var n=r(13),o=r(51);e.exports=function(object,e,t){e in object?n.f(object,e,o(0,t)):object[e]=t}},456:function(e,t,r){"use strict";var n=r(420);r.n(n).a},457:function(e,t,r){(e.exports=r(71)(!1)).push([e.i,'.Team .title{text-transform:none;margin-bottom:0;z-index:-1;display:flex;justify-content:center;flex-direction:column;align-items:center}.Team .title:before{content:"Team";font-family:serif;font-family:initial;color:hsla(0,0%,100%,.6);font-size:1rem;line-height:.2rem;text-align:center;left:0;right:0;bottom:calc(100% - .3rem)}.Team .score{font-size:2rem}.Team .members-head,.Team .score{text-align:center;font-family:Roboto}.Team .members-head{font-size:1.2rem;margin-top:2rem}.Team .members{display:flex;flex-wrap:wrap;width:100%;max-width:30rem;margin:0 auto;justify-content:center}.Team .member{font-size:1.5rem;margin:0 .5rem}.Team table{max-width:1000px;margin-top:4rem}.Team thead{font-size:1.4rem}.Team tbody{font-size:1.2rem}',""])},475:function(e,t,r){"use strict";r.r(t);r(31);var n=r(107),o=(r(112),r(454),r(36)),l=(r(12),r(2)),c=r(4),m=(r(17),r(16),r(32),r(183),r(38)),d=r(406),f=new Intl.PluralRules("en-US",{type:"ordinal"}),h=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]),v={components:{PulseLoader:d.a},computed:Object(c.a)({team:function(e){return this.teams.get(parseInt(this.$route.params.id))||{}},score:function(e){return this.$store.getters["scoreboard/getScore"](parseInt(this.$route.params.id))||{}}},Object(m.c)({isLoggedIn:"isLoggedIn",teams:function(e){return e.teams.teams}}),Object(m.b)({getUser:"users/getUser"})),asyncData:function(){var e=Object(l.a)(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.store.dispatch("teams/getTeam",Object(c.a)({},t,{id:t.route.params.id})),t.store.dispatch("scoreboard/updateScoreboard",t)]);case 2:r=e.sent,n=Object(o.a)(r,1),null===n[0]&&t.error({statusCode:404,message:"Team not found"});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),mounted:function(){this.isLoggedIn||this.$router.push({path:"/login"});var e=Array.from(new Set([].concat(Object(n.a)(this.team.solves.map(function(e){return e.user})),Object(n.a)(this.team.members))));this.$store.dispatch("users/getUsers",{$axios:this.$axios,ids:e})},methods:{formatOrdinals:function(e){if(e===1/0)return"---";var t=f.select(e),r=h.get(t);return"".concat(e).concat(r)}},head:function(){return{title:"Team ".concat(this.team&&this.team.name," - TSG CTF")}}},y=(r(456),r(30)),component=Object(y.a)(v,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"Team"},[r("h2",{staticClass:"title"},[r("span",[e._v(e._s(e.team.name))])]),e._v(" "),r("div",{staticClass:"score"},[e._v(e._s(e.formatOrdinals(e.score.pos))+" "+e._s(e.score.score)+"pts")]),e._v(" "),r("div",{staticClass:"members-head"},[e._v("Members")]),e._v(" "),r("div",{staticClass:"members"},e._l(e.team.members,function(t){return r("div",{key:t,staticClass:"member"},[e.getUser(t)?r("span",[e._v(e._s(e.getUser(t).name))]):r("pulse-loader",{attrs:{color:"white",size:"10px"}})],1)}),0),e._v(" "),r("table",{staticClass:"scoreboard"},[e._m(0),e._v(" "),r("tbody",e._l(e.team.solves,function(t){return r("tr",{key:t.challenge_id},[r("td",[r("b",[e._v(e._s(t.challenge.name))])]),e._v(" "),r("td",[e._v(e._s(t.challenge.category))]),e._v(" "),r("td",[e._v(e._s(t.challenge.value))]),e._v(" "),r("td",[e.getUser(t.user)?r("span",[e._v("\n\t\t\t\t\t\t"+e._s(e.getUser(t.user).name)+"\n\t\t\t\t\t")]):r("pulse-loader",{attrs:{color:"white",size:"10px"}})],1),e._v(" "),r("td",[r("timeago",{attrs:{datetime:t.date,"auto-update":60}})],1)])}),0)])])},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("td",{attrs:{scope:"col"}},[r("b",[e._v("Challenge")])]),e._v(" "),r("td",{attrs:{scope:"col"}},[r("b",[e._v("Category")])]),e._v(" "),r("td",{attrs:{scope:"col"}},[r("b",[e._v("Value")])]),e._v(" "),r("td",{attrs:{scope:"col"}},[r("b",[e._v("Solver")])]),e._v(" "),r("td",{attrs:{scope:"col"}},[r("b",[e._v("Time")])])])])}],!1,null,null,null);t.default=component.exports}}]);