"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[452],{197:function(e,r,t){t.d(r,{Jh:function(){return h},QC:function(){return d},Sy:function(){return p},_k:function(){return u},z1:function(){return l}});var n=t(861),a=t(757),c=t.n(a),i=t(243),s="https://api.themoviedb.org/3/",o="b4e7b15a3300b6cccec91fe70cf6dc81",u=function(){var e=(0,n.Z)(c().mark((function e(){var r,t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s,"trending/all/day?api_key=").concat(o),e.prev=1,e.next=4,i.Z.get(r);case 4:if(t=e.sent,n=t.data.results.map((function(e){return{id:e.id,title:e.title,name:e.name}})),200!==t.status){e.next=8;break}return e.abrupt("return",n);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",Promise.reject(new Error("Sorry something go wrong ;(")));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"),e.prev=1,e.next=4,i.Z.get(t);case 4:if(n=e.sent,a=n.data.results.map((function(e){return{id:e.id,title:e.title}})),200!==n.status){e.next=8;break}return e.abrupt("return",a);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",Promise.reject(new Error("Sorry something go wrong ;(")));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"movie/").concat(r,"?api_key=").concat(o,"&language=en-US"),e.prev=1,e.next=4,i.Z.get(t);case 4:if(n=e.sent,a=n.data,200!==n.status){e.next=8;break}return e.abrupt("return",a);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",Promise.reject(new Error("Sorry something go wrong ")));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"movie/").concat(r,"/credits?api_key=").concat(o,"&language=en-US"),e.prev=1,e.next=4,i.Z.get(t);case 4:if(n=e.sent,a=n.data.cast.map((function(e){return{id:e.id,name:e.name,img:e.profile_path,character:e.character}})),200!==n.status){e.next=8;break}return e.abrupt("return",a);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",Promise.reject(new Error("Sorry something go wrong ")));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"movie/").concat(r,"/reviews?api_key=").concat(o,"&language=en-US&page=1"),e.prev=1,e.next=4,i.Z.get(t);case 4:if(n=e.sent,a=n.data.results.map((function(e){return{id:e.id,url:e.url,author:e.author,content:e.content}})),200!==n.status){e.next=8;break}return e.abrupt("return",a);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",Promise.reject(new Error("Sorry something go wrong ")));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(r){return e.apply(this,arguments)}}()},452:function(e,r,t){t.r(r),t.d(r,{default:function(){return m}});var n=t(439),a=t(197),c=t(0),i=t(87),s=t(184),o=function(e){var r=e.location;return(0,s.jsx)("button",{type:"button",children:(0,s.jsxs)(i.rU,{to:r,children:[(0,s.jsx)(c.k2h,{})," ",(0,s.jsx)("span",{children:" Go back "})]})})},u=t(791),l=t(689),p="MovieDetails_img__uOAom",d="MovieDetails_container__Ys+c9",h="MovieDetails_description__33mrB",v="MovieDetails_additionInfo__UU4P+",f="MovieDetails_card__pqAte";function m(){var e,r,t=(0,l.UO)().movieId,c=(0,u.useState)([]),m=(0,n.Z)(c,2),x=m[0],g=m[1],_=null!==(e=null===(r=(0,l.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies";(0,u.useEffect)((function(){(0,a.Sy)(t).then((function(e){g(e)}))}),[t]);var j=x.overview,b=x.poster_path,w=x.title,k=x.genres,y=x.vote_average,S=x.original_title,Z=k&&k.map((function(e){return e.name})).join(", ");return(0,s.jsxs)("section",{children:[(0,s.jsxs)("div",{className:d,children:[(0,s.jsx)(o,{location:_}),(0,s.jsxs)("div",{className:f,children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w500".concat(b),alt:w})}),(0,s.jsxs)("div",{className:h,children:[(0,s.jsx)("h1",{children:S}),(0,s.jsxs)("p",{children:["UserScore: ",Math.round(y),"/10"]}),(0,s.jsx)("h2",{children:"Overviews:"}),(0,s.jsx)("p",{children:j}),(0,s.jsx)("h2",{children:"Genres"}),(0,s.jsx)("p",{children:Z})]})]})]}),(0,s.jsxs)("div",{className:v,children:[(0,s.jsx)("span",{children:"Additional information"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(i.OL,{to:"/movies/".concat(t,"/credits"),state:{from:_},children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(i.OL,{to:"/movies/".concat(t,"/review"),state:{from:_},children:"Review"})})]}),(0,s.jsx)(l.j3,{})]})]})}}}]);
//# sourceMappingURL=452.d9cbe1bd.chunk.js.map