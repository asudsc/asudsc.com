(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{294:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return c}));var o=e(1),r=e.n(o),a=e(466);var c=function(t){var n,e;function o(n){return t.call(this,n)||this}return e=t,(n=o).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,o.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement(a.a,null))},o}(r.a.Component)},466:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));e(31);var o=e(1),r=e.n(o),a=e(289),c=e.n(a),s=e(291);e(585);var u=function(t){var n,e;function o(n){var e;return(e=t.call(this,n)||this).state={events:[]},e}e=t,(n=o).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e;var a=o.prototype;return a.componentDidMount=function(){var t=this;c.a.get().then((function(n){for(var e=[],o=0;o<n.length;o++)console.log("COOL",n[o].start),n[o].start>=Date.now()&&e.push(n[o]);t.setState({events:e})})).catch((function(t){console.log("Error fetching events!"),console.log(t)}))},a.render=function(){return r.a.createElement("div",{class:"events-list"},r.a.createElement("h2",null,"Upcoming Events"),this.state.events.map((function(t){return t.start>=Date.now()&&r.a.createElement(s.a,{id:t.id,name:t.name,start:t.start,end:t.end,location:t.location,map_url:t.map_url})})))},o}(r.a.Component)}}]);
//# sourceMappingURL=component---src-pages-events-js-78f859d78ba2607de0cd.js.map