(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news-detail/news-detail"],{"0c21":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,r,u,a,c){try{var i=t[a](c),o=i.value}catch(f){return void e(f)}i.done?n(o):Promise.resolve(o).then(r,u)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var c=t.apply(n,e);function i(t){a(c,r,u,i,o,"next",t)}function o(t){a(c,r,u,i,o,"throw",t)}i(void 0)}))}}var i={data:function(){return{detail:{},id:""}},onLoad:function(t){var n=this;return c(r.default.mark((function e(){var u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.id=t.id,e.next=3,n.$api.info("news",t.id);case 3:u=e.sent,n.detail=u.data,n.detail.content=n.detail.content.replace(/<img/g,'<img style="width: 100%;"');case 6:case"end":return e.stop()}}),e)})))()}};n.default=i},"4cb7":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"9f1b":function(t,n,e){"use strict";e.r(n);var r=e("0c21"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a},cf07:function(t,n,e){"use strict";(function(t){e("cbff");r(e("66fd"));var n=r(e("d33d"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},d33d:function(t,n,e){"use strict";e.r(n);var r=e("4cb7"),u=e("9f1b");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("e7d4");var c,i=e("f0c5"),o=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,"3b1ac260",null,!1,r["a"],c);n["default"]=o.exports},e7d4:function(t,n,e){"use strict";var r=e("fc56"),u=e.n(r);u.a},fc56:function(t,n,e){}},[["cf07","common/runtime","common/vendor"]]]);