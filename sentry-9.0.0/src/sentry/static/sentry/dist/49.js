webpackJsonpexports([49],{1606:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,c,s=n(9),l=n(0),u=n.n(l),p=n(46),f=n(80),y=n(2),b=n(92),m=n(6),d=n(148),h=n(1792),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=(c=i=function(e){function t(){var e,n,o,i;r(this,t);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleRemove=function(e,t){(new p.Client).request("/organizations/"+o.props.params.orgId+"/api-keys/"+e+"/",{method:"DELETE",data:{},success:function(t){o.setState(function(t){return{keys:t.keys.filter(function(t){return t.id!==e})}})},error:function(){o.setState({busy:!1})}})},o.handleAddApiKey=function(){var e=new p.Client;o.setState({busy:!0}),e.request("/organizations/"+o.props.params.orgId+"/api-keys/",{method:"POST",data:{},success:function(e){o.setState({busy:!1}),s.browserHistory.push(Object(d.a)(e.id+"/",{params:o.props.params,routes:o.props.routes})),Object(f.d)(Object(y.t)('Created a new API key "'+e.label+'"'))},error:function(){o.setState({busy:!1})}})},i=n,a(o,i)}return o(t,e),O(t,[{key:"getEndpoints",value:function(){return[["keys","/organizations/"+this.props.params.orgId+"/api-keys/"]]}},{key:"getTitle",value:function(){return this.context.organization.name+" API Keys"}},{key:"renderBody",value:function(){return u.a.createElement(h.a,g({busy:this.state.busy,keys:this.state.keys,organization:this.context.organization,onRemove:this.handleRemove,onAddApiKey:this.handleAddApiKey},this.props))}}]),t}(b.default),i.contextTypes={organization:m.e.Organization},c);t.default=v},1792:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i,c,s=n(14),l=n(1),u=n.n(l),p=n(0),f=n.n(p),y=n(2),b=n(26),m=n(178),d=n(71),h=n(53),g=n(183),O=n(18),v=n(52),E=n(81),j=n(148),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),w=(c=i=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),k(t,[{key:"render",value:function(){var e=this.props,t=e.params,n=e.routes,r=e.keys,a=e.busy,o=e.onAddApiKey,i=e.onRemove,c=r&&r.length,l=f.a.createElement(b.default,{priority:"primary",size:"small",icon:"icon-circle-add",busy:a,disabled:a,onClick:o},Object(y.t)("New API Key"));return f.a.createElement("div",null,f.a.createElement(v.default,{title:Object(y.t)("API Keys"),action:l}),f.a.createElement(E.default,null,Object(y.tct)("API keys grant access to the [api:developer web API].\n          If you're looking to configure a Sentry client, you'll need a\n          client key which is available in your project settings.",{api:f.a.createElement(d.a,{href:"https://docs.sentry.io/hosted/api/"})})),f.a.createElement("div",{className:"alert alert-block alert-info"},Object(y.tct)("psst. Until Sentry supports OAuth, you might want to switch to using [tokens:Auth Tokens] instead.",{tokens:f.a.createElement(h.a,{to:"/api/"})})),f.a.createElement(O.a,null,f.a.createElement(O.e,{disablePadding:!0,align:"center"},f.a.createElement(s.Flex,{align:"center",flex:"1"},f.a.createElement(s.Box,{px:2,flex:"1"},Object(y.t)("Name")),f.a.createElement(s.Box,{px:2,flex:"2"},Object(y.t)("Key"))),f.a.createElement(s.Box,{px:2,w:100},Object(y.t)("Actions"))),f.a.createElement(O.c,null,!c&&f.a.createElement(m.a,null,Object(y.t)("No API keys for this organization")),r&&r.map(function(e){var r=e.id,a=e.key,o=e.label,c=Object(j.a)(r+"/",{params:t,routes:n});return f.a.createElement(O.f,{align:"center",p:0,py:1,key:r},f.a.createElement(s.Flex,{align:"center",flex:"1"},f.a.createElement(s.Box,{px:2,flex:"1",align:"center"},f.a.createElement(h.a,{to:c},o)),f.a.createElement(s.Box,{px:2,flex:"2"},f.a.createElement("div",{className:"form-control disabled auto-select"},a))),f.a.createElement(s.Box,{px:2,w:100},f.a.createElement(g.a,{className:"btn btn-default btn-sm",onConfirm:function(e){return i(r,e)},message:Object(y.t)("Are you sure you want to remove this API key?"),title:Object(y.t)("Remove API Key?")},f.a.createElement("span",{className:"icon-trash"}))))}))))}}]),t}(f.a.Component),i.propTypes={routes:u.a.array,keys:u.a.array,busy:u.a.bool,onRemove:u.a.func,onAddApiKey:u.a.func},c);t.a=w}});
//# sourceMappingURL=49.js.map