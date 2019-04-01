webpackJsonpexports([19],{1572:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return P});var a,u,c=n(27),s=n(14),l=n(1),f=n.n(l),p=n(0),h=n.n(p),d=n(5),y=n(2),b=n(1686),m=n(92),g=n(600),v=n(24),O=n(1637),w=n(53),j=n(18),_=n(52),k=n(1653),E=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),x={Alerts:{text:"Fine tune alerts by project",path:"alerts/"},"Workflow Notifications":{text:"Fine tune workflow notifications by project",path:"workflow/"},"Email Routing":{text:"Fine tune email routing by project",path:"email/"},"Weekly Reports":{text:"Fine tune weekly reports by organization",path:"reports/"},"Deploy Notifications":{text:"Fine tune deploy notifications by organization",path:"deploy/"}},P=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,t),E(e,[{key:"getEndpoints",value:function(){return[["data","/users/me/notifications/"]]}},{key:"getTitle",value:function(){return"Notifications"}},{key:"renderBody",value:function(){return h.a.createElement("div",null,h.a.createElement(_.default,{title:"Notifications"}),h.a.createElement(g.a,{initialData:this.state.data,saveOnBlur:!0,apiMethod:"PUT",apiEndpoint:"/users/me/notifications/"},h.a.createElement(s.Box,null,h.a.createElement(O.a,{forms:k.default,renderFooter:function(t){var e=t.title;return x[e]?h.a.createElement(A,x[e]):null}}),h.a.createElement(b.a,{to:"/settings/account/emails",icon:"icon-mail"},Object(y.t)("Looking to add or remove an email address? Use the emails panel.")))))}}]),e}(m.default),T=Object(d.default)(w.a,{target:"ezm0el70"})("display:flex;justify-content:space-between;padding:15px 20px;color:inherit;"),A=(u=a=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,t),E(e,[{key:"render",value:function(){var t=this.props,e=t.path,n=t.text;return h.a.createElement(j.d,{className:Object(c.css)({borderTop:"none"})},h.a.createElement(T,{to:"/settings/account/notifications/"+e},h.a.createElement("span",null,n),h.a.createElement(v.a,{src:"icon-chevron-right",size:"15px"})))}}]),e}(h.a.Component),a.propTypes={path:f.a.string.isRequired,text:f.a.string.isRequired},u)},1636:function(t,e){var n=Object.prototype.toString;t.exports=function(t){switch(n.call(t)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===t?"null":void 0===t?"undefined":t!==t?"nan":t&&1===t.nodeType?"element":typeof(t=t.valueOf?t.valueOf():Object.prototype.valueOf.apply(t))}},1637:function(t,e,n){"use strict";function o(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u,c,s,l,f,p=n(14),h=n(1),d=n.n(h),y=n(0),b=n.n(y),m=n(1638),g=n.n(m),v=n(10),O=n(601),w=n(18),j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},_=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),k=(c=u=function(t){function e(t){var n;i(this,e);for(var o=arguments.length,a=Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];var c=r(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(a)));return s.call(c),c.state={highlighted:c.getLocation(t).hash},c}return a(e,t),_(e,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentWillReceiveProps",value:function(t,e){if(this.getLocation(this.props).hash!==this.getLocation(t).hash){var n=this.getLocation(t).hash;this.scrollToHash(n),this.setState({highlighted:n})}}},{key:"scrollToHash",value:function(t){var e=t||this.getLocation(this.props).hash;e&&g()(e,{align:"middle",offset:-100})}},{key:"render",value:function(){var t=this.props,e=t.forms,n=t.title,i=t.fields,r=t.access,a=t.features,u=t.additionalFieldProps,c=t.renderFooter,s=t.renderHeader,l=(t.location,o(t,["forms","title","fields","access","features","additionalFieldProps","renderFooter","renderHeader","location"])),f=Object(v.d)(e),h={access:r,features:a,additionalFieldProps:u,renderFooter:c,renderHeader:s,highlighted:this.state.highlighted};return b.a.createElement(p.Box,l,f?e.map(function(t){return b.a.createElement(E,j({key:t.title,title:t.title,fields:t.fields},h))}):b.a.createElement(E,j({title:n,fields:i},h)))}}]),e}(b.a.Component),u.propTypes={forms:d.a.arrayOf(d.a.shape({title:d.a.string,fields:d.a.arrayOf(d.a.oneOfType([d.a.func,O.a.propTypes.field]))})),fields:d.a.arrayOf(d.a.oneOfType([d.a.func,O.a.propTypes.field])),title:d.a.string,access:d.a.object,features:d.a.object,additionalFieldProps:d.a.object,renderFooter:d.a.func,renderHeader:d.a.func},u.defaultProps={additionalFieldProps:{}},u.contextTypes={location:d.a.object},s=function(){var t=this;this.getLocation=function(e){return e.location||t.context.location||{}}},c);e.a=k;var E=(f=l=function(t){function e(){return i(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),_(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.title,i=e.fields,r=e.access,a=e.additionalFieldProps,u=e.renderFooter,c=e.renderHeader,s=(e.location,o(e,["title","fields","access","additionalFieldProps","renderFooter","renderHeader","location"])),l="function"==typeof u,f="function"==typeof c;return b.a.createElement(w.a,{key:n,id:n},b.a.createElement(w.e,null,n),b.a.createElement(w.c,null,f&&c({title:n,fields:i}),i.map(function(e){if("function"==typeof e)return e();var n=(e.defaultValue,o(e,["defaultValue"]));return b.a.createElement(O.a,j({access:r,key:e.name},s,a,{field:n,highlighted:t.props.highlighted==="#"+e.name}))}),l&&u({title:n,fields:i})))}}]),e}(b.a.Component),l.propTypes={title:d.a.string,fields:d.a.arrayOf(d.a.oneOfType([d.a.func,O.a.propTypes.field])),access:d.a.object,additionalFieldProps:d.a.object,highlighted:d.a.string,renderHeader:d.a.func,renderFooter:d.a.func},f)},1638:function(t,e,n){function o(t,e,n){var o=document.body,i=document.documentElement,r=t.getBoundingClientRect(),a=i.clientHeight,u=Math.max(o.scrollHeight,o.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight);e=e||0;var c;c="bottom"===n?r.bottom-a:"middle"===n?r.bottom-a/2-r.height/2:r.top;var s=u-a;return Math.min(c+e+window.pageYOffset,s)}var i=n(1639);t.exports=function(t,e){if(e=e||{},"string"==typeof t&&(t=document.querySelector(t)),t)return i(0,o(t,e.offset,e.align),e)}},1639:function(t,e,n){function o(t,e,n){function o(){a(o),c.update()}n=n||{};var u=i(),c=r(u).ease(n.ease||"out-circ").to({top:e,left:t}).duration(n.duration||1e3);return c.update(function(t){window.scrollTo(0|t.left,0|t.top)}),c.on("end",function(){o=function(){}}),o(),c}function i(){return{top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft}}var r=n(1640),a=n(1644);t.exports=o},1640:function(t,e,n){function o(t){if(!(this instanceof o))return new o(t);this._from=t,this.ease("linear"),this.duration(500)}var i=n(1641),r=n(1642),a=n(1636),u=n(1643);t.exports=o,i(o.prototype),o.prototype.reset=function(){return this.isArray="array"===a(this._from),this._curr=r(this._from),this._done=!1,this._start=Date.now(),this},o.prototype.to=function(t){return this.reset(),this._to=t,this},o.prototype.duration=function(t){return this._duration=t,this},o.prototype.ease=function(t){if(!(t="function"==typeof t?t:u[t]))throw new TypeError("invalid easing function");return this._ease=t,this},o.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},o.prototype.step=function(){if(!this._done){var t=this._duration,e=Date.now();if(e-this._start>=t)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,o=this._to,i=this._curr,r=this._ease,a=(e-this._start)/t,u=r(a);if(this.isArray){for(var c=0;c<n.length;++c)i[c]=n[c]+(o[c]-n[c])*u;return this._update(i),this}for(var s in n)i[s]=n[s]+(o[s]-n[s])*u;return this._update(i),this}},o.prototype.update=function(t){return 0==arguments.length?this.step():(this._update=t,this)}},1641:function(t,e){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var o,i=0;i<n.length;i++)if((o=n[i])===e||o.fn===e){n.splice(i,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var o=0,i=n.length;o<i;++o)n[o].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},1642:function(t,e,n){function o(t){switch(i(t)){case"object":var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=o(t[n]));return e;case"array":for(var e=new Array(t.length),r=0,a=t.length;r<a;r++)e[r]=o(t[r]);return e;case"regexp":var u="";return u+=t.multiline?"m":"",u+=t.global?"g":"",u+=t.ignoreCase?"i":"",new RegExp(t.source,u);case"date":return new Date(t.getTime());default:return t}}var i;try{i=n(1636)}catch(t){i=n(1636)}t.exports=o},1643:function(t,e){e.linear=function(t){return t},e.inQuad=function(t){return t*t},e.outQuad=function(t){return t*(2-t)},e.inOutQuad=function(t){return t*=2,t<1?.5*t*t:-.5*(--t*(t-2)-1)},e.inCube=function(t){return t*t*t},e.outCube=function(t){return--t*t*t+1},e.inOutCube=function(t){return t*=2,t<1?.5*t*t*t:.5*((t-=2)*t*t+2)},e.inQuart=function(t){return t*t*t*t},e.outQuart=function(t){return 1- --t*t*t*t},e.inOutQuart=function(t){return t*=2,t<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},e.inQuint=function(t){return t*t*t*t*t},e.outQuint=function(t){return--t*t*t*t*t+1},e.inOutQuint=function(t){return t*=2,t<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},e.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},e.outSine=function(t){return Math.sin(t*Math.PI/2)},e.inOutSine=function(t){return.5*(1-Math.cos(Math.PI*t))},e.inExpo=function(t){return 0==t?0:Math.pow(1024,t-1)},e.outExpo=function(t){return 1==t?t:1-Math.pow(2,-10*t)},e.inOutExpo=function(t){return 0==t?0:1==t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},e.inCirc=function(t){return 1-Math.sqrt(1-t*t)},e.outCirc=function(t){return Math.sqrt(1- --t*t)},e.inOutCirc=function(t){return t*=2,t<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.inBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.outBack=function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},e.inOutBack=function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},e.inBounce=function(t){return 1-e.outBounce(1-t)},e.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.inOutBounce=function(t){return t<.5?.5*e.inBounce(2*t):.5*e.outBounce(2*t-1)+.5},e["in-quad"]=e.inQuad,e["out-quad"]=e.outQuad,e["in-out-quad"]=e.inOutQuad,e["in-cube"]=e.inCube,e["out-cube"]=e.outCube,e["in-out-cube"]=e.inOutCube,e["in-quart"]=e.inQuart,e["out-quart"]=e.outQuart,e["in-out-quart"]=e.inOutQuart,e["in-quint"]=e.inQuint,e["out-quint"]=e.outQuint,e["in-out-quint"]=e.inOutQuint,e["in-sine"]=e.inSine,e["out-sine"]=e.outSine,e["in-out-sine"]=e.inOutSine,e["in-expo"]=e.inExpo,e["out-expo"]=e.outExpo,e["in-out-expo"]=e.inOutExpo,e["in-circ"]=e.inCirc,e["out-circ"]=e.outCirc,e["in-out-circ"]=e.inOutCirc,e["in-back"]=e.inBack,e["out-back"]=e.outBack,e["in-out-back"]=e.inOutBack,e["in-bounce"]=e.inBounce,e["out-bounce"]=e.outBounce,e["in-out-bounce"]=e.inOutBounce},1644:function(t,e){function n(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-o)),i=setTimeout(t,n);return o=e,i}e=t.exports=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||n;var o=(new Date).getTime(),i=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout;e.cancel=function(t){i.call(window,t)}},1653:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"route",function(){return i}),n.d(e,"fields",function(){return r});var o=n(2),i="/settings/account/notifications/",r={subscribeByDefault:{name:"subscribeByDefault",type:"boolean",label:Object(o.t)("Send Me Project Alerts"),help:Object(o.tct)("Alerts are defined in [locationPath]",{locationPath:"[Project] » Project Settings » Alerts » Rules."})},workflowNotifications:{name:"workflowNotifications",type:"radio",label:Object(o.t)("Send Me Workflow Notifications"),choices:[[0,"Always"],[1,"Only On Issues I Subscribe To"],[2,"Never"]],help:Object(o.t)("E.g. changes in issue assignment, resolution status, and comments.")},weeklyReports:{name:"weeklyReports",type:"boolean",label:Object(o.t)("Send Me Weekly Reports"),help:Object(o.t)("Reports contain a summary of what's happened within your organization."),disabled:!0},deployNotifications:{name:"deployNotifications",type:"radio",label:Object(o.t)("Send Me Deploy Notifications"),choices:[[2,"Always"],[3,"Only On Deploys With My Commits"],[4,"Never"]],help:Object(o.t)("Deploy emails include release, environment and commit overviews.")},personalActivityNotifications:{name:"personalActivityNotifications",type:"boolean",label:Object(o.t)("Notify Me About My Own Activity"),help:Object(o.t)("Enable this to receive notifications about your own actions on Sentry.")},selfAssignOnResolve:{name:"selfAssignOnResolve",type:"boolean",label:Object(o.t)("Claim Unassigned Issues I've Resolved"),help:Object(o.t)("You'll receive notifications about any changes that happen afterwards.")}},a=[{title:Object(o.t)("Alerts"),fields:[r.subscribeByDefault]},{title:Object(o.t)("Workflow Notifications"),fields:[r.workflowNotifications]},{title:Object(o.t)("Email Routing"),fields:[]},{title:Object(o.t)("Weekly Reports"),fields:[r.weeklyReports]},{title:Object(o.t)("Deploy Notifications"),fields:[r.deployNotifications]},{title:Object(o.t)("My Activity"),fields:[r.personalActivityNotifications,r.selfAssignOnResolve]}];e.default=a},1686:function(t,e,n){"use strict";function o(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}var i=n(5),r=n(1),a=n.n(r),u=n(0),c=n.n(u),s=n(53),l=n(24),f=n(38),p=Object(i.default)("div",{target:"e1fthm6j0"})("flex-grow:1;"),h=Object(i.default)(l.a,{target:"e1fthm6j1"})("margin-right:0.75em;"),d=Object(i.default)(function(t){var e=t.children,n=t.icon,i=o(t,["children","icon"]);return c.a.createElement(s.a,i,n&&c.a.createElement(h,{src:n,size:"1.5em"}),c.a.createElement(p,null,e),c.a.createElement(l.a,{src:"icon-chevron-right",size:"1em"}))},{target:"e1fthm6j2"})("display:flex;align-items:center;background-color:",function(t){return t.theme.yellowLightest},";color:",function(t){return t.theme.gray5},";border:1px dashed ",function(t){return t.theme.borderDark},";padding:",Object(f.a)(2),";margin-bottom:",Object(f.a)(3),";border-radius:0.25em;transition:0.2s border-color;&:hover{border-color:",function(t){return t.theme.blueLight},";}");d.propTypes={to:a.a.string,href:a.a.string,icon:a.a.string},e.a=d}});
//# sourceMappingURL=AccountNotifications.js.map