(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{315:function(t,e,i){},339:function(t,e,i){"use strict";i(315)},363:function(t,e,i){"use strict";i.r(e);i(16);var a={props:["options"],data:()=>({placeholder:void 0}),mounted(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize(t,e){Promise.all([Promise.all([i.e(0),i.e(9)]).then(i.t.bind(null,361,7)),Promise.all([i.e(0),i.e(9)]).then(i.t.bind(null,362,7))]).then(([i])=>{i=i.default;const{algoliaOptions:a={}}=t;i(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:["lang:"+e].concat(a.facetFilters||[])},a),handleSelected:(t,e,i)=>{const{pathname:a,hash:s}=new URL(i.url),l=a.replace(this.$site.base,"/"),n=decodeURIComponent(s);this.$router.push(`${l}${n}`)}}))})},update(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}},watch:{$lang(t){this.update(this.options,t)},options(t){this.update(t,this.$lang)}}},s=(i(339),i(7)),l=Object(s.a)(a,(function(){var t=this._self._c;return t("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[t("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);e.default=l.exports}}]);