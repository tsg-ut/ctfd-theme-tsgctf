(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(t,e,n){t.exports=n.p+"img/ojigineko-white.02b1a9a.gif"},133:function(t,e,n){"use strict";e.a=function(t){var e=t.$axios,n=t.store,r=t.env;e.onRequest((function(t){void 0!==n.state.csrfToken&&(t.headers.common["csrf-token"]=n.state.csrfToken),n.state.isStatic&&(t.headers.common.cookie="session=".concat(r.session))}))}},134:function(t,e,n){"use strict";var r=n(1),o=n(208);r.default.use(o.a,{locale:"en"})},135:function(t,e,n){"use strict";(function(t){e.a=function(e,n){e.app.isStatic="true"===t.env.NUXT_ENV_STATIC}}).call(this,n(82))},136:function(t,e,n){"use strict";n(15),n(9),n(12),n(21),n(22);var r=n(4),o=n(29);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={props:{to:{required:!0,type:String}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["isStatic"]))},d=l,f=n(37),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isStatic?n("a",{attrs:{href:t.to}},[t._t("default")],2):n("nuxt-link",{attrs:{to:t.to}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},164:function(t,e,n){var content=n(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("757226ae",content,!0,{sourceMap:!1})},212:function(t,e,n){"use strict";var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[r("p",{staticClass:"sponsor-line"},[t._v("\n\t\t\tSponsored by\n\t\t\t"),r("a",{attrs:{href:"https://flatt.tech/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{staticClass:"flatt",attrs:{src:n(251),alt:"flatt Security"}})]),t._v(" "),r("a",{attrs:{href:"https://jpninfo.com/4905",target:"_blank",rel:"noopener noreferrer"}},[r("img",{staticClass:"ojigineko",attrs:{src:n(114),alt:"ojigineko"}})])]),t._v(" "),r("p",{staticClass:"sponsor-line"},[t._v("\n\t\t\tInfra Sponsored by "),r("a",{attrs:{href:"https://g.co/cloud",target:"_blank",rel:"noopener noreferrer"}},[t._v("g.co/cloud")]),t._v(" "),r("a",{attrs:{href:"https://g.co/cloud",target:"_blank",rel:"noopener noreferrer"}},[r("img",{staticClass:"google-cloud",attrs:{src:n(252),alt:"flatt Security"}})]),t._v(" "),r("a",{attrs:{href:"https://jpninfo.com/4905",target:"_blank",rel:"noopener noreferrer"}},[r("img",{staticClass:"ojigineko",attrs:{src:n(114),alt:"ojigineko"}})])]),t._v(" "),r("p",[t._v("Organized by "),r("a",{attrs:{href:"https://tsg.ne.jp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TSG")]),t._v(", a student team from The University of Tokyo")]),t._v(" "),r("p",[t._v("Powered by "),r("a",{attrs:{href:"https://ctfd.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CTFd")])])])}],o=(n(15),n(9),n(12),n(21),n(22),n(4)),c=(n(63),n(50),n(136)),l=n(29),d=n(204);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={components:{IsoLink:c.a},directives:{onClickaway:d.directive},data:function(){return{isDropping:!1,isMobile:!1}},head:function(){return{title:"TSG CTF"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)(["isStatic","isLoggedIn","isInTeam","team","user"])),mounted:function(){var t=this;window.innerWidth<=900&&(this.isMobile=!0),window.addEventListener("resize",(function(){window.innerWidth<=900?t.isMobile=!0:t.isMobile=!1}));var e=setInterval((function(){void 0!==window.chatwootSDK&&(window.chatwootSDK.run({websiteToken:"5pb6Q4vimR97abVRSqSWJJvH",baseUrl:"https://app.chatwoot.com"}),clearInterval(e))}),1e3);this.$OneSignal.isPushNotificationsEnabled().then((function(e){t.$store.commit("setIsPushEnabled",e)})),void 0!==globalThis.OneSignal&&globalThis.OneSignal.getNotificationPermission().then((function(e){"granted"===e&&t.$store.commit("setIsPushEnabled",!0)})),navigator.language.includes("ja")&&this.$store.commit("setLanguage","ja")},methods:{onClickaway:function(){this.isDropping=!1},onClickDropdown:function(t){"A"===t.target.tagName&&(this.isDropping=!1)},logout:function(t){t.preventDefault(),location.href="/logout"}}},h=m,v=(n(253),n(37)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[n("iso-link",{attrs:{to:"/"}},[t._v("TSG CTF 2021")])],1),t._v(" "),n("div",{staticClass:"spacer"}),t._v(" "),t.isLoggedIn?n("div",[t.isMobile?n("div",{staticClass:"menu"},[n("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.onClickaway,expression:"onClickaway"}],staticClass:"menu-item dropdown"},[n("div",{staticClass:"dropdown-trigger",on:{click:function(e){t.isDropping=!t.isDropping}}},[n("div",{staticClass:"teamname"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.team&&t.team.name)+"\n\t\t\t\t\t\t")])]),t._v(" "),t.isDropping?n("div",{staticClass:"dropdown-menu",on:{click:t.onClickDropdown}},[n("iso-link",{staticClass:"dropdown-menu-item",attrs:{to:"/notifications"}},[t._v("Notifications")]),t._v(" "),n("iso-link",{staticClass:"dropdown-menu-item",attrs:{to:"/about"}},[t._v("About")]),t._v(" "),n("iso-link",{staticClass:"dropdown-menu-item",attrs:{to:"/rules"}},[t._v("Rules")]),t._v(" "),n("iso-link",{staticClass:"dropdown-menu-item",attrs:{to:"/scoreboard"}},[t._v("Scoreboard")]),t._v(" "),n("iso-link",{staticClass:"dropdown-menu-item",attrs:{to:"/challenges"}},[t._v("Challenges")]),t._v(" "),t.isStatic?t._e():n("iso-link",{staticClass:"dropdown-menu-item",attrs:{to:t.isInTeam?"/teams/"+(t.team&&t.team.id):"/team"}},[t._v("\n\t\t\t\t\t\t\tTeam\n\t\t\t\t\t\t")]),t._v(" "),t.isStatic?t._e():n("iso-link",{staticClass:"dropdown-menu-item",attrs:{to:"/settings"}},[t._v("\n\t\t\t\t\t\t\tSettings\n\t\t\t\t\t\t")]),t._v(" "),t.isStatic?t._e():n("a",{staticClass:"dropdown-menu-item",attrs:{href:"/logout"},on:{click:t.logout}},[t._v("\n\t\t\t\t\t\t\tLogout\n\t\t\t\t\t\t")])],1):t._e()])]):n("div",{staticClass:"menu"},[n("div",{staticClass:"menu-item"},[n("iso-link",{attrs:{to:"/notifications"}},[t._v("Notifications")])],1),t._v(" "),n("div",{staticClass:"menu-item"},[n("iso-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("div",{staticClass:"menu-item"},[n("iso-link",{attrs:{to:"/rules"}},[t._v("Rules")])],1),t._v(" "),n("div",{staticClass:"menu-item"},[n("iso-link",{attrs:{to:"/scoreboard"}},[t._v("Scoreboard")])],1),t._v(" "),n("div",{staticClass:"menu-item"},[n("iso-link",{attrs:{to:"/challenges"}},[t._v("Challenges")])],1),t._v(" "),t.isStatic?t._e():n("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.onClickaway,expression:"onClickaway"}],staticClass:"menu-item dropdown"},[n("div",{staticClass:"dropdown-trigger",on:{click:function(e){t.isDropping=!t.isDropping}}},[n("div",{staticClass:"teamname"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.team&&t.team.name)+"\n\t\t\t\t\t\t")])]),t._v(" "),t.isDropping?n("div",{staticClass:"dropdown-menu",on:{click:t.onClickDropdown}},[n("iso-link",{staticClass:"dropdown-menu-item",attrs:{to:t.isInTeam?"/teams/"+(t.team&&t.team.id):"/team"}},[t._v("Team")]),t._v(" "),n("iso-link",{staticClass:"dropdown-menu-item",attrs:{to:"/settings"}},[t._v("Settings")]),t._v(" "),n("a",{staticClass:"dropdown-menu-item",attrs:{href:"/logout"},on:{click:t.logout}},[t._v("Logout")])],1):t._e()])])]):n("div",[t.isMobile?n("div",{staticClass:"menu"},[n("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.onClickaway,expression:"onClickaway"}],staticClass:"menu-item dropdown"},[n("div",{staticClass:"dropdown-trigger",on:{click:function(e){t.isDropping=!t.isDropping}}},[n("div",{staticClass:"teamname"},[t._v("\n\t\t\t\t\t\t\tMenu\n\t\t\t\t\t\t")])]),t._v(" "),t.isDropping?n("div",{staticClass:"dropdown-menu",on:{click:t.onClickDropdown}},[n("iso-link",{staticClass:"dropdown-menu-item",attrs:{to:"/about"}},[t._v("About")]),t._v(" "),n("iso-link",{staticClass:"dropdown-menu-item",attrs:{to:"/rules"}},[t._v("Rules")]),t._v(" "),n("iso-link",{staticClass:"dropdown-menu-item",attrs:{to:"/scoreboard"}},[t._v("Scoreboard")]),t._v(" "),n("iso-link",{staticClass:"dropdown-menu-item",attrs:{to:"/login"}},[t._v("Login")]),t._v(" "),n("iso-link",{staticClass:"dropdown-menu-item",attrs:{to:"/register"}},[t._v("Register")])],1):t._e()])]):n("div",{staticClass:"menu"},[n("div",{staticClass:"menu-item"},[n("iso-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("div",{staticClass:"menu-item"},[n("iso-link",{attrs:{to:"/rules"}},[t._v("Rules")])],1),t._v(" "),n("div",{staticClass:"menu-item"},[n("iso-link",{attrs:{to:"/scoreboard"}},[t._v("Scoreboard")])],1),t._v(" "),n("div",{staticClass:"menu-item"},[n("iso-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),n("div",{staticClass:"menu-item"},[n("iso-link",{attrs:{to:"/register"}},[t._v("Register")])],1)])])]),t._v(" "),n("div",{staticClass:"root-content"},[n("nuxt")],1),t._v(" "),t._m(0)])}),r,!1,null,null,null);e.a=component.exports},219:function(t,e,n){t.exports=n(220)},251:function(t,e,n){t.exports=n.p+"img/flatt.087e207.png"},252:function(t,e,n){t.exports=n.p+"img/google-cloud.a99e48f.png"},253:function(t,e,n){"use strict";n(164)},254:function(t,e,n){var r=n(92),o=n(217),c=n(255),l=n(114),d=r(!1),f=o(c),m=o(l);d.push([t.i,'@font-face{font-family:"Fredoka One";font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/fredokaone/v8/k3kUo8kEI-tA1RRcTZGmTlHGCaI.ttf) format("truetype")}@font-face{font-family:"Roboto";font-style:normal;font-weight:100;src:url(https://fonts.gstatic.com/s/roboto/v29/KFOkCnqEu92Fr1MmgVxIIzc.ttf) format("truetype")}html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;background-image:url('+f+'),radial-gradient(circle,#061b07 0,#131404 100%);background-color:#130414;background-size:cover;background-position:50%;background-attachment:fixed;color:#fff;height:100vh;overflow:auto}body{min-height:100vh}a{text-decoration:none;color:inherit}input[type=email],input[type=password],input[type=text],input[type=url],select{border:0;outline:0;border-radius:9999px;padding:0 1rem;font-family:"Roboto",sans-serif;font-size:1.4rem;font-weight:700;height:1.7em}input[type=checkbox]{display:none}input[type=checkbox]+label{position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-left:1.2rem}input[type=checkbox]+label:before{content:"";display:block;width:.8rem;height:.8rem;left:0;top:.3rem;border:1px solid #fff;position:absolute;opacity:.8;transition:all .07s}input[type=checkbox]:checked+label:before{width:8px;top:-.2rem;left:.2rem;border-top-color:transparent;border-left-color:transparent;transform:translateY(5px) rotate(45deg)}button{border:0;color:inherit;cursor:pointer}.button-style,button[type=submit]{width:6rem;height:2.5rem;border-radius:9999px;font-size:1.5rem;font-family:"Fredoka One",cursive;font-weight:300;background:linear-gradient(90deg,#3e91a6,#5e0fa9)}table{width:100%;max-width:800px;margin:0 auto;font-size:1.5rem;border-collapse:collapse}table a{color:#90cbff}tbody td{font-family:"Roboto"}tr{height:3rem}tbody tr{border-top:1px solid hsla(0,0%,100%,.7)}hr{margin:5rem auto;height:3px;width:20rem;background:#fff;border:none;border-radius:9999px;opacity:.5}*,:after,:before{box-sizing:border-box;margin:0}.header{width:100%;height:4rem;line-height:4rem;position:fixed;display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg,rgba(0,0,0,.8),rgba(0,0,0,.3) 70%,transparent);color:hsla(0,0%,100%,.8);z-index:1}.header .title{font-family:"Fredoka One",cursive;font-weight:300;font-size:2rem;display:block;letter-spacing:1px;margin-left:1rem;white-space:nowrap}.header .spacer{flex:1 1 0}.header .menu{display:flex;font-family:"Roboto",sans-serif;font-size:1.2rem;margin-right:1rem;text-transform:uppercase}.header .menu-item{margin:0 .5rem}.header .dropdown{position:relative}.header .dropdown-trigger{display:flex;align-items:center;height:100%;cursor:pointer}.header .dropdown-trigger:after{content:"";display:inline-block;width:0;height:0;margin-left:.5rem;border-top:6px solid #fff;border-left:6px solid transparent;border-right:6px solid transparent;vertical-align:middle}.header .teamname{text-transform:none;max-width:10rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right}.header .team-score{font-family:"Fredoka One",cursive;font-weight:300}.header .dropdown-menu{z-index:1;position:absolute;top:calc(100% - .5rem);right:0;background:#520514;line-height:3rem;display:flex;flex-direction:column;box-shadow:0 0 5px #000}.header .dropdown-menu-item{height:3rem;padding:0 1rem}.header .dropdown-menu-item:hover{background:hsla(0,0%,100%,.2)}.root-content{padding:4rem 1rem 0;min-height:calc(100vh - 13rem)}section>h2.title{font-size:4rem;font-family:"Fredoka One",cursive;font-weight:300;text-align:center;text-transform:uppercase;letter-spacing:1px;margin-top:3rem;margin-bottom:1rem;word-break:break-word}section>h2.title span{color:#0096fa;-webkit-text-fill-color:transparent;background:linear-gradient(90deg,#47e543,#fcff44);-webkit-background-clip:text;background-clip:text;font-weight:500}.footer{text-align:center;margin-top:5rem;padding-bottom:1rem;color:hsla(0,0%,100%,.8);line-height:1.2rem}.footer:before{content:"";display:inline-block;width:8rem;height:1px;background:#fff;margin-bottom:1.2rem}.footer a{color:#90cbff}.footer .sponsor-line{line-height:3rem}.footer .sponsor-line:before{content:"";display:inline-block;width:1rem;height:1rem}.footer .flatt{vertical-align:middle;width:18rem}.footer .google-cloud{vertical-align:middle;width:2rem}.footer .ojigineko{background:url('+m+");background-size:cover;display:inline-block;width:1rem;height:1rem;opacity:0;vertical-align:-28%;transition:opacity .2s}.footer .sponsor-line:hover .ojigineko{opacity:.3}.table-wrap{overflow-x:auto}",""]),t.exports=d},255:function(t,e,n){t.exports=n.p+"img/background.a0e74fb.svg"},256:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"state",(function(){return m})),n.d(e,"getters",(function(){return h})),n.d(e,"mutations",(function(){return v})),n.d(e,"actions",(function(){return w}));n(9),n(12),n(21),n(22);var r=n(2),o=n(4),c=(n(13),n(55),n(17),n(7),n(18),n(24),n(15),n(42)),l=n.n(c);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=function(){return{configs:[],csrfToken:void 0,isLoggedIn:!0,isInTeam:!0,isStarted:!0,isEnded:!1,isVerified:!0,isStatic:null,isPushEnabled:!1,user:{},team:{},rules:"",language:"en",countries:[["AF","Afghanistan"],["AX","Åland Islands"],["AL","Albania"],["DZ","Algeria"],["AS","American Samoa"],["AD","Andorra"],["AO","Angola"],["AI","Anguilla"],["AQ","Antarctica"],["AG","Antigua & Barbuda"],["AR","Argentina"],["AM","Armenia"],["AW","Aruba"],["AC","Ascension Island"],["AU","Australia"],["AT","Austria"],["AZ","Azerbaijan"],["BS","Bahamas"],["BH","Bahrain"],["BD","Bangladesh"],["BB","Barbados"],["BY","Belarus"],["BE","Belgium"],["BZ","Belize"],["BJ","Benin"],["BM","Bermuda"],["BT","Bhutan"],["BO","Bolivia"],["BA","Bosnia & Herzegovina"],["BW","Botswana"],["BR","Brazil"],["IO","British Indian Ocean Territory"],["VG","British Virgin Islands"],["BN","Brunei"],["BG","Bulgaria"],["BF","Burkina Faso"],["BI","Burundi"],["KH","Cambodia"],["CM","Cameroon"],["CA","Canada"],["IC","Canary Islands"],["CV","Cape Verde"],["BQ","Caribbean Netherlands"],["KY","Cayman Islands"],["CF","Central African Republic"],["EA","Ceuta & Melilla"],["TD","Chad"],["CL","Chile"],["CN","China"],["CX","Christmas Island"],["CC","Cocos [Keeling] Islands"],["CO","Colombia"],["KM","Comoros"],["CG","Congo - Brazzaville"],["CD","Congo - Kinshasa"],["CK","Cook Islands"],["CR","Costa Rica"],["CI","Côte d’Ivoire"],["HR","Croatia"],["CU","Cuba"],["CW","Curaçao"],["CY","Cyprus"],["CZ","Czechia"],["DK","Denmark"],["DG","Diego Garcia"],["DJ","Djibouti"],["DM","Dominica"],["DO","Dominican Republic"],["EC","Ecuador"],["EG","Egypt"],["SV","El Salvador"],["GQ","Equatorial Guinea"],["ER","Eritrea"],["EE","Estonia"],["ET","Ethiopia"],["EZ","Eurozone"],["FK","Falkland Islands"],["FO","Faroe Islands"],["FJ","Fiji"],["FI","Finland"],["FR","France"],["GF","French Guiana"],["PF","French Polynesia"],["TF","French Southern Territories"],["GA","Gabon"],["GM","Gambia"],["GE","Georgia"],["DE","Germany"],["GH","Ghana"],["GI","Gibraltar"],["GR","Greece"],["GL","Greenland"],["GD","Grenada"],["GP","Guadeloupe"],["GU","Guam"],["GT","Guatemala"],["GG","Guernsey"],["GN","Guinea"],["GW","Guinea-Bissau"],["GY","Guyana"],["HT","Haiti"],["HN","Honduras"],["HK","Hong Kong SAR China"],["HU","Hungary"],["IS","Iceland"],["IN","India"],["ID","Indonesia"],["IR","Iran"],["IQ","Iraq"],["IE","Ireland"],["IM","Isle of Man"],["IL","Israel"],["IT","Italy"],["JM","Jamaica"],["JP","Japan"],["JE","Jersey"],["JO","Jordan"],["KZ","Kazakhstan"],["KE","Kenya"],["KI","Kiribati"],["XK","Kosovo"],["KW","Kuwait"],["KG","Kyrgyzstan"],["LA","Laos"],["LV","Latvia"],["LB","Lebanon"],["LS","Lesotho"],["LR","Liberia"],["LY","Libya"],["LI","Liechtenstein"],["LT","Lithuania"],["LU","Luxembourg"],["MO","Macau SAR China"],["MK","Macedonia"],["MG","Madagascar"],["MW","Malawi"],["MY","Malaysia"],["MV","Maldives"],["ML","Mali"],["MT","Malta"],["MH","Marshall Islands"],["MQ","Martinique"],["MR","Mauritania"],["MU","Mauritius"],["YT","Mayotte"],["MX","Mexico"],["FM","Micronesia"],["MD","Moldova"],["MC","Monaco"],["MN","Mongolia"],["ME","Montenegro"],["MS","Montserrat"],["MA","Morocco"],["MZ","Mozambique"],["MM","Myanmar [Burma]"],["NA","Namibia"],["NR","Nauru"],["NP","Nepal"],["NL","Netherlands"],["NC","New Caledonia"],["NZ","New Zealand"],["NI","Nicaragua"],["NE","Niger"],["NG","Nigeria"],["NU","Niue"],["NF","Norfolk Island"],["KP","North Korea"],["MP","Northern Mariana Islands"],["NO","Norway"],["OM","Oman"],["PK","Pakistan"],["PW","Palau"],["PS","Palestinian Territories"],["PA","Panama"],["PG","Papua New Guinea"],["PY","Paraguay"],["PE","Peru"],["PH","Philippines"],["PN","Pitcairn Islands"],["PL","Poland"],["PT","Portugal"],["PR","Puerto Rico"],["QA","Qatar"],["RE","Réunion"],["RO","Romania"],["RU","Russia"],["RW","Rwanda"],["WS","Samoa"],["SM","San Marino"],["ST","São Tomé & Príncipe"],["SA","Saudi Arabia"],["SN","Senegal"],["RS","Serbia"],["SC","Seychelles"],["SL","Sierra Leone"],["SG","Singapore"],["SX","Sint Maarten"],["SK","Slovakia"],["SI","Slovenia"],["SB","Solomon Islands"],["SO","Somalia"],["ZA","South Africa"],["GS","South Georgia & South Sandwich Islands"],["KR","South Korea"],["SS","South Sudan"],["ES","Spain"],["LK","Sri Lanka"],["BL","St. Barthélemy"],["SH","St. Helena"],["KN","St. Kitts & Nevis"],["LC","St. Lucia"],["MF","St. Martin"],["PM","St. Pierre & Miquelon"],["VC","St. Vincent & Grenadines"],["SD","Sudan"],["SR","Suriname"],["SJ","Svalbard & Jan Mayen"],["SZ","Swaziland"],["SE","Sweden"],["CH","Switzerland"],["SY","Syria"],["TW","Taiwan"],["TJ","Tajikistan"],["TZ","Tanzania"],["TH","Thailand"],["TL","Timor-Leste"],["TG","Togo"],["TK","Tokelau"],["TO","Tonga"],["TT","Trinidad & Tobago"],["TA","Tristan da Cunha"],["TN","Tunisia"],["TR","Turkey"],["TM","Turkmenistan"],["TC","Turks & Caicos Islands"],["TV","Tuvalu"],["UM","U.S. Outlying Islands"],["VI","U.S. Virgin Islands"],["UG","Uganda"],["UA","Ukraine"],["AE","United Arab Emirates"],["GB","United Kingdom"],["US","United States"],["UY","Uruguay"],["UZ","Uzbekistan"],["VU","Vanuatu"],["VA","Vatican City"],["VE","Venezuela"],["VN","Vietnam"],["WF","Wallis & Futuna"],["EH","Western Sahara"],["YE","Yemen"],["ZM","Zambia"],["ZW","Zimbabwe"]]}},h={ctfName:function(t){var e=t.configs;return l()(e.find((function(t){return"ctf_name"===t.key})),["value"],"")}},v={setConfigs:function(s,t){s.configs=t},setIsLoggedIn:function(s,t){s.isLoggedIn=t},setIsInTeam:function(s,t){s.isInTeam=t},setIsStarted:function(s,t){s.isStarted=t},setIsEnded:function(s,t){s.isEnded=t},setIsVerified:function(s,t){s.isVerified=t},setIsStatic:function(s,t){s.isStatic=t},setRules:function(s,t){s.rules=t},setCsrfToken:function(s,t){s.csrfToken=t},setUser:function(s,t){s.user=f(f({},s.user),t)},setTeam:function(s,t){s.team=f(f({},s.team),t)},setLanguage:function(s,t){s.language=t},setIsPushEnabled:function(s,t){s.isPushEnabled=t}},w={nuxtServerInit:function(e){(0,e.commit)("setIsStatic","true"===t.env.NUXT_ENV_STATIC)},nuxtClientInit:function(e,n){return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.dispatch,(0,e.commit)("setIsStatic","true"===t.env.NUXT_ENV_STATIC),r.next=4,Promise.all([o("updateUser",n),o("updateTeam",n),o("updateDates",n),o("updateCsrfToken",n),o("notifications/updateNotifications",n)]);case 4:case"end":return r.stop()}}),r)})))()},updateConfigs:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,o=e.$axios,n.next=4,o.get("/api/v1/configs");case 4:c=n.sent,data=c.data,"application/json"===c.headers["content-type"]?r("setConfigs",data.data.map((function(t){return{key:t.key,value:t.value}}))):r("setIsLoggedIn",!1,{root:!0});case 8:case"end":return n.stop()}}),n)})))()},updateUser:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,o=e.$axios,n.next=4,o.get("/api/v1/users/me");case 4:c=n.sent,data=c.data,"application/json"===c.headers["content-type"]?r("setUser",data.data):r("setIsLoggedIn",!1,{root:!0});case 8:case"end":return n.stop()}}),n)})))()},updateTeam:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,o=e.$axios,n.next=4,o.get("/api/v1/teams/me");case 4:c=n.sent,data=c.data,"application/json"===c.headers["content-type"]?0===Object.keys(data.data).length?r("setIsInTeam",!1,{root:!0}):r("setTeam",data.data):r("setIsInTeam",!1,{root:!0});case 8:case"end":return n.stop()}}),n)})))()},updateDates:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,o=e.$axios,n.next=4,o.get("/api/v1/dates");case 4:c=n.sent,data=c.data,"application/json"===c.headers["content-type"]?(r("setIsStarted",data.data.is_started),r("setIsEnded",data.data.is_ended),r("setIsVerified",data.data.is_verified)):r("setIsLoggedIn",!1,{root:!0});case 8:case"end":return n.stop()}}),n)})))()},updateRules:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,o=e.$axios,n.next=4,o.get("/api/v1/rules");case 4:c=n.sent,data=c.data,"application/json"===c.headers["content-type"]&&r("setRules",data.data.content);case 8:case"end":return n.stop()}}),n)})))()},updateCsrfToken:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,s,o,data,meta,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.commit,s=t.state,e.$axios,!s.isStatic){n.next=4;break}return n.abrupt("return");case 4:n.next=12;break;case 7:o=n.sent,(data=o.data).nonce&&r("setCsrfToken",data.nonce),n.next=14;break;case 12:(meta=document.querySelector("meta[name=csrf-token]"))&&(c=meta.getAttribute("content"),r("setCsrfToken",c));case 14:case"end":return n.stop()}}),n)})))()}}}.call(this,n(82))},286:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return k})),n.d(e,"getters",(function(){return O})),n.d(e,"mutations",(function(){return S})),n.d(e,"actions",(function(){return C}));n(15),n(9),n(12),n(21),n(22);var r=n(2),o=n(4),c=n(10),l=(n(13),n(24),n(159),n(27),n(55),n(287),n(17),n(7),n(18),n(63),n(50),n(1)),d=n(42),f=n.n(d),m=n(205),h=n.n(m);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=["cooldown","warmup","pwn","rev","web","crypto","stego"],k=function(){return{challenges:[]}},O={getChallenges:function(s){return s.challenges},getCategories:function(s,g){return Object.entries(h()(g.getChallenges,(function(t){return t.category}))).map((function(t){var e=Object(c.a)(t,2);return{name:e[0],challenges:e[1].sort((function(a,b){return a.value-b.value}))}})).sort((function(a,b){var t=y.indexOf(a.name.toLowerCase()),e=y.indexOf(b.name.toLowerCase());return(-1===t?9999:t)-(-1===e?9999:e)}))}},S={setChallenges:function(s,t){var e=s.challenges||[];s.challenges=t.map((function(t){var n=e.find((function(e){return e.id===t.id}));if(!n)return t;for(var r=0,o=Object.entries(t);r<o.length;r++){var d=Object(c.a)(o[r],2),f=d[0],m=d[1];l.default.set(n,f,m)}return n}))},setChallengeDetail:function(s,t){var e=t.id,data=t.data,n=s.challenges.findIndex((function(t){return t.id===e}));l.default.set(s.challenges,n,w(w({},s.challenges[n]),{},{details:data}))}},C={updateChallenges:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,l,d,data,m,h,v,w;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,o=t.dispatch,c=t.rootState,l=e.$axios,n.prev=2,n.next=5,l.get("/api/v1/challenges");case 5:if(d=n.sent,data=d.data,m=d.headers,h=d.request,"application/json"!==m["content-type"]){n.next=17;break}if(r("setIsStarted",!0,{root:!0}),r("setChallenges",data.data),!c.isStatic){n.next=15;break}return n.next=15,Promise.all(data.data.map((function(t){var e=t.id;return o("getDetail",{$axios:l,id:e})})));case 15:n.next=20;break;case 17:return"/team"===(v=new URL(h.responseURL)).pathname?r("setIsInTeam",!1,{root:!0}):"/confirm"===v.pathname?r("setIsVerified",!1,{root:!0}):r("setIsLoggedIn",!1,{root:!0}),n.abrupt("return");case 20:n.next=26;break;case 22:n.prev=22,n.t0=n.catch(2),(w=f()(n.t0,["response","data","message"],"")).includes("not started")?r("setIsStarted",!1,{root:!0}):w.includes("has ended")?r("setIsEnded",!0,{root:!0}):r("setIsInTeam",!1,{root:!0});case 26:case"end":return n.stop()}}),n,null,[[2,22]])})))()},getDetail:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,l,data,d,f,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,o=e.$axios,c=e.id,n.next=4,o.get("/api/v1/challenges/".concat(c));case 4:l=n.sent,data=l.data,d=l.headers,f=l.request,"application/json"===d["content-type"]?r("setChallengeDetail",{id:c,data:data.data}):"/team"===(m=new URL(f.responseURL)).pathname?r("setIsInTeam",!1,{root:!0}):"/confirm"===m.pathname?r("setIsVerified",!1,{root:!0}):r("setIsLoggedIn",!1,{root:!0});case 9:case"end":return n.stop()}}),n)})))()}}},347:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return d})),n.d(e,"getters",(function(){return f})),n.d(e,"mutations",(function(){return m})),n.d(e,"actions",(function(){return h}));var r=n(2),o=n(4);n(13),n(24),n(32),n(15),n(9),n(12),n(21),n(22);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=function(){return{notifications:[]}},f={getNotifications:function(s){return s.notifications.slice().sort((function(a,b){return b.id-a.id})).map((function(t){return l(l({},t),{},{date:new Date(t.date)})}))}},m={setNotifications:function(s,t){s.notifications=t}},h={updateNotifications:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,o=e.$axios,n.next=4,o.get("/api/v1/notifications");case 4:c=n.sent,data=c.data,"application/json"===c.headers["content-type"]?r("setNotifications",data.data):r("setIsLoggedIn",!1,{root:!0});case 8:case"end":return n.stop()}}),n)})))()}}},348:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return v})),n.d(e,"getters",(function(){return w})),n.d(e,"mutations",(function(){return y})),n.d(e,"actions",(function(){return k}));n(15),n(9),n(21),n(22);var r=n(2),o=n(4),c=n(43),l=(n(13),n(55),n(140),n(17),n(7),n(18),n(24),n(12),n(182),n(27),n(42)),d=n.n(l);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=new(n(211).a),v=function(){return{scoreboard:[],teams:[]}},w={getScore:function(s){return function(t){return s.scoreboard.find((function(e){return e.account_id===t}))||{score:0,pos:s.scoreboard.length+1}}},getScoreboard:function(s){var t=new Set(s.scoreboard.map((function(t){return t.account_id}))),e=s.teams.filter((function(e){var n=e.id;return!t.has(n)})),n=new Map(s.teams.map((function(t){return[t.id,t]})));return[].concat(Object(c.a)(s.scoreboard.map((function(t){return m(m({},t),{},{country:n.has(t.account_id)?n.get(t.account_id).country:null})}))),Object(c.a)(e.map((function(t){return{name:t.name,account_id:t.id,country:t.country,pos:s.scoreboard.length+1,oauth_id:t.oauth_id,score:0}}))))}},y={setScoreboard:function(s,t){s.scoreboard=t},setTeams:function(s,t){s.teams=t},pushTeams:function(s,t){var e;(e=s.teams).push.apply(e,Object(c.a)(t))},clearTeams:function(s){s.teams=[]}},k={update:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.dispatch,o=e.$axios,n.next=4,Promise.all([r("updateScoreboard",{$axios:o}),r("updateTeams",{$axios:o})]);case 4:case"end":return n.stop()}}),n)})))()},updateScoreboard:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,o=e.$axios,n.next=4,o.get("/api/v1/scoreboard");case 4:c=n.sent,data=c.data,"application/json"===c.headers["content-type"]?r("setScoreboard",data.data):r("setIsLoggedIn",!1,{root:!0});case 8:case"end":return n.stop()}}),n)})))()},updateTeams:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var o,s,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.commit,s=t.state,l=e.$axios,n.next=4,h.runExclusive(Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,f,data,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=0!==s.teams.length,n=[],r=1;case 3:if(!(r<=40)){t.next=22;break}return t.next=6,l.get("/api/v1/teams",{params:{page:r}});case 6:if(f=t.sent,data=f.data,"application/json"===f.headers["content-type"]){t.next=12;break}return o("setIsLoggedIn",!1,{root:!0}),t.abrupt("return");case 12:if(m=d()(data,["data"],[]),e?n.push.apply(n,Object(c.a)(m)):o("pushTeams",m),null!==d()(data,["meta","pagination","next"],null)){t.next=17;break}return t.abrupt("break",22);case 17:return t.next=19,new Promise((function(t){setTimeout(t,500)}));case 19:r++,t.next=3;break;case 22:e&&o("setTeams",n);case 23:case"end":return t.stop()}}),t)}))));case 4:case"end":return n.stop()}}),n)})))()}}},349:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return m})),n.d(e,"getters",(function(){return h})),n.d(e,"mutations",(function(){return v})),n.d(e,"actions",(function(){return w}));n(15),n(12),n(21),n(22);var r=n(43),o=n(4),c=n(10),l=n(2);n(13),n(182),n(17),n(7),n(18),n(9),n(30),n(140),n(24);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=function(){return{teams:new Map}},h={getTeam:function(s,t){return s.teams.get(t)}},v={setTeam:function(s,t){s.teams.set(t.id,t)}},w={getTeam:function(t,e){return Object(l.a)(regeneratorRuntime.mark((function n(){var o,l,d,m,h,v,w,y,k,O,S,C,x;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.commit,l=t.dispatch,d=t.rootState,m=e.$axios,h=e.id,n.next=4,Promise.all([m.get("/api/v1/teams/".concat(h)),m.get("/api/v1/teams/".concat(h,"/solves"))]);case 4:if(v=n.sent,w=Object(c.a)(v,2),y=w[0],k=y.data,O=y.headers,S=w[1].data,"application/json"!==O["content-type"]){n.next=18;break}if(C=f(f({},k.data),{},{solves:S.data}),o("setTeam",C),!d.isStatic){n.next=17;break}return x=Array.from(new Set([].concat(Object(r.a)(S.data.map((function(t){return t.user}))),Object(r.a)(k.data.members)))),n.next=17,l("users/getUsers",{$axios:m,ids:x},{root:!0});case 17:return n.abrupt("return",C);case 18:return o("setIsLoggedIn",!1,{root:!0}),n.abrupt("return",null);case 20:case"end":return n.stop()}}),n)})))()}}},350:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return c})),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return d}));var r=n(2),o=(n(13),n(55),n(17),n(7),n(18),n(24),function(){return{users:[]}}),c={getUser:function(s){return function(t){return s.users.find((function(e){return e.id===t}))}}},l={setUser:function(s,t){s.users.push(t)}},d={getUser:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,l,d,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.commit,o=t.getters.getUser,c=e.$axios,l=e.id,!o(l)){n.next=4;break}return n.abrupt("return");case 4:return n.next=6,c.get("/api/v1/users/".concat(l));case 6:d=n.sent,data=d.data,"application/json"===d.headers["content-type"]?r("setUser",data.data):r("setIsLoggedIn",!1,{root:!0});case 10:case"end":return n.stop()}}),n)})))()},getUsers:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,r=t.dispatch,o=e.$axios,c=e.ids,n.next=4,Promise.all(c.map((function(t){return r("getUser",{$axios:o,id:t})})));case 4:case"end":return n.stop()}}),n)})))()}}}},[[219,17,1,18]]]);