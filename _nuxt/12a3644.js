(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1241:function(t,e,n){t.exports=n.p+"img/effect-force-icon.828a6c5.png"},1243:function(t,e,n){"use strict";var o={props:["page","perPage","items"],computed:{maxPage:function(){return Math.ceil(this.items/this.perPage)}},watch:{items:function(){this.$emit("setPage",1)}}},r=n(23),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items&&t.items>t.perPage?n("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[n("span",{staticStyle:{"padding-left":"0.5em"}},[t._v(t._s((t.page-1)*t.perPage+1)+"-"+t._s(Math.min(t.page*t.perPage,t.items))+" of\n    "+t._s(t.items))]),t._v(" "),n("a",{staticClass:"pagination-previous",attrs:{disabled:1===t.page},on:{click:function(e){return t.$emit("setPage",t.page-1)}}},[t._v("Previous")]),t._v(" "),n("a",{staticClass:"pagination-next",attrs:{disabled:!t.maxPage||t.page===t.maxPage},on:{click:function(e){return t.$emit("setPage",t.page+1)}}},[t._v("Next page")]),t._v(" "),n("ul",{staticClass:"pagination-list has-margin-top-mobile"},[t.page>2?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",1)}}},[t._v("1")])]):t._e(),t._v(" "),t.page>3?n("li",[n("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._v(" "),t.page>1?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.page-1)}}},[t._v(t._s(t.page-1))])]):t._e(),t._v(" "),n("li",[n("a",{staticClass:"pagination-link is-current",attrs:{"aria-current":"page"}},[t._v(t._s(t.page))])]),t._v(" "),t.page<t.maxPage?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.page+1)}}},[t._v("\n        "+t._s(t.page+1))])]):t._e(),t._v(" "),t.maxPage>t.page+2?n("li",[n("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._v(" "),t.maxPage>t.page+1?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.maxPage)}}},[t._v(t._s(t.maxPage))])]):t._e()])]):t._e()}),[],!1,null,null,null);e.a=component.exports},1249:function(t,e,n){var map={"./effect-captions-icon.png":1250,"./effect-dao-icon.png":1251,"./effect-force-icon.png":1241,"./effect-socials-icon.png":1252,"./effect-translate-icon.png":1253};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=1249},1250:function(t,e,n){t.exports=n.p+"img/effect-captions-icon.d32e1fd.png"},1251:function(t,e,n){t.exports=n.p+"img/effect-dao-icon.8a49264.png"},1252:function(t,e,n){t.exports=n.p+"img/effect-socials-icon.113948d.png"},1253:function(t,e,n){t.exports=n.p+"img/effect-translate-icon.a76baca.png"},1254:function(t,e,n){var content=n(1261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("66cabdf2",content,!0,{sourceMap:!1})},1256:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0iIzg0OEE5QSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMi40MjMiIGN5PSIyLjQyMzA2IiByPSIxLjYxNTM4IiBmaWxsPSIjODQ4QTlBIi8+CjxyZWN0IHg9IjUuNjUzMzIiIHk9IjEuNjE1MzYiIHdpZHRoPSIxNC41Mzg1IiBoZWlnaHQ9IjEuNjE1MzgiIHJ4PSIwLjgwNzY5MiIgZmlsbD0iIzg0OEE5QSIvPgo8ZWxsaXBzZSBjeD0iMi40MjMiIGN5PSI4LjA3NjkzIiByeD0iMS42MTUzOCIgcnk9IjEuNjE1MzgiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeD0iNS42NTMzMiIgeT0iNy4yNjkyMyIgd2lkdGg9IjE0LjUzODUiIGhlaWdodD0iMS42MTUzOSIgcng9IjAuODA3NjkzIiBmaWxsPSIjODQ4QTlBIi8+CjxlbGxpcHNlIGN4PSIyLjQyMyIgY3k9IjEzLjczMDgiIHJ4PSIxLjYxNTM4IiByeT0iMS42MTUzOCIgZmlsbD0iIzg0OEE5QSIvPgo8cmVjdCB4PSI1LjY1MzMyIiB5PSIxMi45MjMxIiB3aWR0aD0iMTQuNTM4NSIgaGVpZ2h0PSIxLjYxNTM4IiByeD0iMC44MDc2OTIiIGZpbGw9IiMjODQ4QTlBIi8+CjxlbGxpcHNlIGN4PSIyLjQyMyIgY3k9IjE5LjM4NDYiIHJ4PSIxLjYxNTM4IiByeT0iMS42MTUzOCIgZmlsbD0iIzg0OEE5QSIvPgo8cmVjdCB4PSI1LjY1MzMyIiB5PSIxOC41NzY5IiB3aWR0aD0iMTQuNTM4NSIgaGVpZ2h0PSIxLjYxNTM4IiByeD0iMC44MDc2OTIiIGZpbGw9IiM4NDhBOUEiLz4KPC9zdmc+Cg=="},1259:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeT0iMTEuMzA3NyIgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeD0iMTEuMzA3NiIgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeD0iMTEuMzA3NiIgeT0iMTEuMzA3NyIgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPC9zdmc+Cg=="},1260:function(t,e,n){"use strict";n(1254)},1261:function(t,e,n){var o=n(58),r=n(1255),c=n(1256),l=o(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);var d=r(c);l.push([t.i,".title-section[data-v-770d5baf]{height:100%}.column[data-v-770d5baf]{flex-wrap:wrap;align-items:stretch}.box.is-disabled[data-v-770d5baf]{background-color:rgba(222,224,230,.5)}.box.is-disabled .column[data-v-770d5baf]:not(:last-child){opacity:.5}.box.has-reservation[data-v-770d5baf]{box-shadow:0 0 14px 5px rgba(17,72,235,.3)}.box .image img[data-v-770d5baf]{border:1px solid #d2d9eb}.card .card-image[data-v-770d5baf],.card .card-image figure[data-v-770d5baf],.card .card-image img[data-v-770d5baf],.card .card-image p[data-v-770d5baf]{height:75px!important}.card .card-image img[data-v-770d5baf]{width:100%;-o-object-fit:contain;object-fit:contain;border-radius:6px!important}.switch-button[data-v-770d5baf]{background:#d7dcee;border-radius:6px;overflow:hidden;width:80px;text-align:center;font-size:18px;letter-spacing:1px;color:#155fff;padding:4px 40px 4px 4px;position:relative}.switch-button[data-v-770d5baf]:before{content:url("+d+');position:absolute;top:9px;bottom:0;right:1px;width:40px;align-items:center;justify-content:center;z-index:3;pointer-events:none}.switch-button-checkbox[data-v-770d5baf]{cursor:pointer;position:absolute;top:0;left:0;bottom:0;width:100%;height:100%;opacity:0;z-index:2}.switch-button-checkbox:checked+.switch-button-label[data-v-770d5baf]:before{transform:translateX(36px);transition:transform .3s linear}.switch-button-checkbox+.switch-button-label[data-v-770d5baf]{position:relative;padding:1px 0;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.switch-button-checkbox+.switch-button-label[data-v-770d5baf]:before{content:"";padding:1px 0;background:#f6f7ff;height:100%;width:100%;position:absolute;left:0;top:0;border-radius:6px;transform:translateX(0);transition:transform .3s}.switch-button-checkbox+.switch-button-label .switch-button-label-span[data-v-770d5baf]{position:relative;top:5px}.image[data-v-770d5baf]{max-height:90px}@media screen and (min-width:1024px){.column.is-1-desktop[data-v-770d5baf]{flex:none;width:8.33333337%;max-width:76px}}.grid[data-v-770d5baf]{text-align:center}@media screen and (max-width:1023px){.columns[data-v-770d5baf]{text-align:center}}',""]),t.exports=l},1266:function(t,e,n){"use strict";var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"switch-button-label",attrs:{for:""}},[e("span",{staticClass:"switch-button-label-span"},[e("img",{attrs:{height:"28px",src:n(1259)}})])])}],r=(n(73),n(44),n(60),n(21),n(82),n(47),n(83),n(29)),c=(n(84),n(135));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"CampaignList",components:{Pagination:n(1243).a},props:["gridToggle","campaigns"],data:function(){return{page:this.$route.query.page||1,perPage:30,ipfsExplorer:this.$blockchain.sdk.config.ipfsNode,categories:["translate","captions","socials","dao"]}},computed:d(d(d({},Object(c.b)({batchesByCampaignId:"campaign/batchesByCampaignId"})),Object(c.c)({campaignsLoading:function(t){return t.campaign.loading},allCampaignsLoaded:function(t){return t.campaign.allCampaignsLoaded},allBatchesLoaded:function(t){return t.campaign.allBatchesLoaded},allSubmissionsLoaded:function(t){return t.campaign.allSubmissionsLoaded}})),{},{list:{get:function(){return this.$store.state.view.grid},set:function(t){this.$store.commit("view/SET_GRID_LIST",t)}},grid:function(){return!this.list&&this.gridToggle},paginatedCampaigns:function(){var t=(this.page-1)*this.perPage;return this.campaigns?this.campaigns.slice(t,t+this.perPage):[]}}),created:function(){this.getForceInfo()},methods:{setPage:function(t){this.page=t},getForceInfo:function(){this.campaigns&&this.allCampaignsLoaded||this.$store.dispatch("campaign/getCampaigns"),this.allBatchesLoaded||this.$store.dispatch("campaign/getBatches"),this.allSubmissionsLoaded||this.$store.dispatch("campaign/getSubmissions")}}},h=(n(1260),n(23)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"is-flex is-justify-content-space-between"},[o("div"),t._v(" "),t.gridToggle?o("div",{staticClass:"is-hidden-touch"},[o("div",{staticClass:"switch-button mb-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.list,expression:"list"}],staticClass:"switch-button-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.list)?t._i(t.list,null)>-1:t.list},on:{change:function(e){var n=t.list,o=e.target,r=!!o.checked;if(Array.isArray(n)){var c=t._i(n,null);o.checked?c<0&&(t.list=n.concat([null])):c>-1&&(t.list=n.slice(0,c).concat(n.slice(c+1)))}else t.list=r}}}),t._v(" "),t._m(0)])]):t._e()]),t._v(" "),o("hr",{staticClass:"mt-1"}),t._v(" "),o("div",{staticClass:"columns is-multiline",class:{grid:t.grid}},t._l(t.paginatedCampaigns,(function(e){return o("div",{key:e.id,staticClass:"column is-one-third-tablet",class:{"is-one-fifth-desktop":t.grid,"is-12-desktop":!t.grid}},[o("nuxt-link",{staticClass:"box p-4",class:{"is-disabled":null===e.info,"has-reservation":e.userHasReservation,"is-disabled":!1===e.joinable},attrs:{to:"/campaigns/"+e.id}},[o("div",{staticClass:"columns is-vcentered is-multiline"},[o("div",{staticClass:"column is-12-touch",class:{"is-1-desktop":!t.grid,"is-12-desktop":t.grid}},[o("p",{staticClass:"image has-radius is-vcentered has-background-image"},[e.info&&e.info.image?o("img",{attrs:{src:e.info.image.Hash?t.ipfsExplorer+"/ipfs/"+e.info.image.Hash:e.info.image}}):e.info&&e.info.category&&t.categories.includes(e.info.category)?o("img",{attrs:{src:n(1249)("./effect-"+e.info.category+"-icon.png")}}):o("img",{attrs:{src:n(1241),alt:"campaign title"}})])]),t._v(" "),o("div",{staticClass:"column",class:{"is-12":t.grid,"is-4-desktop is-4-widescreen is-12-touch":!t.grid}},[o("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[o("div",[e.info&&e.info.category?o("nuxt-link",{staticClass:"tag is-light mb-2 has-border is-capitalized",class:["is-"+e.info.category],attrs:{to:{path:"/",query:{category:e.info.category}}}},[t._v("\n                  "+t._s(e.info.category)+"\n                ")]):null!==e.info?o("span",{staticClass:"tag is-light mb-2"},[o("span",{staticClass:"loading-text"},[t._v("Loading")])]):t._e()],1),t._v(" "),e.info?o("span",[e.info.title?o("span",[t._v(t._s(e.info.title))]):o("i",[t._v("- Untitled -")])]):null!==e.info?o("span",{staticClass:"loading-text"},[t._v("Loading")]):o("span",{staticClass:"has-text-danger-dark"},[t._v("Could not load campaign info")])]),t._v(" "),o("div",{staticClass:"has-text-grey is-size-7"},[e.info?o("div",[e.info.description?o("div",{staticClass:"is-ellipsis"},[t._v("\n                  "+t._s(e.info.description)+"\n                ")]):o("i",[t._v("- no description -")])]):null!==e.info?o("div",[t._v("\n                ........\n              ")]):t._e()])]),t._v(" "),o("div",{staticClass:"column is-12",class:{"is-2-desktop":!t.grid}},[o("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n              Requester:\n            ")]),t._v(" "),o("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[o("nuxt-link",{attrs:{to:"/profile/"+e.owner[1]}},[o("span",{staticClass:"is-ellipsis"},[t._v(t._s(e.owner[1]))])])],1)]),t._v(" "),o("div",{staticClass:"column"},[o("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n              Reward:\n            ")]),t._v(" "),o("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[t._v("\n              "+t._s(e.reward.quantity)+"\n            ")])]),t._v(" "),e.num_tasks||e.tasks_done?o("div",{staticClass:"column"},[o("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n              Tasks:\n            ")]),t._v(" "),o("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[o("span",[t._v("\n                "+t._s(e.num_tasks-e.tasks_done)+"/"+t._s(e.num_tasks)+" left\n              ")])])]):t._e(),t._v(" "),o("div",{staticClass:"column has-text-right",class:{"is-12":t.grid}},[o("button",{staticClass:"button is-primary has-text-weight-semibold is-fullwidth",class:{"is-loading":void 0===e.info,"is-accent":null===e.info||e.userHasReservation,"is-outlined":null===e.info,"is-wide":!t.grid},attrs:{disabled:!e||null===e.info}},[e.userHasReservation?o("span",[t._v("Go to Task")]):o("span",[t._v("View")])])])])])],1)})),0),t._v(" "),t.campaigns?o("pagination",{staticClass:"mt-2",attrs:{items:t.campaigns.length,page:t.page,"per-page":t.perPage},on:{setPage:t.setPage}}):t._e(),t._v(" "),t.campaignsLoading?o("div",{staticClass:"subtitle loading-text"},[t._v("\n    Campaigns loading\n  ")]):t.allBatchesLoaded?t.campaigns&&!t.campaigns.length?o("div",{staticClass:"subtitle"},[t._v("\n    No tasks\n  ")]):t.campaigns?t._e():o("div",{staticClass:"subtitle has-text-danger"},[t._v("\n    Could not retrieve campaigns\n  ")]):o("div",{staticClass:"loading-text"},[t._v("\n    Batches loading\n  ")])],1)}),o,!1,null,"770d5baf",null);e.a=component.exports},1351:function(t,e,n){var content=n(1498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("0e28178c",content,!0,{sourceMap:!1})},1352:function(t,e,n){var content=n(1501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("24d7a413",content,!0,{sourceMap:!1})},1353:function(t,e,n){var content=n(1504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("2126bc10",content,!0,{sourceMap:!1})},1497:function(t,e,n){"use strict";n(1351)},1498:function(t,e,n){var o=n(58)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),o.push([t.i,"select[data-v-241232b9]{width:200px;text-transform:capitalize!important}",""]),t.exports=o},1500:function(t,e,n){"use strict";n(1352)},1501:function(t,e,n){var o=n(58)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),o.push([t.i,"a.box.is-active[data-v-20bd23cb],a.box[data-v-20bd23cb]:hover{color:#2b2f3b!important}a.box.is-active.option-joinable[data-v-20bd23cb],a.box:hover.option-joinable[data-v-20bd23cb]{color:#fff!important;border-color:#00c165;background:#00c165}a.box.is-active.option-unjoinable[data-v-20bd23cb],a.box:hover.option-unjoinable[data-v-20bd23cb]{color:#fff!important;border-color:#e06375;background:#e06375}a.box.is-active.option-qualifier[data-v-20bd23cb],a.box:hover.option-qualifier[data-v-20bd23cb]{color:#fff!important;background:#999}a.box[data-v-20bd23cb]{transition:.2s;text-transform:capitalize;display:flex;justify-content:center;align-items:center;height:100%}a.box.option-joinable[data-v-20bd23cb]{color:#00c165}a.box.option-unjoinable[data-v-20bd23cb]{color:#e06375}a.box.option-qualifier[data-v-20bd23cb]{color:#999}a.box.dapp-null[data-v-20bd23cb]{min-height:70px}",""]),t.exports=o},1502:function(t){t.exports=JSON.parse('{"campaigns":[1,4,5,6,7,8],"requesters":["efxqualifier"]}')},1503:function(t,e,n){"use strict";n(1353)},1504:function(t,e,n){var o=n(58)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),o.push([t.i,'.switch-button[data-v-19bd8638]{width:220px;background:#f7f9fb;border:1px solid #e8eeff;border-radius:6px;text-align:center;font-size:.75rem;font-weight:600;letter-spacing:1px;color:#2b2f3b;position:relative;padding:4px 135px 4px 20px}.switch-button[data-v-19bd8638]:before{content:"Unmoderated";position:absolute;top:6px;right:17px;width:auto;align-items:center;justify-content:center;z-index:3;pointer-events:none}.switch-button .has-tooltip-arrow[data-v-19bd8638]{position:absolute;top:7px;right:5px;border-radius:50%;z-index:10;cursor:pointer}.switch-button .has-tooltip-arrow[data-v-19bd8638],.switch-button .has-tooltip-arrow svg[data-v-19bd8638]{display:block;height:10px;width:10px}.switch-button .has-tooltip-arrow[data-v-19bd8638]:before{margin-top:-4px!important;border-radius:8px}.switch-button .has-tooltip-arrow[data-v-19bd8638]:hover{background-color:rgba(0,0,0,.2)}.switch-button.unmoderated[data-v-19bd8638]:before{color:#fff}.switch-button.unmoderated .has-tooltip-arrow path[data-v-19bd8638]{fill:#fff;opacity:1}.switch-button.unmoderated .switch-button-checkbox+.switch-button-label[data-v-19bd8638]:before{width:118px;left:0}.switch-button-checkbox[data-v-19bd8638]{cursor:pointer;position:absolute;top:0;left:0;bottom:0;width:100%;height:100%;opacity:0;z-index:2}.switch-button-checkbox:checked+.switch-button-label[data-v-19bd8638]:before{transform:translateX(78px);transition:transform .3s linear}.switch-button-checkbox:checked+.switch-button-label[data-v-19bd8638]{color:#2b2f3b}.switch-button-checkbox+.switch-button-label[data-v-19bd8638]{color:#fff;position:relative;padding:2px 0;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.switch-button-checkbox+.switch-button-label[data-v-19bd8638]:before{content:"";padding:1px 0;background:#101d56;height:100%;width:95px;position:absolute;left:-15px;top:0;border-radius:6px;transform:translateX(0);transition:transform .3s}.switch-button-checkbox+.switch-button-label .switch-button-label-span[data-v-19bd8638]{position:relative}.category-filters[data-v-19bd8638]{margin-bottom:-50px}@media screen and (max-width:769px){.category-filters[data-v-19bd8638]{margin-bottom:0}}',""]),t.exports=o},1506:function(t,e,n){"use strict";n.r(e);n(73),n(44),n(82),n(47),n(83),n(84),n(62),n(86),n(63),n(85),n(87),n(61);var o=n(55),r=n(29),c=(n(60),n(21),n(1248),n(110),n(111),n(121),n(45),n(137),n(159),n(135)),l=n(1275),d=n.n(l),f={name:"CategoryFilters",components:{},props:["filter"],data:function(){return{effect_dapps:["annotations","socials"]}},methods:{onFilter:function(t){this.$emit("categoryFilter",t.target.value)}}},h=(n(1497),n(23)),m=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column is-flex pl-0 is-align-items-center"},[n("div",{staticClass:"select is-normal"},[n("select",{domProps:{value:t.filter},on:{change:t.onFilter}},[n("option",{attrs:{value:"",selected:""}},[t._v("\n        All Categories\n      ")]),t._v(" "),t._l(t.effect_dapps,(function(e){return n("option",{key:e,staticClass:"column",domProps:{value:e}},[t._v("\n        "+t._s(e)),"qualifier"===e?n("span",[t._v("s")]):t._e()])}))],2)])])}),[],!1,null,"241232b9",null).exports,v=n(1499),x={name:"JoinableFilters",components:{Carousel:v.Carousel,Slide:v.Slide},props:["filter","campaigns"],data:function(){return{unmoderated:!1,options:["joinable","unjoinable","qualifier"]}},methods:{onFilter:function(filter){this.$emit("joinableFilter",filter)}}},y=(n(1500),Object(h.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("client-only",[n("carousel",{staticClass:"columns mb-5",attrs:{"pagination-enabled":!1,"per-page-custom":[[768,3],[1024,5]]}},[n("slide",{staticClass:"column py-3 is-2"},[n("a",{staticClass:"box is-flat dapp-null",staticStyle:{padding:"14px !important"},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onFilter()}}},[n("div",{staticClass:"has-text-centered"},[n("h4",{staticClass:"is-size-5"},[n("b",[t._v("All Tasks")])])])])]),t._v(" "),t._l(t.options,(function(option){return n("slide",{key:option,staticClass:"column"},[n("a",{staticClass:"box pt-1 pb-0",class:["option-"+option,t.filter===option?"is-active":null],attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onFilter(option)}}},[n("div",{staticClass:"has-text-centered"},[n("h4",{staticClass:"is-size-5"},[n("b",[t._v(t._s(option)),"qualifier"===option?n("span",[t._v("s")]):t._e()])])])])])}))],2)],1)],1)}),[],!1,null,"20bd23cb",null).exports),_=n(1502);function w(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,r=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw r}}}}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function I(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k={components:{CampaignList:n(1266).a,CategoryFilters:m,JoinableFilters:y},data:function(){return{approvedCampaigns:_.campaigns,approvedRequesters:_.requesters,unmoderated:!1,categoryFilter:this.$route.query.category,joinableFilter:null}},computed:j(j(j({},Object(c.b)({activeBatchesByCampaignId:"campaign/activeBatchesByCampaignId",campaignsByCategory:"campaign/campaignsByCategory",reservationsByAccountId:"campaign/reservationsByAccountId"})),Object(c.c)({assignedQualifications:function(t){return t.qualification.assignedQualifications}})),{},{reservations:function(){var t=this;if(this.$auth&&this.$auth.user&&this.$auth.user.vAccountRows){var e=this.reservationsByAccountId(this.$auth.user.vAccountRows[0].id);return e&&(e=e.filter((function(e){return parseInt(new Date(new Date(e.submitted_on)+"UTC").getTime()/1e3)+parseInt(t.$blockchain.sdk.force.config.releaseTaskDelaySec.toFixed(0))>parseInt((Date.now()/1e3).toFixed(0))}))),e}},filteredCampaigns:function(){var t,e=this,n=this.campaignsByCategory(this.categoryFilter);if("qualifier"===this.joinableFilter&&(n=this.campaignsByCategory(this.joinableFilter)),n){for(var i in t=n.map((function(t){return j({},t)})),t=this.unmoderated?t.filter((function(t){return!e.approvedCampaigns.includes(t.id)&&!e.approvedRequesters.includes(t.owner[1])})):t.filter((function(t){return e.approvedCampaigns.includes(t.id)||e.approvedRequesters.includes(t.owner[1])})),t){var o=this.activeBatchesByCampaignId(t[i].id),r=d.a.intersectionBy(o,this.reservations,"batch_id");t[i].userHasReservation=r.length,t[i].batches=o,o&&(t[i].num_tasks=o.reduce((function(a,b){return a+b.num_tasks}),0),t[i].tasks_done=o.reduce((function(a,b){return a+b.real_tasks_done}),0)),t[i].joinable=this.checkUserQualify(t[i])}this.joinableFilter&&"qualifier"!==this.joinableFilter&&(t=this.getJoinableCampaigns(t,this.joinableFilter)),t=t.filter((function(t){return t.num_tasks-t.tasks_done>0||t.userHasReservation})),t=d.a.orderBy(t,["userHasReservation","id"],["desc","asc"])}return t}}),watch:{"$route.query.category":function(t){this.onCategoryFilter(t)}},created:function(){this.$auth&&this.$auth.loggedIn||this.$router.push("/welcome")},methods:{onCategoryFilter:function(t){!t&&this.$route.query.category?this.$router.replace("/"):t!==this.$route.query.category&&this.$router.replace("/?category="+t),this.categoryFilter=t},onJoinableFilter:function(option){this.joinableFilter=option},checkUserQualify:function(t){var e=this;if(!(t.qualis.length>0))return!0;var n,r=w(t.qualis);try{var c=function(){var t=n.value;return null===e.assignedQualifications?{v:null}:0===t.value&&!e.assignedQualifications.find((function(e){return e.id===t.key}))||1===t.value&&e.assignedQualifications.find((function(e){return e.id===t.key}))?{v:!1}:void 0};for(r.s();!(n=r.n()).done;){var l=c();if("object"===Object(o.a)(l))return l.v}}catch(t){r.e(t)}finally{r.f()}return!0},getJoinableCampaigns:function(t,option){var e,n=[],o=[],r=w(t);try{for(r.s();!(e=r.n()).done;){var c=e.value;c.joinable?n.push(c):o.push(c)}}catch(t){r.e(t)}finally{r.f()}return"joinable"===option?n:o}}},M=(n(1503),Object(h.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("h1",{staticClass:"title has-text-weight-bold"},[t.categoryFilter?n("span",{staticClass:"is-capitalized"},[t._v(t._s(t.categoryFilter))]):t._e(),t._v(" Tasks\n          ")])]),t._v(" "),n("div",{staticClass:"switch-button mt-1 ml-3",class:{unmoderated:t.unmoderated}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.unmoderated,expression:"unmoderated"}],staticClass:"switch-button-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.unmoderated)?t._i(t.unmoderated,null)>-1:t.unmoderated},on:{change:function(e){var n=t.unmoderated,o=e.target,r=!!o.checked;if(Array.isArray(n)){var c=t._i(n,null);o.checked?c<0&&(t.unmoderated=n.concat([null])):c>-1&&(t.unmoderated=n.slice(0,c).concat(n.slice(c+1)))}else t.unmoderated=r}}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"has-tooltip-arrow",attrs:{"data-tooltip":"Use at your own risk!"}},[n("svg",{attrs:{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{opacity:"0.4",d:"M5 0C7.757 0 10 2.24303 10 5.00003C10 7.75703 7.757 10 5 10C2.243 10 0 7.75703 0 5.00003C0 2.24303 2.243 0 5 0ZM5 9.09091C7.25576 9.09091 9.09091 7.25576 9.09091 5.00003C9.09091 2.7443 7.25576 0.909091 5 0.909091C2.74424 0.909091 0.909091 2.7443 0.909091 5.00003C0.909091 7.25576 2.74427 9.09091 5 9.09091Z",fill:"#565E76"}}),t._v(" "),n("path",{attrs:{opacity:"0.4",d:"M4.99953 2.12122C5.33365 2.12122 5.60547 2.39322 5.60547 2.72755C5.60547 3.06158 5.33365 3.33334 4.99953 3.33334C4.66541 3.33334 4.39359 3.06158 4.39359 2.72755C4.39359 2.39322 4.66541 2.12122 4.99953 2.12122Z",fill:"#565E76"}}),t._v(" "),n("path",{attrs:{opacity:"0.4",d:"M4.99858 4.24243C5.24961 4.24243 5.45312 4.44595 5.45312 4.69698V7.42425C5.45312 7.67528 5.24961 7.8788 4.99858 7.8788C4.74755 7.8788 4.54403 7.67528 4.54403 7.42425V4.69698C4.54403 4.44595 4.74755 4.24243 4.99858 4.24243Z",fill:"#565E76"}})])])])]),t._v(" "),n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[n("nuxt-link",{staticClass:"button is-primary is-small",attrs:{to:"/campaigns/templates"}},[n("span",{staticClass:"icon"},[t._v("+")]),t._v(" "),n("span",[t._v("Create Task")])])],1)])]),t._v(" "),n("joinable-filters",{attrs:{filter:t.joinableFilter,campaigns:t.filteredCampaigns},on:{joinableFilter:t.onJoinableFilter}}),t._v(" "),n("category-filters",{staticClass:"category-filters",attrs:{filter:t.categoryFilter},on:{categoryFilter:t.onCategoryFilter}}),t._v(" "),n("campaign-list",{attrs:{campaigns:t.filteredCampaigns,"grid-toggle":!0}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"switch-button-label",attrs:{for:""}},[n("span",{staticClass:"switch-button-label-span"},[t._v("Approved")])])}],!1,null,"19bd8638",null));e.default=M.exports}}]);