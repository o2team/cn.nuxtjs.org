webpackJsonp([3],{343:function(t,e,n){var r,s;r=n(371);var a=n(403);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=r},348:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content"],mounted:function(){this.addListeners()},beforeDestroy:function(){this.removeListeners()},watch:{content:"contentUpdated"},methods:{navigate:function(t){var e=t.target.getAttribute("href");e&&"/"===e[0]&&(t.preventDefault(),this.$router.push(e))},contentUpdated:function(){var t=this;this.removeListeners(),this.$nextTick(function(){t.addListeners()})},addListeners:function(){this._links=this.$el.getElementsByTagName("a");for(var t=0;t<this._links.length;t++)this._links[t].addEventListener("click",this.navigate,!1)},removeListeners:function(){for(var t=0;t<this._links.length;t++)this._links[t].removeEventListener("click",this.navigate,!1);this._links=[]}}}},349:function(t,e,n){var r,s;r=n(348);var a=n(350);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=r},350:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{domProps:{innerHTML:t._s(t.content)}})},staticRenderFns:[]}},352:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src","//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=nuxtjsorg"),t.setAttribute("id","_carbonads_js"),this.$refs.carbonads.appendChild(t)}}},354:function(t,e){},356:function(t,e,n){var r,s;n(354),r=n(352);var a=n(358);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=r},358:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"carbonads",staticClass:"ad"})},staticRenderFns:[]}},371:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(74),s=n.n(r),a=n(73),i=n.n(a),o=n(26),c=n.n(o),d=n(356),u=n.n(d),f=n(349),l=n.n(f);e.default={data:function(t){var e=this,n=t.route,r=t.store,a=t.error,o=t.isDev;return i()(s.a.mark(function t(){var i,d,u,f;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i={attrs:{},body:"",docLink:"",isDev:o},d=n.params.slug||"index",u="/"+r.state.lang.iso+"/faq/"+d,f=void 0,t.prev=4,t.next=7,c.a.get(r.state.apiURI+u);case 7:f=t.sent,t.next=15;break;case 10:if(t.prev=10,t.t0=t.catch(4),404===t.t0.response.status){t.next=14;break}return t.abrupt("return",a({statusCode:500,message:"An error occured"}));case 14:return t.abrupt("return",a({statusCode:404,message:"API page not found"}));case 15:return i.attrs=f.data.attrs,i.body=f.data.body,i.docLink="https://github.com/nuxt/docs/blob/master"+u+".md","ru"===r.state.lang.iso&&(i.docLink="https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru"+u+".md"),i.attrs.title||console.error("["+u+"] Please define a title in the front matter."),i.attrs.description||console.error("["+u+"] Please define a description in the front matter."),t.abrupt("return",i);case 22:case"end":return t.stop()}},t,e,[[4,10]])}))()},scrollToTop:!0,head:function(){return{title:this.attrs.title,titleTemplate:"%s - Nuxt.js FAQ",meta:[{hid:"description",name:"description",content:this.attrs.description}]}},components:{HtmlParser:l.a,CarbonAds:u.a}}},403:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isDev?t._e():n("carbon-ads",{key:t.$route.params.slug}),n("html-parser",{attrs:{content:t.body}}),n("p",{staticClass:"contribute"},[t._v(t._s(t.$store.state.lang.guide.contribute)+" "),n("a",{attrs:{href:t.docLink,target:"_blank"}},[t._v(t._s(t.$store.state.lang.guide.edit_on_github))])])],1)},staticRenderFns:[]}}});