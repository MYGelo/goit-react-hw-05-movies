"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[845],{197:function(e,r,t){t.d(r,{Jh:function(){return l},QC:function(){return h},Sy:function(){return f},_k:function(){return s},z1:function(){return p}});var n=t(861),a=t(757),c=t.n(a),u=t(243),o="https://api.themoviedb.org/3/",i="b4e7b15a3300b6cccec91fe70cf6dc81",s=function(){var e=(0,n.Z)(c().mark((function e(){var r,t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o,"trending/all/day?api_key=").concat(i),e.prev=1,e.next=4,u.Z.get(r);case 4:if(t=e.sent,n=t.data.results.map((function(e){return{id:e.id,title:e.title,name:e.name}})),200!==t.status){e.next=8;break}return e.abrupt("return",n);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",Promise.reject(new Error("Sorry something go wrong ;(")));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"),e.prev=1,e.next=4,u.Z.get(t);case 4:if(n=e.sent,a=n.data.results.map((function(e){return{id:e.id,title:e.title}})),200!==n.status){e.next=8;break}return e.abrupt("return",a);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",Promise.reject(new Error("Sorry something go wrong ;(")));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"movie/").concat(r,"?api_key=").concat(i,"&language=en-US"),e.prev=1,e.next=4,u.Z.get(t);case 4:if(n=e.sent,a=n.data,200!==n.status){e.next=8;break}return e.abrupt("return",a);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",Promise.reject(new Error("Sorry something go wrong ")));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"movie/").concat(r,"/credits?api_key=").concat(i,"&language=en-US"),e.prev=1,e.next=4,u.Z.get(t);case 4:if(n=e.sent,a=n.data.cast.map((function(e){return{id:e.id,name:e.name,img:e.profile_path,character:e.character}})),200!==n.status){e.next=8;break}return e.abrupt("return",a);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",Promise.reject(new Error("Sorry something go wrong ")));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"movie/").concat(r,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),e.prev=1,e.next=4,u.Z.get(t);case 4:if(n=e.sent,a=n.data.results.map((function(e){return{id:e.id,url:e.url,author:e.author,content:e.content}})),200!==n.status){e.next=8;break}return e.abrupt("return",a);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",Promise.reject(new Error("Sorry something go wrong ")));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(r){return e.apply(this,arguments)}}()},845:function(e,r,t){t.r(r),t.d(r,{default:function(){return i}});var n=t(439),a=t(197),c=t(791),u=t(689),o=t(184);function i(){var e=(0,c.useState)([]),r=(0,n.Z)(e,2),t=r[0],i=r[1],s=(0,u.UO)().movieId;return(0,c.useEffect)((function(){(0,a.Jh)(s).then((function(e){i(e)}))}),[s]),0===t.length?(0,o.jsx)("p",{children:"We don`t have any reviews for this movie"}):t.length>0?(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:t.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("h3",{children:["Author: ",e.author]}),(0,o.jsx)("p",{children:e.content})]})},e.id)}))})}):void 0}}}]);
//# sourceMappingURL=845.0f2977d1.chunk.js.map