(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{417:function(t,e,n){var content=n(449);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("1c0b28ca",content,!0,{sourceMap:!1})},448:function(t,e,n){"use strict";var o=n(417);n.n(o).a},449:function(t,e,n){(t.exports=n(71)(!1)).push([t.i,".JoinTeam{text-align:center}.JoinTeam .title{margin-bottom:0}.JoinTeam .subtitle{margin-bottom:2rem;font-size:1.5rem}.JoinTeam .button{display:block;margin:1rem auto;width:18rem;height:3rem;line-height:3rem;border-radius:9999px;font-size:1.5rem;font-family:Fredoka One,cursive;font-weight:300}.JoinTeam .button.join{background:linear-gradient(90deg,#3e91a6,#5e0fa9)}.JoinTeam .button.new{background:linear-gradient(90deg,#a6643e,#a90f5d)}",""])},472:function(t,e,n){"use strict";n.r(e);var o=n(4),r=n(38),c={data:function(){return{isError:!1}},computed:Object(o.a)({},Object(r.c)(["isInTeam","team"])),mounted:function(){this.isInTeam&&this.team&&this.team.id&&this.$router.push({path:"/teams/".concat(this.team.id)})},head:function(){return{title:"Team - TSG CTF"}}},m=(n(448),n(30)),component=Object(m.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"JoinTeam"},[this._m(0),this._v(" "),e("div",{staticClass:"subtitle"},[this._v("In order to participate you must either join or create a team.")]),this._v(" "),e("nuxt-link",{staticClass:"button join",attrs:{to:"/teams/join"}},[this._v("Join Team")]),this._v(" "),e("nuxt-link",{staticClass:"button new",attrs:{to:"/teams/new"}},[this._v("Create Team")])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title"},[e("span",[this._v("Join or Create Team")])])}],!1,null,null,null);e.default=component.exports}}]);