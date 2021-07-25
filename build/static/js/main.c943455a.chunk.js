(this["webpackJsonpreact-gallery-app"]=this["webpackJsonpreact-gallery-app"]||[]).push([[0],{34:function(e,t,a){e.exports=a(63)},39:function(e,t,a){},40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),l=a(6),s=a(7),i=(a(39),a(10)),u=a(30),m=a(11),h=a(12),p=a(14),f=a(13),d=a(15),b=(a(40),a(31)),v=a.n(b),E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=a.search.value,n="/".concat(t);a.props.onSearch(t),t="",a.props.history.push(n)},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",name:"search",placeholder:"Search",required:!0,ref:function(t){e.search=t}}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))}}]),t}(n.Component),g=function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/beach"},"Beach")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/mountain"},"Mountain")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/desert"},"Desert"))))},y=function(e){var t=e.id,a=e.secret,n=e.farmID,c=e.serverID,o=e.title;return r.a.createElement("li",null,r.a.createElement("img",{src:"https://farm".concat(n,".staticflickr.com/").concat(c,"/").concat(t,"_").concat(a,".jpg"),alt:o}))},k=function(e){var t=e.query;return r.a.createElement("li",{className:"not-found"},r.a.createElement("h3",null,"No Results Found for ",t," "),r.a.createElement("p",null,"You search did not return any results. Please try again."))},w=function(e){var t=e.data,a=Object(s.g)().search;"React-Gallery-App"===a&&(a="mountain");var n=t["".concat(a)],c="";n&&(c=n.map((function(e){return r.a.createElement(y,{id:e.id,farmID:e.farm,serverID:e.server,secret:e.secret,title:e.title,key:e.id})})));var o=c.length;return r.a.createElement("div",{className:"photo-container"},r.a.createElement("h2",null,o?a:"Loading..."),r.a.createElement("ul",null,o?c:r.a.createElement(k,{query:a})))},j="74fcdb2463833cef3183446eb315d145",O=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={images:{beach:[],mountain:[],desert:[]}},a.requestFlickrURLs=function(e){v.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(j,"&tags=").concat(e,"&per_page=24&format=json&nojsoncallback=1&sort=relevance")).then((function(t){"object"===typeof t.data&&a.setState((function(a){return{images:Object(u.a)({},a.images,Object(i.a)({},e,t.data.photos.photo))}}))})).catch((function(e){console.log(e)}))},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.requestFlickrURLs("beach"),this.requestFlickrURLs("mountain"),this.requestFlickrURLs("desert");var e=this.props.location.pathname.slice(1);e&&this.requestFlickrURLs(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(s.b,{path:"/",render:function(t){return r.a.createElement(E,Object.assign({},t,{onSearch:e.requestFlickrURLs}))}}),r.a.createElement(s.b,{path:"/",component:g}),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(s.a,{to:"/beach"})),r.a.createElement(s.b,{path:"/:search",render:function(){return r.a.createElement(w,{data:e.state.images})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,null,r.a.createElement(s.b,{path:"/",component:O})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.c943455a.chunk.js.map