webpackJsonpexports([51],{1607:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s,l=a(9),p=a(0),c=a.n(p),u=a(102),f=a(80),h=a(2),m=a(418),d=a(633),b=a(92),y=a(6),v=a(1793),g=a(222),O=a(275),E=a(148),j=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),w=u.b.map(function(e){return[e,e]}),S=(s=i=function(e){function t(){var e,a,o,i;r(this,t);for(var s=arguments.length,p=Array(s),c=0;c<s;c++)p[c]=arguments[c];return a=o=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),o.handleSubmitSuccess=function(){Object(f.d)("Saved changes"),l.browserHistory.push(Object(E.a)("",{stepBack:-1,routes:o.props.routes,params:o.props.params}))},o.handleSubmitError=function(){Object(f.a)("Unable to save changes. Please try again.")},i=a,n(o,i)}return o(t,e),j(t,[{key:"getDefaultState",value:function(){return{loading:!0,error:!1,apiKey:{}}}},{key:"componentWillReceiveProps",value:function(e){e.location.search===this.props.location.search&&e.params.orgId===this.props.params.orgId||this.remountComponent()}},{key:"getEndpoints",value:function(){return[["apiKey","/organizations/"+this.props.params.orgId+"/api-keys/"+this.props.params.apiKey+"/"]]}},{key:"getTitle",value:function(){return this.context.organization.name+" Edit API Key"}},{key:"renderBody",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"page-header"},c.a.createElement("h3",null,Object(h.t)("Edit Api Key"))),c.a.createElement(m.default,{apiMethod:"PUT",apiEndpoint:"/organizations/"+this.props.params.orgId+"/api-keys/"+this.props.params.apiKey+"/",initialData:this.state.apiKey,onSubmitSuccess:this.handleSubmitSuccess,onSubmitError:this.handleSubmitError,onCancel:function(){return l.browserHistory.push(Object(E.a)("",{stepBack:-1,routes:e.props.routes,params:e.props.params}))}},c.a.createElement(v.a,{splitWidth:15},c.a.createElement(g.default,{label:Object(h.t)("Label"),name:"label"}),c.a.createElement(g.default,{label:Object(h.t)("API Key"),name:"key",disabled:!0})),c.a.createElement(d.a,{className:"api-key-details",name:"scope_list",label:Object(h.t)("Scopes"),required:!0,choices:w}),c.a.createElement(O.default,{label:Object(h.t)("Allowed Domains"),name:"allowed_origins",placeholder:"e.g. example.com or https://example.com",help:"Separate multiple entries with a newline"})))}}]),t}(b.default),i.contextTypes={organization:y.e.Organization},s);t.default=S},1793:function(e,t,a){"use strict";function r(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}var n=a(1),o=a.n(n),i=a(0),s=a.n(i),l=a(12),p=a.n(l),c=a(127),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},f=function(e){var t=e.children,a=e.className,n=e.responsive,o=e.splitWidth,i=r(e,["children","className","responsive","splitWidth"]),l=p()("split-layout",a,{"allow-responsive":n}),f=0,h=s.a.Children.count(t);return s.a.createElement(c.a,u({},i,{className:l}),s.a.Children.map(t,function(e){var t=e&&e.props||{};f++;var a=f===h;return s.a.cloneElement(e,{style:u({marginRight:a?void 0:o},e.props&&e.props.style||{}),className:p()(t.className,"split-layout-child")})}))};f.propTypes={children:o.a.node,splitWidth:o.a.number,responsive:o.a.bool},t.a=f}});
//# sourceMappingURL=51.js.map