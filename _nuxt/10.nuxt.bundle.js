webpackJsonp([10],{347:function(t,e,n){var a,s;n(377),a=n(375);var o=n(393);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-3494e3a2",t.exports=a},375:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(72),s=n.n(a);e.default={components:{NuxtFooter:s.a},head:function(){return{title:this.$store.state.lang.homepage.meta.title,meta:[{name:"description",hid:"description",content:this.$store.state.lang.homepage.meta.description},{name:"og:title",content:this.$store.state.lang.homepage.meta.title},{name:"og:description",content:this.$store.state.lang.homepage.meta.description},{name:"og:type",content:"website"},{name:"og:url",content:"https://nuxtjs.org"},{name:"og:image",content:"https://i.imgur.com/PzEm5j2.png"},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@nuxt_js"},{name:"twitter:title",content:this.$store.state.lang.homepage.meta.title},{name:"twitter:description",content:this.$store.state.lang.homepage.meta.description},{name:"twitter:image",content:"https://i.imgur.com/PzEm5j2.png"},{name:"twitter:image:alt",content:"Nuxt.js Logo"}]}}}},377:function(t,e){},393:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"Landscape"},[n("img",{staticClass:"Landscape__Image Landscape__Image--mobile",attrs:{src:"/logo_home_mobile.png",alt:"Logo nuxt"}}),n("img",{staticClass:"Landscape__Image Landscape__Image--desktop",attrs:{src:"/logo_home.png",alt:"Logo nuxt"}}),n("h2",{staticClass:"Landscape__Title"},[t._v("\n      "+t._s(t.$store.state.lang.homepage.title)+"\n    ")]),n("ul",{staticClass:"Landscape__List"},[n("li",{staticClass:"Landscape__List__Item"},[n("nuxt-link",{staticClass:"button button--green",attrs:{to:"/guide/installation"}},[t._v("\n          "+t._s(t.$store.state.lang.links.get_started)+"\n        ")])],1),n("li",{staticClass:"Landscape__List__Item"},[n("a",{staticClass:"button",attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank"}},[t._v("\n          "+t._s(t.$store.state.lang.links.github)+"\n        ")])])])]),n("nuxt-footer")],1)},staticRenderFns:[]}}});