"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[290],{197:function(r,e,t){t.d(e,{Jh:function(){return h},QC:function(){return l},Sy:function(){return f},_k:function(){return s},z1:function(){return p}});var n=t(861),a=t(757),c=t.n(a),u=t(243),o="https://api.themoviedb.org/3/",i="b4e7b15a3300b6cccec91fe70cf6dc81",s=function(){var r=(0,n.Z)(c().mark((function r(){var e,t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e="".concat(o,"trending/all/day?api_key=").concat(i),r.prev=1,r.next=4,u.Z.get(e);case 4:if(t=r.sent,n=t.data.results.map((function(r){return{id:r.id,title:r.title,name:r.name}})),200!==t.status){r.next=8;break}return r.abrupt("return",n);case 8:r.next=13;break;case 10:return r.prev=10,r.t0=r.catch(1),r.abrupt("return",Promise.reject(new Error("Sorry something go wrong ;(")));case 13:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),r.prev=1,r.next=4,u.Z.get(t);case 4:if(n=r.sent,a=n.data.results.map((function(r){return{id:r.id,title:r.title}})),200!==n.status){r.next=8;break}return r.abrupt("return",a);case 8:r.next=13;break;case 10:return r.prev=10,r.t0=r.catch(1),r.abrupt("return",Promise.reject(new Error("Sorry something go wrong ;(")));case 13:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="".concat(o,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US"),r.prev=1,r.next=4,u.Z.get(t);case 4:if(n=r.sent,a=n.data,200!==n.status){r.next=8;break}return r.abrupt("return",a);case 8:r.next=13;break;case 10:return r.prev=10,r.t0=r.catch(1),r.abrupt("return",Promise.reject(new Error("Sorry something go wrong ")));case 13:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="".concat(o,"movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"),r.prev=1,r.next=4,u.Z.get(t);case 4:if(n=r.sent,a=n.data.cast.map((function(r){return{id:r.id,name:r.name,img:r.profile_path,character:r.character}})),200!==n.status){r.next=8;break}return r.abrupt("return",a);case 8:r.next=13;break;case 10:return r.prev=10,r.t0=r.catch(1),r.abrupt("return",Promise.reject(new Error("Sorry something go wrong ")));case 13:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),r.prev=1,r.next=4,u.Z.get(t);case 4:if(n=r.sent,a=n.data.results.map((function(r){return{id:r.id,url:r.url,author:r.author,content:r.content}})),200!==n.status){r.next=8;break}return r.abrupt("return",a);case 8:r.next=13;break;case 10:return r.prev=10,r.t0=r.catch(1),r.abrupt("return",Promise.reject(new Error("Sorry something go wrong ")));case 13:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(e){return r.apply(this,arguments)}}()},342:function(r,e,t){t.d(e,{s:function(){return u}});var n=t(689),a=t(87),c=t(184),u=function(r){var e=r.movies,t=(0,n.TH)();return(0,c.jsx)("ul",{children:e.map((function(r){return(0,c.jsx)("li",{children:(0,c.jsxs)(a.OL,{to:"/movies/".concat(r.id),state:{from:t},children:[r.title," ",r.name]})},r.id)}))})}},290:function(r,e,t){t.r(e),t.d(e,{Home:function(){return p}});var n=t(433),a=t(439),c="Home_container__w+u63",u=t(791),o=t(197),i=t(342),s=t(184),p=function(){var r=(0,u.useState)([]),e=(0,a.Z)(r,2),t=e[0],p=e[1];return(0,u.useEffect)((function(){(0,o._k)().then((function(r){p((0,n.Z)(r))})).catch((function(r){return console.log({error:r})}))}),[]),(0,s.jsxs)("section",{className:c,children:[(0,s.jsx)("h1",{children:"Trending to day"}),(0,s.jsx)(i.s,{movies:t})]})}}}]);
//# sourceMappingURL=290.2bd7baad.chunk.js.map