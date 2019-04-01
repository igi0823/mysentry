webpackJsonpexports([47],{1611:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),o=a(1),i=a.n(o),c=a(3),l=a.n(c),u=a(39),s=a(1799),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p=l()({displayName:"OrganizationRateLimits",propTypes:{routes:i.a.array},mixins:[u.a],render:function(){return this.context.organization?r.a.createElement(s.a,m({},this.props,{organization:this.context.organization})):null}});t.default=p},1799:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}a.d(t,"a",function(){return E});var i,c,l=a(27),u=a(14),s=a(1),m=a.n(s),p=a(0),f=a.n(p),b=a(2),d=a(602),h=a(600),j=a(18),y=a(637),O=a(52),g=a(81),v=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),x=function(){for(var e=[],t=0;t<=1e6;)e.push(t),t+=t<1e4?1e3:t<1e5?1e4:1e5;return e}(),E=(c=i=function(e){function t(){var e,a,o,i;n(this,t);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return a=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleSubmitSucces=function(){},i=a,r(o,i)}return o(t,e),v(t,[{key:"render",value:function(){var e=this.props.organization,t=e.quota,a=t.maxRate,n=t.maxRateInterval,r=t.projectLimit,o=t.accountLimit,i={projectRateLimit:r||100,accountRateLimit:o};return f.a.createElement("div",null,f.a.createElement(O.default,{title:Object(b.t)("Rate Limits")}),f.a.createElement(j.a,null,f.a.createElement(j.e,{disablePadding:!0},f.a.createElement(u.Box,{px:2,flex:"1"},Object(b.t)("Adjust Limits"))),f.a.createElement(j.c,null,f.a.createElement(j.b,{type:"info"},Object(b.t)("Rate limits allow you to control how much data is stored for this\n                organization. When a rate is exceeded the system will begin discarding\n                data until the next interval.")),f.a.createElement(h.a,{"data-test-id":"rate-limit-editor",saveOnBlur:!0,allowUndo:!0,apiMethod:"PUT",apiEndpoint:"/organizations/"+e.slug+"/",initialData:i},a?f.a.createElement(d.a,{label:Object(b.t)("Account Limit"),help:Object(b.t)("The maximum number of events to accept across this entire organization.")},f.a.createElement(g.default,{className:Object(l.css)({marginBottom:0})},Object(b.tct)("Your account is limited to a maximum of [maxRate] events per [maxRateInterval] seconds.",{maxRate:a,maxRateInterval:n}))):f.a.createElement(y.a,{name:"accountRateLimit",label:Object(b.t)("Account Limit"),min:0,max:1e6,allowedValues:x,help:Object(b.t)("The maximum number of events to accept across this entire organization."),placeholder:"e.g. 500",formatLabel:function(e){return e?Object(b.tct)("[number] per hour",{number:e.toLocaleString()}):Object(b.t)("No Limit")}}),f.a.createElement(y.a,{name:"projectRateLimit",label:Object(b.t)("Per-Project Limit"),help:Object(b.t)("The maximum percentage of your account limit an individual project can consume."),step:5,min:50,max:100,formatLabel:function(e){return 100!==e?e+"%":f.a.createElement("span",{dangerouslySetInnerHTML:{__html:Object(b.t)("No Limit")+" &mdash; 100%"}})}})))))}}]),t}(f.a.Component),i.propTypes={organization:m.a.object.isRequired},c)}});
//# sourceMappingURL=47.js.map