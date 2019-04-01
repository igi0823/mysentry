webpackJsonpexports([60],{1634:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"TeamCreate",function(){return d});var i,c,u=n(9),s=n(0),l=n.n(s),p=n(2),f=n(92),b=n(1716),m=n(125),h=n(6),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=(c=i=function(e){function t(){var e,n,a,i;r(this,t);for(var c=arguments.length,u=Array(c),s=0;s<c;s++)u[s]=arguments[s];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.handleSubmitSuccess=function(e){var t=new Set(a.context.organization.features),n=a.props.params.orgId,r="/organizations/"+n+"/projects/new/?team="+e.slug;t.has("new-teams")&&(r="/settings/"+n+"/teams/"+e.slug+"/"),a.props.router.push(r)},i=n,o(a,i)}return a(t,e),y(t,[{key:"getTitle",value:function(){return"Create Team"}},{key:"getEndpoints",value:function(){return[]}},{key:"renderBody",value:function(){return l.a.createElement(m.default,null,l.a.createElement("h3",null,Object(p.t)("Create a New Team")),l.a.createElement(b.a,{onSuccess:this.handleSubmitSuccess,organization:this.context.organization}))}}]),t}(f.default),i.contextTypes={organization:h.e.Organization},c);t.default=Object(u.withRouter)(d)},1716:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return g});var i,c,u=n(1),s=n.n(u),l=n(0),p=n.n(l),f=n(80),b=n(2),m=n(600),h=n(6),y=n(608),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=(c=i=function(e){function t(){var e,n,a,i;r(this,t);for(var c=arguments.length,u=Array(c),s=0;s<c;s++)u[s]=arguments[s];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.handleCreateTeamSuccess=function(e){Object(f.d)(Object(b.tct)("Added team [team]",{team:"#"+e.slug})),a.props.onSuccess(e)},i=n,o(a,i)}return a(t,e),d(t,[{key:"render",value:function(){var e=this.props.organization,t=new Set(e.features);return p.a.createElement(p.a.Fragment,null,p.a.createElement("p",null,Object(b.t)("Teams group members' access to a specific focus, e.g. a major product or application that may have sub-projects.")),p.a.createElement(m.a,{submitLabel:Object(b.t)("Create Team"),apiEndpoint:"/organizations/"+e.slug+"/teams/",apiMethod:"POST",onSubmit:this.props.onSubmit,onSubmitSuccess:this.handleCreateTeamSuccess,requireChanges:!0},t.has("new-teams")?p.a.createElement(y.a,{name:"slug",label:Object(b.t)("Team Slug"),placeholder:Object(b.t)("e.g. operations, web-frontend, desktop"),help:Object(b.t)("May contain lowercase letters, numbers, dashes and underscores."),required:!0,flexibleControlStateSize:!0,inline:!1,p:0}):p.a.createElement(y.a,{name:"name",label:Object(b.t)("Team Name"),placeholder:Object(b.t)("e.g. Operations, Web, Desktop"),required:!0,flexibleControlStateSize:!0,inline:!1,p:0})))}}]),t}(p.a.Component),i.propTypes={organization:h.e.Organization.isRequired,onSuccess:s.a.func.isRequired,onSubmit:s.a.func},c)}});
//# sourceMappingURL=TeamCreate.js.map