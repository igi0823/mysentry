webpackJsonpexports([18],{1588:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return x});var a,u,c=n(0),s=n.n(c),l=n(2),f=n(1686),p=n(92),d=n(26),h=n(600),b=n(1637),m=n(122),g=n(18),y=n(405),v=n(6),O=n(52),j=n(1666),w=n(148),_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},E=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),x=(u=a=function(t){function e(){var t,n,o,a;r(this,e);for(var u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];return n=o=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),o.handleSaveSuccess=function(){},o.handleEnablePlugin=function(t){o.setState({pluginList:o.state.pluginList.map(function(e){return e.id!==t.id?e:_({},t,{enabled:!0})})})},o.handleDisablePlugin=function(t){o.setState({pluginList:o.state.pluginList.map(function(e){return e.id!==t.id?e:_({},t,{enabled:!1})})})},a=n,i(o,a)}return o(e,t),E(e,[{key:"getEndpoints",value:function(){var t=this.props.params,e=t.orgId,n=t.projectId;return[["project","/projects/"+e+"/"+n+"/"],["pluginList","/projects/"+e+"/"+n+"/plugins/"]]}},{key:"getTitle",value:function(){return"Project Alert Settings"}},{key:"renderBody",value:function(){var t=this.props.params,e=t.orgId,n=t.projectId,r=this.props.organization;return s.a.createElement(s.a.Fragment,null,s.a.createElement(O.default,{title:Object(l.t)("Alerts"),action:s.a.createElement(d.default,{to:Object(w.a)("rules/new/",this.props),priority:"primary",size:"small",icon:"icon-circle-add"},Object(l.t)("New Alert Rule")),tabs:s.a.createElement("ul",{className:"nav nav-tabs",style:{borderBottom:"1px solid #ddd"}},s.a.createElement(m.default,{to:Object(w.a)("",this.props),index:!0},Object(l.t)("Settings")),s.a.createElement(m.default,{to:Object(w.a)("rules/",this.props)},Object(l.t)("Rules")))}),s.a.createElement(f.a,{to:"/settings/account/notifications/",icon:"icon-mail"},Object(l.t)("Looking to fine-tune your personal notification preferences? Visit your Account Settings")),s.a.createElement(h.a,{saveOnBlur:!0,allowUndo:!0,initialData:{subjectTemplate:this.state.project.subjectTemplate,digestsMinDelay:this.state.project.digestsMinDelay,digestsMaxDelay:this.state.project.digestsMaxDelay},apiMethod:"PUT",apiEndpoint:"/projects/"+e+"/"+n+"/"},s.a.createElement(b.a,{title:Object(l.t)("Email Settings"),fields:[j.fields.subjectTemplate]}),s.a.createElement(b.a,{title:Object(l.t)("Digests"),fields:[j.fields.digestsMinDelay,j.fields.digestsMaxDelay],renderHeader:function(){return s.a.createElement(g.b,{type:"info"},Object(l.t)("Sentry will automatically digest alerts sent by some services to avoid flooding your inbox with individual issue notifications. To control how frequently notifications are delivered, use the sliders below."))}})),s.a.createElement(y.a,{organization:r,project:this.state.project,pluginList:this.state.pluginList.filter(function(t){return"notification"===t.type&&t.hasConfiguration}),onEnablePlugin:this.handleEnablePlugin,onDisablePlugin:this.handleDisablePlugin}))}}]),e}(p.default),a.propTypes=_({},p.default.propTypes,{organization:v.e.Organization,project:v.e.Project}),u)},1636:function(t,e){var n=Object.prototype.toString;t.exports=function(t){switch(n.call(t)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===t?"null":void 0===t?"undefined":t!==t?"nan":t&&1===t.nodeType?"element":typeof(t=t.valueOf?t.valueOf():Object.prototype.valueOf.apply(t))}},1637:function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u,c,s,l,f,p=n(14),d=n(1),h=n.n(d),b=n(0),m=n.n(b),g=n(1638),y=n.n(g),v=n(10),O=n(601),j=n(18),w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),E=(c=u=function(t){function e(t){var n;i(this,e);for(var r=arguments.length,a=Array(r>1?r-1:0),u=1;u<r;u++)a[u-1]=arguments[u];var c=o(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(a)));return s.call(c),c.state={highlighted:c.getLocation(t).hash},c}return a(e,t),_(e,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentWillReceiveProps",value:function(t,e){if(this.getLocation(this.props).hash!==this.getLocation(t).hash){var n=this.getLocation(t).hash;this.scrollToHash(n),this.setState({highlighted:n})}}},{key:"scrollToHash",value:function(t){var e=t||this.getLocation(this.props).hash;e&&y()(e,{align:"middle",offset:-100})}},{key:"render",value:function(){var t=this.props,e=t.forms,n=t.title,i=t.fields,o=t.access,a=t.features,u=t.additionalFieldProps,c=t.renderFooter,s=t.renderHeader,l=(t.location,r(t,["forms","title","fields","access","features","additionalFieldProps","renderFooter","renderHeader","location"])),f=Object(v.d)(e),d={access:o,features:a,additionalFieldProps:u,renderFooter:c,renderHeader:s,highlighted:this.state.highlighted};return m.a.createElement(p.Box,l,f?e.map(function(t){return m.a.createElement(x,w({key:t.title,title:t.title,fields:t.fields},d))}):m.a.createElement(x,w({title:n,fields:i},d)))}}]),e}(m.a.Component),u.propTypes={forms:h.a.arrayOf(h.a.shape({title:h.a.string,fields:h.a.arrayOf(h.a.oneOfType([h.a.func,O.a.propTypes.field]))})),fields:h.a.arrayOf(h.a.oneOfType([h.a.func,O.a.propTypes.field])),title:h.a.string,access:h.a.object,features:h.a.object,additionalFieldProps:h.a.object,renderFooter:h.a.func,renderHeader:h.a.func},u.defaultProps={additionalFieldProps:{}},u.contextTypes={location:h.a.object},s=function(){var t=this;this.getLocation=function(e){return e.location||t.context.location||{}}},c);e.a=E;var x=(f=l=function(t){function e(){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),_(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.title,i=e.fields,o=e.access,a=e.additionalFieldProps,u=e.renderFooter,c=e.renderHeader,s=(e.location,r(e,["title","fields","access","additionalFieldProps","renderFooter","renderHeader","location"])),l="function"==typeof u,f="function"==typeof c;return m.a.createElement(j.a,{key:n,id:n},m.a.createElement(j.e,null,n),m.a.createElement(j.c,null,f&&c({title:n,fields:i}),i.map(function(e){if("function"==typeof e)return e();var n=(e.defaultValue,r(e,["defaultValue"]));return m.a.createElement(O.a,w({access:o,key:e.name},s,a,{field:n,highlighted:t.props.highlighted==="#"+e.name}))}),l&&u({title:n,fields:i})))}}]),e}(m.a.Component),l.propTypes={title:h.a.string,fields:h.a.arrayOf(h.a.oneOfType([h.a.func,O.a.propTypes.field])),access:h.a.object,additionalFieldProps:h.a.object,highlighted:h.a.string,renderHeader:h.a.func,renderFooter:h.a.func},f)},1638:function(t,e,n){function r(t,e,n){var r=document.body,i=document.documentElement,o=t.getBoundingClientRect(),a=i.clientHeight,u=Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight);e=e||0;var c;c="bottom"===n?o.bottom-a:"middle"===n?o.bottom-a/2-o.height/2:o.top;var s=u-a;return Math.min(c+e+window.pageYOffset,s)}var i=n(1639);t.exports=function(t,e){if(e=e||{},"string"==typeof t&&(t=document.querySelector(t)),t)return i(0,r(t,e.offset,e.align),e)}},1639:function(t,e,n){function r(t,e,n){function r(){a(r),c.update()}n=n||{};var u=i(),c=o(u).ease(n.ease||"out-circ").to({top:e,left:t}).duration(n.duration||1e3);return c.update(function(t){window.scrollTo(0|t.left,0|t.top)}),c.on("end",function(){r=function(){}}),r(),c}function i(){return{top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft}}var o=n(1640),a=n(1644);t.exports=r},1640:function(t,e,n){function r(t){if(!(this instanceof r))return new r(t);this._from=t,this.ease("linear"),this.duration(500)}var i=n(1641),o=n(1642),a=n(1636),u=n(1643);t.exports=r,i(r.prototype),r.prototype.reset=function(){return this.isArray="array"===a(this._from),this._curr=o(this._from),this._done=!1,this._start=Date.now(),this},r.prototype.to=function(t){return this.reset(),this._to=t,this},r.prototype.duration=function(t){return this._duration=t,this},r.prototype.ease=function(t){if(!(t="function"==typeof t?t:u[t]))throw new TypeError("invalid easing function");return this._ease=t,this},r.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},r.prototype.step=function(){if(!this._done){var t=this._duration,e=Date.now();if(e-this._start>=t)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,r=this._to,i=this._curr,o=this._ease,a=(e-this._start)/t,u=o(a);if(this.isArray){for(var c=0;c<n.length;++c)i[c]=n[c]+(r[c]-n[c])*u;return this._update(i),this}for(var s in n)i[s]=n[s]+(r[s]-n[s])*u;return this._update(i),this}},r.prototype.update=function(t){return 0==arguments.length?this.step():(this._update=t,this)}},1641:function(t,e){function n(t){if(t)return r(t)}function r(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if((r=n[i])===e||r.fn===e){n.splice(i,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},1642:function(t,e,n){function r(t){switch(i(t)){case"object":var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=r(t[n]));return e;case"array":for(var e=new Array(t.length),o=0,a=t.length;o<a;o++)e[o]=r(t[o]);return e;case"regexp":var u="";return u+=t.multiline?"m":"",u+=t.global?"g":"",u+=t.ignoreCase?"i":"",new RegExp(t.source,u);case"date":return new Date(t.getTime());default:return t}}var i;try{i=n(1636)}catch(t){i=n(1636)}t.exports=r},1643:function(t,e){e.linear=function(t){return t},e.inQuad=function(t){return t*t},e.outQuad=function(t){return t*(2-t)},e.inOutQuad=function(t){return t*=2,t<1?.5*t*t:-.5*(--t*(t-2)-1)},e.inCube=function(t){return t*t*t},e.outCube=function(t){return--t*t*t+1},e.inOutCube=function(t){return t*=2,t<1?.5*t*t*t:.5*((t-=2)*t*t+2)},e.inQuart=function(t){return t*t*t*t},e.outQuart=function(t){return 1- --t*t*t*t},e.inOutQuart=function(t){return t*=2,t<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},e.inQuint=function(t){return t*t*t*t*t},e.outQuint=function(t){return--t*t*t*t*t+1},e.inOutQuint=function(t){return t*=2,t<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},e.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},e.outSine=function(t){return Math.sin(t*Math.PI/2)},e.inOutSine=function(t){return.5*(1-Math.cos(Math.PI*t))},e.inExpo=function(t){return 0==t?0:Math.pow(1024,t-1)},e.outExpo=function(t){return 1==t?t:1-Math.pow(2,-10*t)},e.inOutExpo=function(t){return 0==t?0:1==t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},e.inCirc=function(t){return 1-Math.sqrt(1-t*t)},e.outCirc=function(t){return Math.sqrt(1- --t*t)},e.inOutCirc=function(t){return t*=2,t<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.inBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.outBack=function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},e.inOutBack=function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},e.inBounce=function(t){return 1-e.outBounce(1-t)},e.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.inOutBounce=function(t){return t<.5?.5*e.inBounce(2*t):.5*e.outBounce(2*t-1)+.5},e["in-quad"]=e.inQuad,e["out-quad"]=e.outQuad,e["in-out-quad"]=e.inOutQuad,e["in-cube"]=e.inCube,e["out-cube"]=e.outCube,e["in-out-cube"]=e.inOutCube,e["in-quart"]=e.inQuart,e["out-quart"]=e.outQuart,e["in-out-quart"]=e.inOutQuart,e["in-quint"]=e.inQuint,e["out-quint"]=e.outQuint,e["in-out-quint"]=e.inOutQuint,e["in-sine"]=e.inSine,e["out-sine"]=e.outSine,e["in-out-sine"]=e.inOutSine,e["in-expo"]=e.inExpo,e["out-expo"]=e.outExpo,e["in-out-expo"]=e.inOutExpo,e["in-circ"]=e.inCirc,e["out-circ"]=e.outCirc,e["in-out-circ"]=e.inOutCirc,e["in-back"]=e.inBack,e["out-back"]=e.outBack,e["in-out-back"]=e.inOutBack,e["in-bounce"]=e.inBounce,e["out-bounce"]=e.outBounce,e["in-out-bounce"]=e.inOutBounce},1644:function(t,e){function n(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-r)),i=setTimeout(t,n);return r=e,i}e=t.exports=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||n;var r=(new Date).getTime(),i=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout;e.cancel=function(t){i.call(window,t)}},1666:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"route",function(){return i}),n.d(e,"fields",function(){return a});var r=n(2),i="/settings/:orgId/:projectId/alerts/",o=function(t){return t/=60,Object(r.tn)("%d minute","%d minutes",t)},a={subjectTemplate:{name:"subjectTemplate",type:"string",label:Object(r.t)("Subject Template"),placeholder:"e.g. $shortID - $title",help:Object(r.t)("The email subject to use (excluding the prefix) for individual alerts. Usable variables include: $title, $shortID, $projectID, $orgID, and ${tag:key}, such as ${tag:environment} or ${tag:release}.")},digestsMinDelay:{name:"digestsMinDelay",type:"range",min:60,max:3600,step:60,defaultValue:300,label:Object(r.t)("Minimum delivery interval"),help:Object(r.t)("Notifications will be delivered at most this often."),formatLabel:o},digestsMaxDelay:{name:"digestsMaxDelay",type:"range",min:60,max:3600,step:60,defaultValue:300,label:Object(r.t)("Maximum delivery interval"),help:Object(r.t)("Notifications will be delivered at least this often."),formatLabel:o}}},1686:function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}var i=n(5),o=n(1),a=n.n(o),u=n(0),c=n.n(u),s=n(53),l=n(24),f=n(38),p=Object(i.default)("div",{target:"e1fthm6j0"})("flex-grow:1;"),d=Object(i.default)(l.a,{target:"e1fthm6j1"})("margin-right:0.75em;"),h=Object(i.default)(function(t){var e=t.children,n=t.icon,i=r(t,["children","icon"]);return c.a.createElement(s.a,i,n&&c.a.createElement(d,{src:n,size:"1.5em"}),c.a.createElement(p,null,e),c.a.createElement(l.a,{src:"icon-chevron-right",size:"1em"}))},{target:"e1fthm6j2"})("display:flex;align-items:center;background-color:",function(t){return t.theme.yellowLightest},";color:",function(t){return t.theme.gray5},";border:1px dashed ",function(t){return t.theme.borderDark},";padding:",Object(f.a)(2),";margin-bottom:",Object(f.a)(3),";border-radius:0.25em;transition:0.2s border-color;&:hover{border-color:",function(t){return t.theme.blueLight},";}");h.propTypes={to:a.a.string,href:a.a.string,icon:a.a.string},e.a=h}});
//# sourceMappingURL=ProjectAlertSettings.js.map