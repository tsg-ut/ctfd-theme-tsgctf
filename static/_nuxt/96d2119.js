(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{610:function(t,e,r){var content=r(650);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(152).default)("3515bfde",content,!0,{sourceMap:!1})},649:function(t,e,r){"use strict";r(610)},650:function(t,e,r){var n=r(151)((function(i){return i[1]}));n.push([t.i,".JoinTeam{text-align:center}.JoinTeam .title{margin-bottom:0}.JoinTeam .subtitle{font-size:1.5rem;margin-bottom:2rem}.JoinTeam .subtitle a{color:#90cbff}.JoinTeam .form-group{align-items:center;display:flex;justify-content:center;line-height:2rem;padding:.6rem 0}.JoinTeam label{font-size:1rem;padding-right:1rem;text-align:right;width:10rem}.JoinTeam .form-control{font-size:1.2rem;width:20rem}.JoinTeam button[type=submit]{margin:1rem 0;width:10rem}",""]),n.locals={},t.exports=n},668:function(t,e,r){"use strict";r.r(e);r(35),r(23),r(28),r(37),r(26),r(38);var n=r(13),o=r(4),c=(r(15),r(27),r(30),r(325),r(198),r(29),r(53));function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var f={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.store.dispatch("updateCsrfToken",t);case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{isError:!1}},head:function(){return{title:"Join Team - TSG CTF"}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(c.c)(["csrfToken"])),mounted:function(){document.referrer&&("/teams/join"===new URL(document.referrer).pathname&&(this.isError=!0))}},l=f,d=(r(649),r(60)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"JoinTeam"},[t._m(0),t._v(" "),e("div",{staticClass:"subtitle"},[t._v("Please enter team name and password provided by your team leader.")]),t._v(" "),e("form",{staticClass:"login-form",attrs:{method:"post","accept-charset":"utf-8",autocomplete:"off"}},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("input",{attrs:{type:"hidden",name:"nonce"},domProps:{value:t.csrfToken}})])])}),[function(){var t=this._self._c;return t("h2",{staticClass:"title"},[t("span",[this._v("Join Team")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name-input"}},[t._v("\n\t\t\t\tTeam Name\n\t\t\t")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{id:"name-input",type:"text",name:"name"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password-input"}},[t._v("\n\t\t\t\tTeam Password\n\t\t\t")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{id:"password-input",type:"password",name:"password"}})])},function(){var t=this._self._c;return t("div",[t("button",{attrs:{id:"submit",type:"submit",tabindex:"5"}},[this._v("\n\t\t\t\tJoin\n\t\t\t")])])}],!1,null,null,null);e.default=component.exports}}]);