webpackJsonpexports([43],{1570:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o,c,i=a(1),u=a.n(i),s=a(0),d=a.n(s),p=a(18),f=a(10),b=a(2),m=a(15),v=a(11),j=a(54),h=a(1773),g=a(213),y=a(81),E=a(1739),O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},w=function(){function e(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&c.return&&c.return()}finally{if(n)throw l}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),T=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),k=(c=o=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),T(t,[{key:"renderTooltip",value:function(e,t,a){var r=a.getTimeLabel(e),n=w(e.y,3),l=n[0],o=n[1],c=n[2],i=Object(f.k)(l)+" accepted";return o&&(i+="<br>"+Object(f.k)(o)+" rate limited"),c&&(i+="<br>"+Object(f.k)(c)+" filtered"),'<div style="width:150px"><div class="time-label">'+r+'</div><div class="value-label">'+i+"</div></div>"}},{key:"render",value:function(){var e=this.props,t=e.statsLoading,a=e.orgTotal,r=e.statsError,n=e.orgStats,l=e.projectsLoading,o=e.projectTotals,c=e.projectMap,i=e.projectsError,u=e.pageLinks,s=e.organization;return d.a.createElement("div",null,d.a.createElement("h4",null,Object(b.t)("Organization Stats")),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-9"},d.a.createElement(y.default,null,Object(b.t)("The chart below reflects events the system has received\n            across your entire organization. Events are broken down into\n            three categories: Accepted, Rate Limited, and Filtered. Rate\n            Limited events are entries that the system threw away due to quotas\n            being hit, and Filtered events are events that were blocked\n            due to your inbound data filter rules."))),!t&&d.a.createElement("div",{className:"col-md-3 stats-column"},d.a.createElement("h6",{className:"nav-header"},Object(b.t)("Events per minute")),d.a.createElement("p",{className:"count"},a.avgRate))),d.a.createElement("div",null,t?d.a.createElement(v.default,null):r?d.a.createElement(m.default,{onRetry:this.fetchData}):d.a.createElement(p.a,{className:"bar-chart"},d.a.createElement(g.default,{points:n,height:150,label:"events",className:"standard-barchart b-a-0 m-b-0",barClasses:["accepted","rate-limited","black-listed"],tooltip:this.renderTooltip}))),d.a.createElement(p.a,null,d.a.createElement(p.e,null,d.a.createElement(E.b,null,d.a.createElement("div",null,Object(b.t)("Project")),d.a.createElement(E.a,null,Object(b.t)("Accepted")),d.a.createElement(E.a,null,Object(b.t)("Rate Limited")),d.a.createElement(E.a,null,Object(b.t)("Filtered")),d.a.createElement(E.a,null,Object(b.t)("Total")))),d.a.createElement(p.c,null,t||l?d.a.createElement(v.default,null):i?d.a.createElement(m.default,{onRetry:this.fetchData}):d.a.createElement(h.a,{projectTotals:o,orgTotal:a,organization:s,projectMap:c}))),u&&d.a.createElement(j.default,O({pageLinks:u},this.props)))}}]),t}(d.a.Component),o.propTypes={statsLoading:u.a.bool,projectsLoading:u.a.bool,orgTotal:u.a.object,statsError:u.a.oneOfType([u.a.bool,u.a.object]),orgStats:u.a.array,projectTotals:u.a.array,projectMap:u.a.object,projectsError:u.a.oneOfType([u.a.bool,u.a.object]),pageLinks:u.a.string,organization:u.a.object},c);t.default=k},1739:function(e,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"a",function(){return c});var r=a(5),n=a(38),l=a(181),o=Object(r.default)("div",{target:"e4ip61b0"})("display:grid;grid-template-columns:auto 110px 120px 100px 100px;width:100%;"),c=Object(r.default)("div",{target:"e4ip61b1"})("text-align:right;padding:0 ",Object(n.a)(.5),";",l.a,";")},1773:function(e,t,a){"use strict";function r(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}var n=a(9),l=a(1),o=a.n(l),c=a(0),i=a.n(c),u=a(5),s=a(1739),d=a(82),p=a(38),f=function(e){var t=e.projectMap,a=e.projectTotals,r=e.orgTotal,l=e.organization,o=function(e,t){return 0===t?"":0===e?"0%":parseInt(e/t*100,10)+"%"},c=new Set(l.features);return a?a.sort(function(e,t){return t.received-e.received}).map(function(e,a){var u=t[e.id];return u?i.a.createElement(m,{key:a},i.a.createElement(b,null,i.a.createElement(n.Link,{to:"/"+l.slug+"/"+u.slug+"/"},c.has("new-teams")?u.slug:u.team.name+" / "+u.name)),i.a.createElement(s.a,null,i.a.createElement(d.default,{value:e.accepted}),i.a.createElement(v,null,o(e.accepted,r.accepted))),i.a.createElement(s.a,null,i.a.createElement(d.default,{value:e.rejected}),i.a.createElement(v,null,o(e.rejected,r.rejected))),i.a.createElement(s.a,null,i.a.createElement(d.default,{value:e.blacklisted}),i.a.createElement(v,null,o(e.blacklisted,r.blacklisted))),i.a.createElement(s.a,null,i.a.createElement(d.default,{value:e.received}),i.a.createElement(v,null,o(e.received,r.received)))):null}):i.a.createElement("div",null)};f.propTypes={projectMap:o.a.object.isRequired,projectTotals:o.a.array.isRequired,orgTotal:o.a.object.isRequired,organization:o.a.object.isRequired};var b=Object(u.default)(s.a,{target:"encwylx0"})("display:flex;align-items:center;text-align:left;"),m=Object(u.default)(s.b,{target:"encwylx1"})("padding:",Object(p.a)(2),";&:not(:last-child){border-bottom:1px solid ",function(e){return e.theme.borderLight},";}"),v=Object(u.default)(function(e){var t=e.children,a=r(e,["children"]);return""!==t&&i.a.createElement("div",a,t)},{target:"encwylx2"})("margin-top:",Object(p.a)(.25),";color:",function(e){return e.theme.gray2},";font-size:12px;line-height:1.2;");t.a=f}});
//# sourceMappingURL=organizationStats.js.map