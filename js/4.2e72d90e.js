(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("\n        Quasar App\n      ")]),a("div",[e._v("Quasar v"+e._s(e.$q.version))])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n        Essential Links\n      ")]),e._l(e.essentialLinks,(function(t){return a("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:e.link}},[e.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1):e._e(),a("q-item-section",[a("q-item-label",[e._v(e._s(e.title))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)},o=[],l={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},s=l,c=a("2877"),u=a("eebe"),p=a.n(u),d=a("66e5"),b=a("4074"),f=a("0016"),m=a("0170"),k=Object(c["a"])(s,i,o,!1,null,null,null),q=k.exports;p()(k,"components",{QItem:d["a"],QItemSection:b["a"],QIcon:f["a"],QItemLabel:m["a"]});var v={name:"MainLayout",components:{EssentialLink:q},data:function(){return{leftDrawerOpen:!1,essentialLinks:[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"}]}}},h=v,w=a("4d5a"),_=a("e359"),Q=a("65c6"),g=a("9c40"),L=a("6ac5"),y=a("9404"),D=a("1c1c"),O=a("09e3"),E=Object(c["a"])(h,n,r,!1,null,null,null);t["default"]=E.exports;p()(E,"components",{QLayout:w["a"],QHeader:_["a"],QToolbar:Q["a"],QBtn:g["a"],QToolbarTitle:L["a"],QDrawer:y["a"],QList:D["a"],QItemLabel:m["a"],QPageContainer:O["a"]})}}]);